export type EmotionalMode = 'pre' | 'during' | 'post' | 'solo' | 'group';
export type AppSection = 'home' | 'explore' | 'plan' | 'profile';

export interface TravelerData {
  tripStartDate: string; // ISO string
  tripEndDate: string;   // ISO string
  chatActivity: number;  // messages per day
  photoUploads: number;  // photos uploaded
  appEngagement: number; // sessions per day
  // Mock data fields
  daysUntilTrip: number;
}

export interface ItineraryItem {
  time: string;
  event: string;
  loc: string;
  done: boolean;
}

export interface WidgetConfig {
  id: string;
  type: 'checklist' | 'countdown' | 'weather' | 'map' | 'chat' | 'expenses' | 'photos' | 'stats' | 'timeline' | 'documents';
  title: string;
  priority: number; // 1 (high) to 3 (low)
  colSpan?: number; // For grid layout (1 or 2)
}

export interface LayoutConfig {
  mode: EmotionalMode;
  widgets: WidgetConfig[];
  theme: ThemeConfig;
}

export interface ThemeConfig {
  id: string;
  label: string;
  // Backgrounds
  background: string;
  accentGradient: string;

  // Cards
  cardBg: string;
  cardBorder: string;
  cardShadow: string;
  cardHover: string;

  // Text & Icons
  primary: string;
  secondary: string;
  textColor: string;
  mutedText: string;

  // Interactive
  buttonPrimary: string;
  iconBg: string;

  // Legacy support (optional)
  accent?: string;
  borderColor?: string;
}

export interface AppState {
  data: TravelerData;
  mode: EmotionalMode;
  manualOverride: boolean; // For demo purposes
}
