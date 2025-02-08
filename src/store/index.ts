import create from 'zustand';
import { Gallery, WeatherData, Season } from '@/types/components';

interface StoreState {
  galleries: Gallery[];
  currentSeason: Season;
  weatherData: WeatherData | null;
  selectedGallery: string | null;
  isLoading: boolean;
  error: Error | null;
}

interface StoreActions {
  setGalleries: (galleries: Gallery[]) => void;
  setCurrentSeason: (season: Season) => void;
  setWeatherData: (data: WeatherData) => void;
  setSelectedGallery: (id: string | null) => void;
}

export const useStore = create<StoreState & StoreActions>((set) => ({
  galleries: [],
  currentSeason: 'spring',
  weatherData: null,
  selectedGallery: null,
  isLoading: false,
  error: null,
  
  setGalleries: (galleries) => set({ galleries }),
  setCurrentSeason: (season) => set({ currentSeason: season }),
  setWeatherData: (data) => set({ weatherData: data }),
  setSelectedGallery: (id) => set({ selectedGallery: id })
})); 