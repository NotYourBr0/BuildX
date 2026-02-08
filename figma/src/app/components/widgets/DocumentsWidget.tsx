import React from 'react';
import { FileText, Download } from 'lucide-react';
import { ThemeConfig } from '../../types';
import { twMerge } from 'tailwind-merge';

const DOCS = [
  { title: 'Flight Tickets.pdf', size: '2.4 MB' },
  { title: 'Hotel Booking.pdf', size: '1.1 MB' },
  { title: 'Insurance Policy.pdf', size: '4.5 MB' },
];

export const DocumentsWidget = ({ theme }: { theme?: ThemeConfig }) => {
  return (
    <div className="space-y-3">
      {DOCS.map((doc, i) => (
        <div 
          key={i} 
          className={twMerge(
            "flex items-center gap-3 p-3 transition-colors rounded-xl border cursor-pointer group",
            "bg-black/5 hover:bg-black/10 border-transparent"
          )}
        >
          <div className={twMerge("p-2 rounded-lg transition-colors", theme?.iconBg || "bg-blue-100 text-blue-600")}>
            <FileText size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <div className={twMerge("font-semibold text-sm truncate", theme?.textColor)}>{doc.title}</div>
            <div className={twMerge("text-xs font-medium", theme?.mutedText)}>{doc.size}</div>
          </div>
          <Download size={18} className={twMerge("opacity-0 group-hover:opacity-100 transition-opacity", theme?.primary)} />
        </div>
      ))}
    </div>
  );
};
