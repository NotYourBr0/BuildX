import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Camera } from 'lucide-react';
import { ThemeConfig } from '../../types';
import { twMerge } from 'tailwind-merge';

const PHOTOS = [
  "https://images.unsplash.com/photo-1741855793285-ec021cbc1212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMHRyYXZlbCUyMGt5b3RvJTIwc3RyZWV0JTIwZm9vZHxlbnwxfHx8fDE3NzA0NjEyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1758272959663-b30513083206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwaGlraW5nJTIwbW91bnRhaW5zJTIwaGFwcHl8ZW58MXx8fHwxNzcwNDYxMjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1768593396351-6dfccd1d38fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY29mZmVlJTIwc2hvcCUyMHRyYXZlbCUyMHJlbGF4fGVufDF8fHx8MTc3MDQ2MTIzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

export const PhotoGridWidget = ({ theme }: { theme?: ThemeConfig }) => {
  return (
    <div className="relative pb-2">
      <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 3}}>
        <Masonry gutter="12px">
          {PHOTOS.map((src, i) => (
            <div 
              key={i} 
              className="relative group overflow-hidden rounded-xl aspect-[3/4] shadow-sm cursor-pointer"
            >
              <img 
                src={src} 
                alt="Travel memory" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <div className={twMerge(
        "absolute bottom-4 right-4 p-4 rounded-full shadow-xl hover:scale-110 transition-transform cursor-pointer text-white",
        theme?.buttonPrimary || "bg-blue-600"
      )}>
        <Camera size={24} strokeWidth={2.5} />
      </div>
    </div>
  );
};
