import React from 'react';
import { WidgetConfig, ThemeConfig } from '../types';
import { WidgetFactory } from './widgets/WidgetFactory';
import { motion } from 'motion/react';
import { twMerge } from 'tailwind-merge';

interface LayoutEngineProps {
  widgets: WidgetConfig[];
  data: any;
  theme: ThemeConfig;
}

export const LayoutEngine = ({ widgets, data, theme }: LayoutEngineProps) => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={twMerge("relative h-48 rounded-3xl overflow-hidden border", theme.cardBorder)}
      >
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop"
          alt="Traveler's Journey"
          className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
          <div className="text-white">
            <h2 className="text-xl font-black uppercase tracking-tighter italic">Your Active {theme.label}</h2>
            <p className="text-xs font-bold opacity-80 uppercase tracking-widest">Ongoing Expedition</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {widgets.map((widget, index) => (
          <motion.div
            key={widget.id}
            layout
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: index * 0.05
            }}
            className={widget.colSpan === 2 ? "md:col-span-2" : ""}
          >
            <WidgetFactory config={widget} data={data} theme={theme} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
