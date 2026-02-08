import React from 'react';
import { Clock } from 'lucide-react';
import { ThemeConfig } from '../../types';
import { twMerge } from 'tailwind-merge';

export const CountdownWidget = ({ daysLeft, theme }: { daysLeft: number, theme?: ThemeConfig }) => {
  return (
    <div className="flex items-center justify-between h-full p-2">
      <div className="flex flex-col gap-1">
        <span className={twMerge("text-5xl font-extrabold tracking-tighter", theme?.primary)}>
          {daysLeft}
        </span>
        <span className={twMerge("text-sm font-semibold uppercase tracking-wider", theme?.mutedText)}>
          Days until departure
        </span>
      </div>
      <div className={twMerge("h-20 w-20 rounded-full flex items-center justify-center transition-colors", theme?.iconBg)}>
         <Clock size={36} strokeWidth={1.5} />
      </div>
    </div>
  );
};
