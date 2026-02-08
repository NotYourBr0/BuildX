import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ThemeConfig } from '../../types';
import { twMerge } from 'tailwind-merge';

const MESSAGES = [
  { id: 1, user: 'Sarah', text: 'Tickets are booked! ✈️', time: '10:30 AM' },
  { id: 2, user: 'Mike', text: 'Did we decide on dinner?', time: '10:32 AM' },
  { id: 3, user: 'You', text: 'Checking the list now.', time: '10:35 AM' },
];

export const ChatWidget = ({ theme }: { theme?: ThemeConfig }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 space-y-3">
        {MESSAGES.map((msg) => (
          <div key={msg.id} className="flex gap-3 items-start">
            <div className={twMerge(
              "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 bg-gradient-to-br",
              msg.user === 'You' ? "from-gray-400 to-gray-500" : "from-indigo-400 to-purple-400"
            )}>
              {msg.user[0]}
            </div>
            <div className={twMerge(
              "rounded-2xl px-4 py-2.5 text-sm max-w-[85%]",
              msg.user === 'You' 
                ? `${theme?.primary?.replace('text-', 'bg-') || 'bg-blue-600'} text-white rounded-tr-none ml-auto` 
                : "bg-black/5 rounded-tl-none text-gray-800"
            )}>
              {msg.user !== 'You' && <p className="font-bold text-[10px] opacity-60 mb-0.5 uppercase tracking-wide">{msg.user}</p>}
              <p className="leading-snug">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={twMerge("mt-4 pt-3 border-t border-black/5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider cursor-pointer transition-opacity opacity-60 hover:opacity-100", theme?.primary)}>
        <MessageCircle size={16} />
        <span>View all messages</span>
      </div>
    </div>
  );
};
