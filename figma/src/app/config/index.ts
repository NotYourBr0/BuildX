import { LayoutConfig, WidgetConfig } from '../types';

export const THEMES = {
  pre: {
    id: 'pre',
    label: 'Pre-Trip',
    // Backgrounds
    background: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-white',
    accentGradient: 'from-blue-400/20 to-indigo-400/20',

    // Cards
    cardBg: 'bg-white/70 backdrop-blur-xl',
    cardBorder: 'border-white/50',
    cardShadow: 'shadow-[0_8px_30px_rgb(0,0,0,0.04)]',
    cardHover: 'hover:bg-white/90 hover:shadow-blue-100/50 hover:border-blue-200',

    // Text & Icons
    primary: 'text-blue-600',
    secondary: 'text-indigo-600',
    textColor: 'text-slate-800',
    mutedText: 'text-slate-500',

    // Interactive
    buttonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20',
    iconBg: 'bg-blue-100 text-blue-600',
  },
  during: {
    id: 'during',
    label: 'On Trip',
    // Backgrounds - High contrast, minimal distractions
    background: 'bg-emerald-50/50',
    accentGradient: 'from-emerald-300/10 to-teal-300/10',

    // Cards - Solid, readable
    cardBg: 'bg-white',
    cardBorder: 'border-emerald-100',
    cardShadow: 'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]',
    cardHover: 'hover:border-emerald-300',

    // Text & Icons
    primary: 'text-emerald-700',
    secondary: 'text-teal-700',
    textColor: 'text-gray-900',
    mutedText: 'text-gray-500',

    // Interactive
    buttonPrimary: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md',
    iconBg: 'bg-emerald-100 text-emerald-700',
  },
  post: {
    id: 'post',
    label: 'Post-Trip',
    // Backgrounds - Warm, nostalgic
    background: 'bg-[#faf9f6]', // Off-white/Eggshell
    accentGradient: 'from-orange-200/20 to-amber-200/20',

    // Cards - Photo album feel
    cardBg: 'bg-white',
    cardBorder: 'border-stone-200',
    cardShadow: 'shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_10px_10px_-5px_rgba(0,0,0,0.01)]',
    cardHover: 'hover:-translate-y-1 hover:shadow-xl transition-all duration-300',

    // Text & Icons
    primary: 'text-orange-600',
    secondary: 'text-amber-600',
    textColor: 'text-stone-800',
    mutedText: 'text-stone-500',

    // Interactive
    buttonPrimary: 'bg-orange-600 hover:bg-orange-700 text-white shadow-orange-200',
    iconBg: 'bg-orange-100 text-orange-700',
  },
  solo: {
    id: 'solo',
    label: 'Solo Trip',
    // Backgrounds - Serene, deep focus
    background: 'bg-slate-50',
    accentGradient: 'from-violet-200/20 to-fuchsia-200/20',

    // Cards - Minimalist
    cardBg: 'bg-white',
    cardBorder: 'border-slate-200',
    cardShadow: 'shadow-sm',
    cardHover: 'hover:shadow-md hover:border-violet-200 transition-all duration-300',

    // Text & Icons
    primary: 'text-violet-600',
    secondary: 'text-fuchsia-600',
    textColor: 'text-slate-800',
    mutedText: 'text-slate-500',

    // Interactive
    buttonPrimary: 'bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-200',
    iconBg: 'bg-violet-50 text-violet-600',
  },
  group: {
    id: 'group',
    label: 'Group Trip',
    // Backgrounds - Vibrant, energetic, multi-stop gradient
    background: 'bg-gradient-to-tr from-pink-300/30 via-yellow-200/40 to-cyan-300/30',
    accentGradient: 'from-pink-500/20 via-purple-500/20 to-blue-500/20',

    // Cards - Playful and colorful borders
    cardBg: 'bg-white/80 backdrop-blur-md',
    cardBorder: 'border-pink-200 shadow-[0_0_20px_rgba(236,72,153,0.1)]',
    cardShadow: 'shadow-[0_8px_30px_rgb(0,0,0,0.08)]',
    cardHover: 'hover:-translate-y-2 hover:shadow-2xl hover:border-pink-400 hover:ring-2 hover:ring-pink-200 transition-all duration-500',

    // Text & Icons
    primary: 'text-pink-600',
    secondary: 'text-cyan-600',
    textColor: 'text-gray-950',
    mutedText: 'text-gray-600',

    // Interactive
    buttonPrimary: 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white shadow-xl shadow-pink-200 scale-105 hover:scale-110 transition-transform duration-300',
    iconBg: 'bg-pink-100 text-pink-600',
  },
};

const preWidgets: WidgetConfig[] = [
  { id: 'countdown', type: 'countdown', title: 'Time to Departure', priority: 1, colSpan: 2 },
  { id: 'checklist', type: 'checklist', title: 'Packing List', priority: 1, colSpan: 2 },
  { id: 'weather', type: 'weather', title: 'Destination Weather', priority: 2, colSpan: 1 },
  { id: 'docs', type: 'documents', title: 'Travel Docs', priority: 2, colSpan: 1 },
  { id: 'chat', type: 'chat', title: 'Group Chat', priority: 3, colSpan: 2 },
];

