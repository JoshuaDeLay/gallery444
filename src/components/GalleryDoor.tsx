import React, { FC, useState, useEffect } from 'react'
import { useContext } from 'react';
import { LocationContext } from '../hooks/useLocationContext';
import { motion } from 'framer-motion';
import { GalleryDoorProps } from '@/types/components';

export const GalleryDoor: FC<GalleryDoorProps> = ({
  isLocked,
  onUnlock,
  seasonalEffects,
  weatherData
}) => {
  const locationData = useContext(LocationContext);
  
  if (!locationData) return <LoadingDoor />;

  const { season, weather, localTime } = locationData;
  
  // Determine time of day
  const hour = localTime.getHours();
  const timeOfDay = 
    hour >= 5 && hour < 8 ? 'dawn' :
    hour >= 8 && hour < 17 ? 'day' :
    hour >= 17 && hour < 20 ? 'dusk' : 'night';

  // Determine weather effects
  const weatherEffect = determineWeatherEffect(weather.condition);

  return (
    <div 
      className={`transition-transform duration-500 ${isLocked ? 'rotate-y-90' : ''}`}
      onClick={onUnlock}
    >
      {/* Local Time Display */}
      <div className="absolute top-4 right-4 text-sm opacity-60">
        {localTime.toLocaleTimeString()}
      </div>

      {/* Weather-Aware Door */}
      <div
        className={`
          door-frame
          ${season}-theme
          ${weatherEffect}-effect
          ${timeOfDay}-lighting
        `}
      >
        {/* Dynamic Weather Particles */}
        <WeatherParticles 
          condition={weather.condition}
          intensity={weather.windSpeed / 10}
          temperature={weather.temperature}
        />

        {/* Season-Specific Door Design */}
        <SeasonalDoorDesign 
          season={season}
          weather={weather}
          timeOfDay={timeOfDay}
        />
      </div>
    </div>
  );
};

// Weather particles component
const WeatherParticles = ({ condition, intensity, temperature }) => {
  const particleConfig = {
    rain: {
      particleCount: intensity * 100,
      color: '#85a5c4',
      velocity: intensity,
    },
    snow: {
      particleCount: intensity * 50,
      color: '#ffffff',
      velocity: intensity * 0.5,
    },
    leaves: {
      particleCount: intensity * 20,
      colors: ['#c94c4c', '#eaae3f', '#8c5e3c'],
      velocity: intensity * 0.8,
    }
  };

  return (
    <div className="particles-container">
      {/* Particle implementation based on condition */}
    </div>
  );
};

// Loading state
const LoadingDoor = () => (
  <div 
    className="loading-door"
  >
    <span className="loading-text">Locating your gallery...</span>
  </div>
);

export default GalleryDoor 