import { FC } from 'react';
import { motion } from 'framer-motion';
import { SeasonalProps } from '@/types/components';

export const SeasonalTransitions: FC<SeasonalProps> = ({
  children,
  season,
  weather,
  timeOfDay
}) => {
  // ... rest of the component
};

export default SeasonalTransitions 