const duringWidgets: WidgetConfig[] = [
  { id: 'map', type: 'map', title: 'Today\'s Plan', priority: 1, colSpan: 2 },
  { id: 'expenses', type: 'expenses', title: 'Quick Expenses', priority: 1, colSpan: 1 },
  { id: 'chat', type: 'chat', title: 'Travel Chat', priority: 2, colSpan: 1 },
  { id: 'photos', type: 'photos', title: 'Live Snaps', priority: 2, colSpan: 2 },
];

const postWidgets: WidgetConfig[] = [
  { id: 'photos', type: 'photos', title: 'Trip Memories', priority: 1, colSpan: 2 },
  { id: 'stats', type: 'stats', title: 'Travel Stats', priority: 2, colSpan: 1 },
  { id: 'timeline', type: 'timeline', title: 'Journey Timeline', priority: 2, colSpan: 2 },
  { id: 'review', type: 'checklist', title: 'Post-Trip Review', priority: 3, colSpan: 1 },
];

const soloWidgets: WidgetConfig[] = [
  { id: 'map', type: 'map', title: 'Solo Route', priority: 1, colSpan: 2 },
  { id: 'weather', type: 'weather', title: 'Current Weather', priority: 1, colSpan: 1 },
  { id: 'countdown', type: 'countdown', title: 'Trip Timer', priority: 1, colSpan: 1 },
  { id: 'stats', type: 'stats', title: 'Personal Stats', priority: 2, colSpan: 1 },
  { id: 'photos', type: 'photos', title: 'My Captures', priority: 2, colSpan: 1 },
  { id: 'checklist', type: 'checklist', title: 'My Todos', priority: 3, colSpan: 1 },
  { id: 'timeline', type: 'timeline', title: 'Journey Timeline', priority: 3, colSpan: 2 },
];

const groupWidgets: WidgetConfig[] = [
  { id: 'chat', type: 'chat', title: 'Squad Hub', priority: 1, colSpan: 2 },
  { id: 'weather', type: 'weather', title: 'Group Weather', priority: 1, colSpan: 1 },
  { id: 'expenses', type: 'expenses', title: 'Shared Pot', priority: 1, colSpan: 1 },
  { id: 'checklist', type: 'checklist', title: 'Group Tasks', priority: 2, colSpan: 1 },
  { id: 'photos', type: 'photos', title: 'Group Snaps', priority: 2, colSpan: 2 },
  { id: 'docs', type: 'documents', title: 'Travel Shared Docs', priority: 3, colSpan: 1 },
  { id: 'timeline', type: 'timeline', title: 'Our Collective Journey', priority: 3, colSpan: 2 },
  { id: 'map', type: 'map', title: 'Group Waypoints', priority: 3, colSpan: 2 },
];

export const LAYOUTS = {
  pre: preWidgets,
  during: duringWidgets,
  post: postWidgets,
  solo: soloWidgets,
  group: groupWidgets,
};

export const ITINERARIES = {
  pre: [
    { time: 'T-Minus 5 Days', event: 'Visa & Documents Check', loc: 'Home Office', done: true },
    { time: 'T-Minus 3 Days', event: 'Final Packing Session', loc: 'Residence', done: false },
    { time: 'T-Minus 1 Day', event: 'Early Check-in & Transport', loc: 'Mobile App', done: false },
  ],
  during: [
    { time: '09:00 AM', event: 'Sunrise Meditation', loc: 'Zen Garden', done: true },
    { time: '11:30 AM', event: 'Traditional Tea Ceremony', loc: 'Old Town', done: false },
    { time: '02:00 PM', event: 'Local Market Exploration', loc: 'Downtown', done: false },
    { time: '07:00 PM', event: 'Oma-Kase Dinner', loc: 'Mitsui Street', done: false },
  ],
  post: [
    { time: 'Day 1 Post', event: 'Photo Backup & Organization', loc: 'Cloud Storage', done: true },
    { time: 'Day 2 Post', event: 'Expense Reconciliation', loc: 'Budget Tracker', done: false },
    { time: 'Day 7 Post', event: 'Memory Book Printing', loc: 'Online Studio', done: false },
  ],
  solo: [
    { time: '10:00 AM', event: 'Solo Photography Walk', loc: 'Riverside', done: true },
    { time: '01:00 PM', event: 'Read & Coffee Session', loc: 'Vintage Cafe', done: true },
    { time: '04:00 PM', event: 'Unexpected Exploration', loc: 'Back Alleys', done: false },
    { time: '08:00 PM', event: 'Stargazing / Reflection', loc: 'Roof Deck', done: false },
  ],
  group: [
    { time: '10:30 AM', event: 'Group Brunch Bash', loc: 'The Social Club', done: true },
    { time: '01:30 PM', event: 'Team Scavenger Hunt', loc: 'Central Plaza', done: false },
    { time: '05:00 PM', event: 'Sunset Boat Party', loc: 'Harbor Gate', done: false },
    { time: '09:00 PM', event: 'Karaoke Championship', loc: 'Neon Mic', done: false },
  ],
};
