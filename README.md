# Aura – Mood-Adaptive Travel Dashboard

Aura is a smart travel dashboard that adapts its interface based on the user's trip phase and travel style.  
It focuses on reducing information overload and improving focus through adaptive UI design.

---

## Overview

Modern travel apps overload users with static dashboards and excessive data.

Aura solves this by:

- Adapting layouts dynamically
- Adjusting colors and themes
- Prioritizing important information
- Supporting solo and group travelers
- Reducing cognitive stress

---

## Problem Statement

- Too much information causes confusion
- Static interfaces ignore emotional context
- No personalization for travel styles
- Poor support for trip phases

---

## Solution

Aura uses an Adaptive Layout Engine to:

- Change UI based on trip stage
- Highlight priority widgets
- Hide irrelevant data
- Improve usability

---

## Emotional Modes

Aura works on five main modes:

### Pre-Trip (Anticipation)
- Countdown timer
- Checklists
- Document readiness
- Booking reminders

### During-Trip (Execution)
- Live maps
- Weather updates
- Local discovery
- Expense tracking

### Post-Trip (Reflection)
- Travel memories
- Photo highlights
- Statistics
- Notes

### Solo (Serenity)
- Minimal layout
- Calm colors
- Focused experience
- Personal logs

### Group (Energy)
- Vibrant theme
- Squad chat
- Shared plans
- Group expenses

---

## Key Features

### Adaptive Layout Engine
- Widgets reorder automatically
- Priority changes by mode
- Smart visibility control

### Intelligent Widgets
- Expenses during travel
- Visa check before departure
- Memories after trip

### Dynamic Backgrounds
- Animated gradients
- Mood-based color shifts
- Smooth transitions

### AI Mood Travel Concierge
- Analyzes user context
- Suggests destinations
- Direct plan integration

### Plan Section
- Vertical timeline
- Live updates
- Memory tracking
- Cross-section sync

---

## Visual Design

- Dark and light modes
- Glassmorphism UI
- Fluid animations
- Responsive layouts
- Floating navigation dock

---

## Tech Stack

Frontend:
- React (TypeScript)
- Vite
- Tailwind CSS

Animations:
- Framer Motion

Icons:
- Lucide React

State Management:
- React Hooks
- State Lifting

---

## Demo Flow

1. Open Home (Pre-Trip mode)
2. View countdown and checklist
3. Switch to Solo mode
4. UI becomes minimal
5. Open Explore
6. Run AI Concierge
7. Add destination to Plan
8. Open Plan section
9. View itinerary update
10. Switch to Post-Trip
11. View memory dashboard

---

## Installation

```bash
git clone https://github.com/your-username/aura.git
cd aura
npm install
npm run dev
