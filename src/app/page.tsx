"use client";

import { useProgress } from "./context/ProgressContext";
import { Flame, CheckCircle2, Circle, Lock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { progress, getStreak } = useProgress();
  const streak = getStreak();

  const totalDays = 14;
  const completedDaysCount = Object.values(progress.days).filter(d => d.completed).length;

  return (
    <div className="p-6 space-y-8">
      {/* Header / Streak Section */}
      <div className="flex justify-between items-center bg-de-black text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-xl font-bold opacity-80 uppercase tracking-widest text-de-gold">Dashboard</h1>
          <p className="text-3xl font-black mt-1">Guten Tag!</p>
        </div>
        <div className="flex flex-col items-center bg-white/10 p-3 rounded-2xl backdrop-blur-sm relative z-10 border border-white/10">
          <Flame className="text-de-gold fill-de-gold mb-1" size={32} />
          <span className="text-2xl font-black">{streak}</span>
          <span className="text-[10px] uppercase font-bold tracking-tighter opacity-60">Streak</span>
        </div>
        {/* Background decorative elements */}
        <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-de-red/20 rounded-full blur-3xl"></div>
      </div>

      {/* Progress Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-de-red/5 p-4 rounded-2xl border border-de-red/10">
          <p className="text-xs font-bold text-de-red/60 uppercase">Selesai</p>
          <p className="text-2xl font-black text-de-red">{completedDaysCount} <span className="text-sm font-medium opacity-60">Hari</span></p>
        </div>
        <div className="bg-de-gold/5 p-4 rounded-2xl border border-de-gold/10">
          <p className="text-xs font-bold text-de-gold/80 uppercase">Target</p>
          <p className="text-2xl font-black text-de-gold/80">{totalDays} <span className="text-sm font-medium opacity-60">Hari</span></p>
        </div>
      </div>

      {/* Course Map */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <div className="w-1.5 h-6 bg-de-black rounded-full"></div>
          Kurikulum Anda
        </h2>
        
        <div className="space-y-3">
          {Array.from({ length: totalDays }).map((_, i) => {
            const dayNum = i + 1;
            const dayData = progress.days[dayNum];
            const isUnlocked = dayData?.unlocked || dayNum === 1;
            const isCompleted = dayData?.completed;

            return (
              <Link 
                key={dayNum} 
                href={isUnlocked ? `/day/${dayNum}` : "#"}
                className={`flex items-center p-4 rounded-2xl border-2 transition-all active:scale-[0.98] ${
                  isCompleted 
                    ? "bg-green-50 border-green-200" 
                    : isUnlocked 
                      ? "bg-white border-de-gray hover:border-de-red/30" 
                      : "bg-gray-50 border-gray-100 opacity-60 cursor-not-allowed"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg ${
                  isCompleted 
                    ? "bg-green-500 text-white" 
                    : isUnlocked 
                      ? "bg-de-black text-white" 
                      : "bg-gray-200 text-gray-400"
                }`}>
                  {dayNum}
                </div>
                
                <div className="ml-4 flex-1">
                  <h3 className={`font-bold ${isUnlocked ? "text-de-black" : "text-gray-400"}`}>
                    Hari Ke-{dayNum}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {isCompleted ? "Latihan Selesai" : isUnlocked ? "Tersedia Sekarang" : "Terkunci"}
                  </p>
                </div>

                <div className="ml-2">
                  {isCompleted ? (
                    <CheckCircle2 className="text-green-500" size={24} />
                  ) : isUnlocked ? (
                    <Circle className="text-de-red opacity-30" size={24} />
                  ) : (
                    <Lock className="text-gray-300" size={20} />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
