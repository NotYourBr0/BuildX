import '../styles/fonts.css';
import React, { useState, useEffect } from 'react';
import { detectMode, getInitialData } from './utils/modeUtils';
import { LAYOUTS, THEMES, ITINERARIES } from './config';
import { EmotionalMode, TravelerData, AppSection, ItineraryItem } from './types';
import { Header } from './components/ui/Header';
import { BottomNav } from './components/ui/BottomNav';
import { LayoutEngine } from './components/LayoutEngine';
import { Explore } from './components/sections/Explore';
import { Plan } from './components/sections/Plan';
import { Profile } from './components/sections/Profile';
import { ModeSwitcher } from './components/ui/ModeSwitcher';
import { motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function App() {
  const [data, setData] = useState<TravelerData>(getInitialData());
  const [mode, setMode] = useState<EmotionalMode>('pre');
  const [manualMode, setManualMode] = useState<EmotionalMode | null>(null);
  const [activeSection, setActiveSection] = useState<AppSection>('home');
  const [customItinerary, setCustomItinerary] = useState<Record<EmotionalMode, ItineraryItem[]>>({
    pre: [], during: [], post: [], solo: [], group: []
  });

  const handleAddToPlan = (item: ItineraryItem) => {
    setCustomItinerary(prev => ({
      ...prev,
      [mode]: [...prev[mode], item]
    }));
  };

  // Derive mode from data, unless manually overridden
  useEffect(() => {
    if (!manualMode) {
      setMode(detectMode(data));
    } else {
      setMode(manualMode);
    }
  }, [data, manualMode]);

  const currentTheme = THEMES[mode];
  const currentLayout = LAYOUTS[mode];

  // Container classes based on theme
  const appClasses = twMerge(
    'min-h-screen transition-all duration-1000 ease-in-out font-sans selection:bg-black/10',
    currentTheme.background,
    currentTheme.textColor
  );

  return (
    <div className={appClasses}>
      <div className="max-w-4xl mx-auto min-h-screen relative flex flex-col">
        {/* Dynamic Background Accents */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              background: `linear-gradient(to bottom right, ${mode === 'pre' ? '#eff6ff' : mode === 'during' ? '#ecfdf5' : '#fff7ed'} 0%, transparent 100%)`
            }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          />

          {/* Top Right Orb */}
          <motion.div
            animate={{
              scale: mode === 'pre' ? 1 : mode === 'during' ? 1.2 : 0.8,
              x: mode === 'during' ? 50 : 0,
              opacity: 0.6
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className={clsx(
              "absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full blur-3xl mix-blend-multiply transition-colors duration-1000 bg-gradient-to-br",
              currentTheme.accentGradient
            )}
          />

          {/* Bottom Left Orb */}
          <motion.div
            animate={{
              scale: mode === 'post' ? 1.2 : 0.9,
              y: mode === 'pre' ? 50 : 0,
              opacity: 0.5
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className={clsx(
              "absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] rounded-full blur-3xl mix-blend-multiply transition-colors duration-1000 bg-gradient-to-tr",
              currentTheme.accentGradient
            )}
          />
        </div>

        <div className="relative z-10 flex-1 flex flex-col">
          <Header mode={mode} greeting="Good Morning, Alex" theme={currentTheme} />

          <main className="flex-1 px-4 sm:px-6 py-6 pb-32">
            {/* Content */}
            <AnimatePresence mode="wait">
              {activeSection === 'home' && (
                <motion.div
                  key="home"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <LayoutEngine
                    widgets={currentLayout}
                    data={data}
                    theme={currentTheme}
                  />
                </motion.div>
              )}
              {activeSection === 'explore' && (
                <motion.div
                  key="explore"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Explore theme={currentTheme} data={data} onAddToPlan={handleAddToPlan} />
                </motion.div>
              )}
              {activeSection === 'plan' && (
                <motion.div
                  key="plan"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Plan
                    theme={currentTheme}
                    data={data}
                    customItems={customItinerary[mode]}
                  />
                </motion.div>
              )}
              {activeSection === 'profile' && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(10px)' }}
                  transition={{ duration: 0.3 }}
                >
                  <Profile theme={currentTheme} data={data} />
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          <BottomNav
            theme={currentTheme}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </div>

        <ModeSwitcher currentMode={mode} setMode={setManualMode} theme={currentTheme} />
      </div>
    </div>
  );
}
