import React from 'react';
import { Footprints, Map, Camera, Heart } from 'lucide-react';
import { ThemeConfig } from '../../types';
import { twMerge } from 'tailwind-merge';

export const StatsWidget = ({ theme }: { theme?: ThemeConfig }) => {
  return (
    <div className="grid grid-cols-2 gap-3 h-full">
      <div className="bg-orange-50 p-4 rounded-2xl flex flex-col items-center justify-center gap-1 border border-orange-100">
        <Footprints size={24} className="text-orange-400 mb-1" />
        <span className="text-3xl font-bold text-orange-900">42k</span>
        <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">Steps</span>
      </div>
      <div className="bg-blue-50 p-4 rounded-2xl flex flex-col items-center justify-center gap-1 border border-blue-100">
        <Map size={24} className="text-blue-400 mb-1" />
        <span className="text-3xl font-bold text-blue-900">12</span>
        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Places</span>
      </div>
      <div className="bg-pink-50 p-4 rounded-2xl flex flex-col items-center justify-center gap-1 border border-pink-100">
        <Camera size={24} className="text-pink-400 mb-1" />
        <span className="text-3xl font-bold text-pink-900">340</span>
        <span className="text-[10px] font-bold text-pink-400 uppercase tracking-widest">Photos</span>
      </div>
      <div className="bg-red-50 p-4 rounded-2xl flex flex-col items-center justify-center gap-1 border border-red-100">
        <Heart size={24} className="text-red-400 mb-1" />
        <span className="text-3xl font-bold text-red-900">∞</span>
        <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Memories</span>
      </div>
    </div>
  );
};
