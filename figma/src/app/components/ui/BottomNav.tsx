import React from 'react';
import { Home, Map, Calendar, User } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { ThemeConfig } from '../../types';

interface BottomNavProps {
  theme?: ThemeConfig;
  activeSection: string;
  onSectionChange: (section: any) => void;
}

export const BottomNav = ({ theme, activeSection, onSectionChange }: BottomNavProps) => {
  const items = [
    { icon: Home, label: 'Home', id: 'home' },
    { icon: Map, label: 'Explore', id: 'explore' },
    { icon: Calendar, label: 'Plan', id: 'plan' },
    { icon: User, label: 'Profile', id: 'profile' },
  ];

  return (
    <div className={twMerge(
      "fixed bottom-0 left-0 right-0 border-t px-6 py-3 flex justify-between items-center z-30 transition-colors duration-500",
      "bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60",
      "max-w-4xl mx-auto md:bottom-6 md:rounded-full md:border md:shadow-2xl md:px-12",
      theme?.cardBorder || "border-gray-200"
    )}>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSectionChange(item.id)}
          className={twMerge(
            "flex flex-col items-center gap-1 transition-all duration-300 relative group",
            activeSection === item.id ? theme?.primary : theme?.mutedText || "text-gray-400"
          )}
        >
          <div className={twMerge(
            "absolute -top-1 w-8 h-1 rounded-full transition-all duration-300 scale-x-0 bg-current opacity-0",
            activeSection === item.id && "scale-x-100 opacity-100"
          )} />
          <item.icon size={24} strokeWidth={activeSection === item.id ? 2.5 : 2} className="group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
        </button>
      ))}
    </div>
  );
};
