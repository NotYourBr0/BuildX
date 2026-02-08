import React from 'react';
import { Bell, Menu } from 'lucide-react';
import { EmotionalMode, ThemeConfig } from '../../types';
import { twMerge } from 'tailwind-merge';

interface HeaderProps {
  mode: EmotionalMode;
  greeting: string;
  theme?: ThemeConfig;
}

export const Header = ({ mode, greeting, theme }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-5 sticky top-0 z-20 backdrop-blur-md bg-transparent">
      <div>
        <h1 className={twMerge("text-2xl font-bold tracking-tight", theme?.primary)}>
          {greeting}
        </h1>
        <p className={twMerge("text-xs font-semibold uppercase tracking-widest mt-0.5", theme?.mutedText)}>
          {mode === 'pre' ? 'Preparation Phase' : mode === 'during' ? 'Current Trip' : 'Trip Recap'}
        </p>
      </div>
      <div className="flex gap-2">
        <button className={twMerge("p-2.5 rounded-full transition-all duration-300", theme?.iconBg, "hover:opacity-80 relative")}>
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>
        <button className={twMerge("p-2.5 rounded-full transition-all duration-300", theme?.iconBg, "hover:opacity-80")}>
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
};
