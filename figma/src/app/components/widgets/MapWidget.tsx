import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { ThemeConfig } from '../../types';
import { twMerge } from 'tailwind-merge';

export const MapWidget = ({ theme }: { theme?: ThemeConfig }) => {
  return (
    <div className="relative h-64 w-full bg-slate-100 rounded-2xl overflow-hidden group cursor-pointer border border-black/5">
      {/* Abstract Map Background */}
      <div className="absolute inset-0 opacity-40 mix-blend-multiply">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-300 rounded-full blur-[60px]" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-emerald-300 rounded-full blur-[60px]" />
        <svg className="w-full h-full opacity-30" width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-500"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Route Line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-md">
        <path d="M 50 150 C 100 100, 200 180, 300 80" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="8 6" className={twMerge("text-slate-600", theme?.primary)} />
      </svg>

      {/* Markers */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-110">
        <div className="bg-white p-2.5 rounded-full shadow-xl ring-4 ring-white/50">
           <MapPin size={24} className="text-red-500 fill-current" />
        </div>
      </div>
      
       <div className="absolute top-[80px] right-[20%] transition-transform duration-300 group-hover:scale-110">
        <div className={twMerge("text-white p-2.5 rounded-full shadow-xl ring-4 ring-white/50 animate-bounce", theme?.buttonPrimary || "bg-blue-600")}>
           <Navigation size={24} fill="currentColor" />
        </div>
        <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-xl shadow-lg text-xs font-bold whitespace-nowrap border border-black/5">
          Fushimi Inari
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center gap-2">
        <span className={theme?.primary}>2.5 km</span>
        <span className="opacity-60">to destination</span>
      </div>
    </div>
  );
};
