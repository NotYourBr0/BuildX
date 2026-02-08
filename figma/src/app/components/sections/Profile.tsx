import React from 'react';
import { ThemeConfig, TravelerData } from '../../types';
import { motion } from 'motion/react';
import { User, Shield, Settings, Award, Map as MapIcon, Globe } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface ProfileProps {
    theme: ThemeConfig;
    data: TravelerData;
}

export const Profile = ({ theme, data }: ProfileProps) => {
    const stats = [
        { label: 'Countries', value: '12', icon: Globe },
        { label: 'Trips', value: '24', icon: MapIcon },
        { label: 'Badges', value: '8', icon: Award },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-top-5 duration-700">
            <div className="relative h-44 rounded-3xl overflow-hidden mb-[-80px] z-0 opacity-80 border border-transparent">
                <img
                    src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800&auto=format&fit=crop"
                    alt="Traveler Profile"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10" />
            </div>

            <div className="text-center space-y-4 relative z-10">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative inline-block"
                >
                    <div className={twMerge("w-32 h-32 rounded-full border-4 p-1", theme.cardBorder)}>
                        <img
                            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop"
                            alt="Profile"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                    <div className={twMerge("absolute bottom-0 right-0 p-2 rounded-xl shadow-lg border", theme.buttonPrimary)}>
                        <Shield size={16} />
                    </div>
                </motion.div>
                <div>
                    <h2 className="text-3xl font-black italic tracking-tighter uppercase">Alex Rivera</h2>
                    <p className={twMerge("text-sm font-medium", theme.mutedText)}>Professional Voyager • Platinum Member</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                    <div key={stat.label} className={twMerge("p-4 rounded-2xl border text-center space-y-1", theme.cardBg, theme.cardBorder)}>
                        <stat.icon className={twMerge("mx-auto mb-1", theme.primary)} size={20} />
                        <div className="text-xl font-black leading-none">{stat.value}</div>
                        <div className={twMerge("text-[10px] uppercase font-bold tracking-widest", theme.mutedText)}>{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="space-y-3">
                <h3 className="font-bold text-sm uppercase tracking-widest ml-1">Account & Vibes</h3>
                {[
                    { icon: User, label: 'Personal Information', sub: 'Manage your global identity' },
                    { icon: Settings, label: 'Travel Preferences', sub: 'Adjust your algorithm' }
                ].map((item, i) => (
                    <div key={i} className={twMerge("p-4 rounded-2xl border flex items-center justify-between group cursor-pointer transition-all hover:pl-6", theme.cardBg, theme.cardBorder)}>
                        <div className="flex items-center gap-4">
                            <div className={twMerge("p-2 rounded-xl", theme.iconBg)}>
                                <item.icon size={20} />
                            </div>
                            <div>
                                <div className="font-bold text-sm">{item.label}</div>
                                <div className={twMerge("text-xs", theme.mutedText)}>{item.sub}</div>
                            </div>
                        </div>
                        <div className={twMerge("w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", theme.iconBg)}>
                            <Shield size={14} />
                        </div>
                    </div>
                ))}
            </div>

            <div className={twMerge("p-6 rounded-3xl border relative overflow-hidden", theme.cardBg, theme.cardBorder)}>
                <div className={twMerge("absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full -mr-16 -mt-16 opacity-20", theme.accentGradient)} />
                <div className="relative z-10">
                    <h3 className="font-bold mb-2">Current Mode Status</h3>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-widest">{theme.label}</span>
                        <span className="text-xs font-bold">85% Aligned</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '85%' }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className={twMerge("h-full", theme.primary.replace('text-', 'bg-'))}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
