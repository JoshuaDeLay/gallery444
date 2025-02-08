import { useState, useEffect } from 'react';
import { WeatherData, LocationData } from '@/types/components';

interface WeatherHookReturn {
  weather: WeatherData | null;
  location: LocationData | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

interface WeatherAPIResponse {
  current: {
    temp_c: number;
    humidity: number;
    wind_kph: number;
    condition: {
      text: string;
      code: number;
    };
  };
  location: {
    name: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
  };
}

const mapWeatherCondition = (code: number): WeatherData['condition'] => {
  // Map weather API codes to our condition types
  if (code >= 200 && code < 300) return 'storm';
  if (code >= 300 && code < 600) return 'rain';
  if (code >= 600 && code < 700) return 'snow';
  if (code >= 700 && code < 800) return 'cloudy';
  return 'clear';
};

export const useWeather = (): WeatherHookReturn => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchWeatherData = async (lat: number, lon: number): Promise<void> => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${lat},${lon}`
      );

      if (!response.ok) {
        throw new Error('Weather data fetch failed');
      }

      const data: WeatherAPIResponse = await response.json();

      setWeather({
        condition: mapWeatherCondition(data.current.condition.code),
        temperature: data.current.temp_c,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph
      });

      setLocation({
        latitude: data.location.lat,
        longitude: data.location.lon,
        timezone: data.location.tz_id,
        country: data.location.country,
        city: data.location.name
      });

    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error occurred'));
    } finally {
      setLoading(false);
    }
  };

  const getUserLocation = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported'));
        return;
      }

      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      });
    });
  };

  const refetch = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const position = await getUserLocation();
      await fetchWeatherData(
        position.coords.latitude,
        position.coords.longitude
      );
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to get location'));
      setLoading(false);
    }
  };

  useEffect(() => {
    refetch();

    // Set up periodic refresh
    const intervalId = setInterval(refetch, 1000 * 60 * 15); // Refresh every 15 minutes

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return {
    weather,
    location,
    loading,
    error,
    refetch
  };
};

// Example usage:
/*
const MyComponent = () => {
  const { weather, location, loading, error } = useWeather();

  if (loading) return <div>Loading weather data...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!weather || !location) return <div>No weather data available</div>;

  return (
    <div>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Condition: {weather.condition}</p>
      <p>Location: {location.city}, {location.country}</p>
    </div>
  );
};
*/ 