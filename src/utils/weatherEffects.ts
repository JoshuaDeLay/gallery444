export const determineWeatherEffect = (condition: string) => {
  const effects = {
    'clear': 'clear',
    'rain': 'rainy',
    'snow': 'snowy',
    'cloudy': 'overcast',
    'fog': 'foggy',
    'thunder': 'stormy'
  } as const;

  return effects[condition as keyof typeof effects] || 'clear';
}; 