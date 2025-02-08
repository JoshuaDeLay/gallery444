import React from 'react';

interface SeasonalDoorDesignProps {
  season: string;
  weather: {
    condition: string;
    temperature: number;
  };
  timeOfDay: string;
}

export const SeasonalDoorDesign: React.FC<SeasonalDoorDesignProps> = ({
  season,
  weather,
  timeOfDay
}) => {
  return (
    <div className={`door-design ${season} ${timeOfDay}`}>
      {/* Add your seasonal door design elements here */}
    </div>
  );
};

export default SeasonalDoorDesign; 