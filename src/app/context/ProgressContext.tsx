"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface SessionProgress {
  hoeren: boolean;
  lesen: boolean;
  schreiben: boolean;
  sprechen: boolean;
}

interface DayData {
  completed: boolean;
  unlocked: boolean;
  sessions: SessionProgress;
}

interface Progress {
  days: Record<number, DayData>;
  streak: number;
  lastCompletedDate: string | null;
}

interface ProgressContextType {
  progress: Progress;
  updateSession: (day: number, session: keyof SessionProgress, completed: boolean) => void;
  unlockDay: (day: number) => void;
  getStreak: () => number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY = 'german-progress';

const INITIAL_PROGRESS: Progress = {
  days: {
    1: { unlocked: true, completed: false, sessions: { hoeren: false, lesen: false, schreiben: false, sprechen: false } }
  },
  streak: 0,
  lastCompletedDate: null,
};

// Safe localStorage getter for SSR
function getStoredProgress(): Progress {
  if (typeof window === 'undefined') return INITIAL_PROGRESS;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : INITIAL_PROGRESS;
  } catch {
    return INITIAL_PROGRESS;
  }
}

// Safe localStorage setter for SSR
function setStoredProgress(progress: Progress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Ignore storage errors
  }
}

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Use state to track progress, initialized with default
  const [progress, setProgress] = useState<Progress>(INITIAL_PROGRESS);
  const [isMounted, setIsMounted] = useState(false);

  // Hydrate from localStorage after mount (client-side only)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Intentional hydration pattern for SSR
    setProgress(getStoredProgress());
    setIsMounted(true);
  }, []);

  // Sync to localStorage whenever progress changes (after mount)
  useEffect(() => {
    if (isMounted) {
      setStoredProgress(progress);
    }
  }, [progress, isMounted]);

  const updateSession = useCallback((day: number, session: keyof SessionProgress, completed: boolean) => {
    setProgress(prev => {
      const dayData = prev.days[day] || { unlocked: false, completed: false, sessions: { hoeren: false, lesen: false, schreiben: false, sprechen: false } };
      const newSessions = { ...dayData.sessions, [session]: completed };
      
      const isDayCompleted = Object.values(newSessions).every(s => s === true);
      
      const newProgress = {
        ...prev,
        days: {
          ...prev.days,
          [day]: { ...dayData, sessions: newSessions, completed: isDayCompleted }
        }
      };

      // Handle streak if day just completed
      if (isDayCompleted && !dayData.completed) {
        const today = new Date().toISOString().split('T')[0];
        if (prev.lastCompletedDate !== today) {
          newProgress.streak = (prev.streak || 0) + 1;
          newProgress.lastCompletedDate = today;
        }
        
        // Auto unlock next day
        const nextDay = day + 1;
        if (!newProgress.days[nextDay]) {
          newProgress.days[nextDay] = { 
            unlocked: true, 
            completed: false, 
            sessions: { hoeren: false, lesen: false, schreiben: false, sprechen: false } 
          };
        } else {
          newProgress.days[nextDay].unlocked = true;
        }
      }

      return newProgress;
    });
  }, []);

  const unlockDay = useCallback((day: number) => {
    setProgress(prev => ({
      ...prev,
      days: {
        ...prev.days,
        [day]: prev.days[day] 
          ? { ...prev.days[day], unlocked: true } 
          : { unlocked: true, completed: false, sessions: { hoeren: false, lesen: false, schreiben: false, sprechen: false } }
      }
    }));
  }, []);

  const getStreak = useCallback(() => progress.streak, [progress.streak]);

  return (
    <ProgressContext.Provider value={{ progress, updateSession, unlockDay, getStreak }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
