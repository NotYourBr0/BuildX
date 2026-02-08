import React from 'react';
import { ThemeConfig } from '../../types';
import { twMerge } from 'tailwind-merge';

const EVENTS = [
  { day: 'Day 1', title: 'Arrival in Kyoto', desc: 'Checked into Ryokan', color: 'bg-blue-400' },
  { day: 'Day 2', title: 'Fushimi Inari', desc: 'Early morning hike', color: 'bg-orange-400' },
  { day: 'Day 3', title: 'Arashiyama', desc: 'Bamboo grove and monkeys', color: 'bg-green-400' },
];

export const TimelineWidget = ({ theme }: { theme?: ThemeConfig }) => {
  return (
    <div className="relative pl-6 border-l-2 border-dashed border-stone-200 space-y-8 py-2">
      {EVENTS.map((evt, i) => (
        <div key={i} className="relative">
          <div className={twMerge("absolute -left-[29px] top-1.5 w-4 h-4 rounded-full ring-4 ring-white", evt.color)} />
          <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">{evt.day}</div>
          <h4 className={twMerge("font-bold text-lg leading-tight", theme?.textColor)}>{evt.title}</h4>
          <p className={twMerge("text-sm mt-1 font-medium", theme?.mutedText)}>{evt.desc}</p>
        </div>
      ))}
    </div>
  );
};
