import React from 'react';
import { ITINERARIES } from '../../config';
import { ThemeConfig, TravelerData, EmotionalMode, ItineraryItem } from '../../types';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, Plus, ChevronRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface PlanProps {
    theme: ThemeConfig;
    data: TravelerData;
    customItems?: ItineraryItem[];
}

export const Plan = ({ theme, data, customItems = [] }: PlanProps) => {
    const baseItinerary = ITINERARIES[theme.id as EmotionalMode] || [];
    const itinerary = [...baseItinerary, ...customItems];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-5 duration-700">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className={twMerge("relative h-40 rounded-3xl overflow-hidden border", theme.cardBorder)}
            >
                <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop"
                    alt="Planning Your Roadmap"
                    className="w-full h-full object-cover contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center">
                    <h2 className="text-2xl font-black text-white uppercase italic tracking-widest text-center">Mastering the<br />Blueprints</h2>
                </div>
            </motion.div>

            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-black uppercase italic tracking-tighter">Your Itinerary</h2>
                    <p className={twMerge("text-sm", theme.mutedText)}>Managing your {theme.id} trip rhythm</p>
                </div>
                <button className={twMerge("p-3 rounded-2xl shadow-lg", theme.buttonPrimary)}>
                    <Plus size={24} />
                </button>
            </div>

            <div className="relative pl-8 space-y-8 py-4">
                {/* Timeline Line */}
                <div className={twMerge("absolute left-3 top-0 bottom-0 w-[2px] opacity-20", theme.secondary.replace('text-', 'bg-'))} />

                {itinerary.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="relative"
                    >
                        <div className={twMerge(
                            "absolute -left-[25px] top-1 w-4 h-4 rounded-full border-2 transition-colors",
                            item.done ? theme.primary.replace('text-', 'bg-') : "bg-white",
                            theme.cardBorder.replace('border-', 'border-')
                        )} />

                        <div className={twMerge(
                            "p-5 rounded-2xl border transition-all hover:scale-[1.02] cursor-pointer",
                            theme.cardBg,
                            theme.cardBorder,
                            item.done ? "opacity-60 grayscale-[0.5]" : "shadow-md"
                        )}>
                            <div className="flex justify-between items-start mb-2">
                                <div className={twMerge("flex items-center gap-1.5 text-xs font-bold", theme.secondary)}>
                                    <Clock size={14} />
                                    {item.time}
                                </div>
                                <ChevronRight size={16} className={theme.mutedText} />
                            </div>
                            <div className="font-bold text-lg">{item.event}</div>
                            <div className={twMerge("text-sm flex items-center gap-1", theme.mutedText)}>
                                <span className="w-1 h-1 rounded-full bg-current" />
                                {item.loc}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className={twMerge("p-6 rounded-3xl border flex items-center justify-between", theme.cardBg, theme.cardBorder)}>
                <div className="flex items-center gap-4">
                    <div className={twMerge("p-4 rounded-2xl", theme.iconBg)}>
                        <CalendarIcon />
                    </div>
                    <div>
                        <div className="font-bold">Sync Calendar</div>
                        <div className={twMerge("text-xs", theme.mutedText)}>Import your flight details</div>
                    </div>
                </div>
                <button className={twMerge("px-6 py-2 rounded-xl text-sm font-bold border", theme.cardBorder)}>Connect</button>
            </div>
        </div>
    );
};
