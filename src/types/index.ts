// General Types
export type Season = 'winter' | 'spring' | 'summer' | 'autumn';
export type TimeOfDay = 'dawn' | 'day' | 'dusk' | 'night';
export type Weather = 'clear' | 'rain' | 'snow' | 'cloudy' | 'storm';

// Component Props Types
export interface GalleryProps {
  id: string;
  title: string;
  description?: string;
  artworks: Artwork[];
  season: Season;
  isLocked?: boolean;
}

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  mediaUrl: string;
  mediaType: 'image' | 'video' | 'audio' | 'text';
  dimensions?: {
    width: number;
    height: number;
  };
}

export interface UserProfile {
  id: string;
  name: string;
  avatar?: string;
  galleries: string[];
  preferences: {
    theme: string;
    notifications: boolean;
    privacy: 'public' | 'private' | 'friends';
  };
}

// API Response Types
export interface WeatherResponse {
  condition: Weather;
  temperature: number;
  humidity: number;
  windSpeed: number;
}

export interface LocationData {
  latitude: number;
  longitude: number;
  timezone: string;
  country: string;
  city: string;
} 