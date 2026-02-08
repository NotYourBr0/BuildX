import React from 'react';
import { CloudSun, CloudRain, Sun } from 'lucide-react';
import { ThemeConfig } from '../../types';
import { twMerge } from 'tailwind-merge';

export const WeatherWidget = ({ theme }: { theme?: ThemeConfig }) => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex items-center gap-4">
        <div className={twMerge("p-3 rounded-full bg-yellow-100 text-yellow-500")}>
           <Sun size={32} strokeWidth={2} />
        </div>
        <div>
          <div className={twMerge("text-4xl font-bold tracking-tighter", theme?.textColor)}>24°C</div>
          <div className={twMerge("text-sm font-medium", theme?.mutedText)}>Kyoto, Japan</div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-black/5 rounded-xl p-2 py-3">
          <div className="font-bold opacity-70 mb-1">Mon</div>
          <CloudSun size={20} className="mx-auto my-1 text-sky-500" />
          <div className="font-bold">22°</div>
        </div>
        <div className="bg-black/5 rounded-xl p-2 py-3">
          <div className="font-bold opacity-70 mb-1">Tue</div>
          <CloudRain size={20} className="mx-auto my-1 text-blue-500" />
          <div className="font-bold">19°</div>
        </div>
        <div className="bg-black/5 rounded-xl p-2 py-3">
          <div className="font-bold opacity-70 mb-1">Wed</div>
          <Sun size={20} className="mx-auto my-1 text-yellow-500" />
          <div className="font-bold">25°</div>
        </div>
      </div>
    </div>
  );
};
