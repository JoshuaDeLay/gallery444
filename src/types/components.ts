import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

export interface SeasonalProps {
  children: ReactNode;
  season: Season;
  weather?: Weather;
  timeOfDay?: TimeOfDay;
}

export interface GalleryDoorProps {
  isLocked: boolean;
  onUnlock?: () => void;
  seasonalEffects?: SeasonalEffect[];
  weatherData?: WeatherData;
}

export interface TemplateProps {
  id: string;
  name: string;
  description: string;
  preview: string;
  zones: Zone[];
  icon?: LucideIcon;
}

export interface GalleryPageProps {
  galleries: Gallery[];
  isLoading?: boolean;
  error?: Error;
}

// Add shared types
export type Season = 'winter' | 'spring' | 'summer' | 'autumn';
export type Weather = 'clear' | 'rain' | 'snow' | 'storm' | 'cloudy';
export type TimeOfDay = 'dawn' | 'day' | 'dusk' | 'night';

export interface WeatherData {
  condition: Weather;
  temperature: number;
  humidity: number;
  windSpeed: number;
}

export interface Zone {
  id: string;
  type: 'image' | 'text' | 'audio' | 'video';
  label: string;
}

export interface Gallery {
  id: string;
  name: string;
  template: string;
  content: GalleryContent[];
}

export interface GalleryContent {
  id: string;
  type: Zone['type'];
  data: any; // Replace with specific content types
}

export interface SeasonalEffect {
  type: string;
  intensity: number;
  duration: number;
} 