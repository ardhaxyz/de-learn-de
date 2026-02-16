"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

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

const INITIAL_PROGRESS: Progress = {
  days: {
    1: { unlocked: true, completed: false, sessions: { hoeren: false, lesen: false, schreiben: false, sprechen: false } }
  },
  streak: 0,
  lastCompletedDate: null,
};

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<Progress>(INITIAL_PROGRESS);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('german-progress');
    if (saved) {
      setProgress(JSON.parse(saved));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('german-progress', JSON.stringify(progress));
    }
  }, [progress, isLoaded]);

  const updateSession = (day: number, session: keyof SessionProgress, completed: boolean) => {
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
  };

  const unlockDay = (day: number) => {
    setProgress(prev => ({
      ...prev,
      days: {
        ...prev.days,
        [day]: prev.days[day] ? { ...prev.days[day], unlocked: true } : { unlocked: true, completed: false, sessions: { hoeren: false, lesen: false, schreiben: false, sprechen: false } }
      }
    }));
  };

  const getStreak = () => progress.streak;

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
