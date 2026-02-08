import React from 'react';
import { EmotionalMode, ThemeConfig } from '../../types';
import { twMerge } from 'tailwind-merge';

interface ModeSwitcherProps {
  currentMode: EmotionalMode;
  setMode: (mode: EmotionalMode) => void;
  theme?: ThemeConfig;
}

export const ModeSwitcher = ({ currentMode, setMode, theme }: ModeSwitcherProps) => {
  return (
    <div className="fixed bottom-24 right-4 z-50 bg-slate-900/90 backdrop-blur-md text-slate-200 p-3 rounded-2xl shadow-2xl flex flex-col gap-1 text-xs border border-slate-700/50">
      <div className="font-bold px-2 mb-2 pb-2 border-b border-slate-700/50 text-slate-400 uppercase tracking-widest text-[10px]">
        Dev: Mood Simulator
      </div>
      {(['pre', 'during', 'post', 'solo', 'group'] as EmotionalMode[]).map((m) => (
        <button
          key={m}
          onClick={() => setMode(m)}
          className={twMerge(
            "px-4 py-2 rounded-xl text-left transition-all duration-200 flex items-center justify-between group",
            currentMode === m
              ? "bg-slate-100 text-slate-900 font-bold shadow-sm"
              : "hover:bg-slate-800 text-slate-400"
          )}
        >
          <span className="capitalize">{m} Trip</span>
          {currentMode === m && <div className={twMerge("w-2 h-2 rounded-full", theme?.primary?.replace('text-', 'bg-') || 'bg-blue-500')} />}
        </button>
      ))}
    </div>
  );
};
