import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, MapPin, Search } from 'lucide-react';
import { ThemeConfig, TravelerData, ItineraryItem } from '../../types';
import { twMerge } from 'tailwind-merge';

interface ExploreProps {
    theme: ThemeConfig;
    data: TravelerData;
    onAddToPlan: (item: ItineraryItem) => void;
}

export const Explore = ({ theme, data, onAddToPlan }: ExploreProps) => {
    const [isAnalyzing, setIsAnalyzing] = React.useState(false);
    const [recommendation, setRecommendation] = React.useState<{ name: string, desc: string } | null>(null);
    const [justAdded, setJustAdded] = React.useState(false);

    const trendingDestinations = [
        { name: 'Kyoto, Japan', tags: ['Culture', 'Serene'], image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=400&auto=format&fit=crop' },
        { name: 'Reykjavik, Iceland', tags: ['Adventure', 'Nature'], image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=400&auto=format&fit=crop' },
        { name: 'Amalfi Coast, Italy', tags: ['Luxury', 'Views'], image: 'https://images.unsplash.com/photo-1533903345206-114fe48a1bc3?q=80&w=400&auto=format&fit=crop' },
        { name: 'Bali, Indonesia', tags: ['Tropical', 'Relax'], image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=400&auto=format&fit=crop' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={twMerge("relative h-56 rounded-3xl overflow-hidden border", theme.cardBorder)}
            >
                <img
                    src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=800&auto=format&fit=crop"
                    alt="Adventure Awaits"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-10">
                    <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-2">Infinite<br />Discoveries</h2>
                    <p className="text-white/80 text-sm font-medium max-w-[180px]">Find destinations that match your {theme.id} vibe.</p>
                </div>
            </motion.div>

            <div className="relative group">
                <div className={twMerge(
                    "absolute -inset-1 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000",
                    theme.accentGradient
                )} />
                <div className={twMerge("relative p-6 rounded-3xl border flex items-center gap-4", theme.cardBg, theme.cardBorder)}>
                    <Search className={theme.primary} />
                    <input
                        type="text"
                        placeholder="Search your next emotional destination..."
                        className="bg-transparent border-none outline-none w-full text-lg font-medium placeholder:text-gray-400"
                    />
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <Compass className={theme.primary} />
                        Trending for your {theme.id} mood
                    </h2>
                    <button className={twMerge("text-sm font-semibold", theme.primary)}>View all</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {trendingDestinations.map((dest, i) => (
                        <motion.div
                            key={dest.name}
                            whileHover={{ y: -8 }}
                            className={twMerge("rounded-2xl overflow-hidden border", theme.cardBorder)}
                        >
                            <div className="h-48 relative">
                                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest opacity-80 mb-1">
                                        <MapPin size={10} />
                                        {dest.tags.join(' • ')}
                                    </div>
                                    <div className="text-lg font-bold">{dest.name}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className={twMerge("p-8 rounded-3xl text-center space-y-4 relative overflow-hidden", theme.cardBg, theme.cardBorder)}>
                {isAnalyzing && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-white/80 backdrop-blur-md z-20 flex flex-col items-center justify-center p-6"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className={twMerge("w-12 h-12 border-4 border-t-transparent rounded-full mb-4", theme.primary.replace('text-', 'border-'))}
                        />
                        <p className="font-black uppercase italic tracking-tighter">Analyzing your {theme.id} vibe...</p>
                        <p className="text-xs opacity-60 uppercase tracking-widest mt-1">Checking current emotional alignment</p>
                    </motion.div>
                )}

                {!recommendation ? (
                    <>
                        <div className={twMerge("inline-flex p-3 rounded-full mb-2", theme.iconBg)}>
                            <Sparkles size={32} />
                        </div>
                        <h3 className="text-xl font-bold">AI Mood Travel Concierge</h3>
                        <p className={twMerge("max-w-xs mx-auto text-sm", theme.mutedText)}>
                            Let our AI analyze your current travel vibe and suggest the perfect itinerary for your {theme.id} state.
                        </p>
                        <button
                            onClick={() => {
                                setIsAnalyzing(true);
                                setTimeout(() => {
                                    setIsAnalyzing(false);
                                    setRecommendation({
                                        name: "Santorini, Greece",
                                        desc: `Based on your ${theme.id} energy, we suggest a sunset yacht tour to perfectly align with your current mood.`
                                    });
                                }, 2500);
                            }}
                            className={twMerge("w-full py-4 rounded-xl font-bold transition-all hover:shadow-xl", theme.buttonPrimary)}
                        >
                            Start Recommendation
                        </button>
                    </>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <div className={twMerge("inline-flex p-3 rounded-full", theme.iconBg)}>
                            <Sparkles size={32} className="text-yellow-500" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Your AI Match</p>
                            <h3 className="text-2xl font-black italic uppercase tracking-tighter">{recommendation.name}</h3>
                        </div>
                        <p className={twMerge("text-sm max-w-xs mx-auto", theme.mutedText)}>
                            {recommendation.desc}
                        </p>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setRecommendation(null)}
                                className={twMerge("flex-1 py-3 rounded-xl font-bold border", theme.cardBorder)}
                            >
                                Reset
                            </button>
                            <button
                                onClick={() => {
                                    onAddToPlan({
                                        time: 'Added Now',
                                        event: `Visit: ${recommendation.name}`,
                                        loc: recommendation.name,
                                        done: false
                                    });
                                    setJustAdded(true);
                                    setTimeout(() => setJustAdded(false), 3000);
                                }}
                                disabled={justAdded}
                                className={twMerge(
                                    "flex-[2] py-3 rounded-xl font-bold text-white transition-all",
                                    justAdded ? "bg-green-500" : "bg-black"
                                )}
                            >
                                {justAdded ? "✓ Added!" : "Add to Plan"}
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};
