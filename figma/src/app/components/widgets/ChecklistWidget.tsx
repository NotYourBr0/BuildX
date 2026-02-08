import React, { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { motion } from 'motion/react';
import { ThemeConfig } from '../../types';
import { twMerge } from 'tailwind-merge';

const INITIAL_ITEMS = [
  { id: 1, label: 'Passport & Visa', checked: true },
  { id: 2, label: 'Travel Insurance', checked: false },
  { id: 3, label: 'Book Airport Transfer', checked: false },
  { id: 4, label: 'Pack Chargers', checked: false },
];

export const ChecklistWidget = ({ theme }: { theme?: ThemeConfig }) => {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const toggle = (id: number) => {
    setItems(items.map(i => i.id === id ? { ...i, checked: !i.checked } : i));
  };

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => toggle(item.id)}
          className="flex items-center gap-3 w-full text-left group p-2 rounded-lg hover:bg-black/5 transition-colors"
          whileTap={{ scale: 0.98 }}
        >
          <div className={twMerge(
            "transition-colors duration-300",
            item.checked ? theme?.secondary || 'text-green-500' : 'text-gray-300 group-hover:text-gray-400'
          )}>
            {item.checked ? <CheckCircle2 size={24} weight="fill" /> : <Circle size={24} />}
          </div>
          <span className={twMerge(
            "flex-1 transition-all duration-300 font-medium",
            item.checked ? "line-through opacity-50" : theme?.textColor
          )}>
            {item.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
};
