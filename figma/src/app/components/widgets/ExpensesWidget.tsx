import React from 'react';
import { TrendingUp } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from 'recharts';
import { ThemeConfig } from '../../types';
import { twMerge } from 'tailwind-merge';

const DATA = [
  { name: 'Mon', amt: 120 },
  { name: 'Tue', amt: 200 },
  { name: 'Wed', amt: 150 },
  { name: 'Thu', amt: 80 },
];

export const ExpensesWidget = ({ theme }: { theme?: ThemeConfig }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-baseline gap-2 mb-2">
        <span className={twMerge("text-4xl font-extrabold tracking-tight", theme?.primary)}>
          $1,240
        </span>
        <span className={twMerge("text-xs font-semibold uppercase tracking-wider", theme?.mutedText)}>
          Total Spent
        </span>
      </div>
      
      <div className="flex-1 w-full min-h-[120px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={DATA}>
             <XAxis 
               dataKey="name" 
               tick={{fontSize: 10, fill: '#94a3b8', fontWeight: 600}} 
               axisLine={false} 
               tickLine={false} 
               dy={10}
             />
             <Tooltip 
               cursor={{fill: 'transparent'}} 
               contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '12px', fontWeight: 'bold'}} 
             />
             <Bar 
               dataKey="amt" 
               fill="currentColor" 
               className={twMerge("text-emerald-500", theme?.primary?.replace('text-', 'text-'))}
               radius={[6, 6, 6, 6]} 
               barSize={32}
               fillOpacity={0.8}
             />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center gap-2 text-xs font-medium mt-2 bg-red-50 text-red-700 p-2.5 rounded-xl border border-red-100">
        <TrendingUp size={16} />
        <span>15% over daily budget</span>
      </div>
    </div>
  );
};
