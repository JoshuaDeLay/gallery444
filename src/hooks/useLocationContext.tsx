import React, { createContext, useContext, useEffect, useState } from 'react';

interface LocationContextType {
  season: string;
  weather: {
    condition: string;
    temperature: number;
    windSpeed: number;
  };
  localTime: Date;
}

export const LocationContext = createContext<LocationContextType | null>(null);

export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [locationData, setLocationData] = useState<LocationContextType | null>(null);

  useEffect(() => {
    // Add your location and weather fetching logic here
    setLocationData({
      season: 'spring',
      weather: {
        condition: 'clear',
        temperature: 20,
        windSpeed: 5
      },
      localTime: new Date()
    });
  }, []);

  return (
    <LocationContext.Provider value={locationData}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}; 