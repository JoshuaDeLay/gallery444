import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const GalleryTemplateViewer = () => {
  const [currentSeason, setCurrentSeason] = useState<string>('');
  const [timeOfDay, setTimeOfDay] = useState<'dawn' | 'day' | 'dusk' | 'night'>('day');

  // Update season and time automatically
  useEffect(() => {
    const updateSeasonAndTime = () => {
      const date = new Date();
      const month = date.getMonth();
      const hour = date.getHours();

      // Set season
      if (month >= 2 && month <= 4) setCurrentSeason('spring');
      else if (month >= 5 && month <= 7) setCurrentSeason('summer');
      else if (month >= 8 && month <= 10) setCurrentSeason('autumn');
      else setCurrentSeason('winter');

      // Set time of day
      if (hour >= 5 && hour < 8) setTimeOfDay('dawn');
      else if (hour >= 8 && hour < 17) setTimeOfDay('day');
      else if (hour >= 17 && hour < 20) setTimeOfDay('dusk');
      else setTimeOfDay('night');
    };

    updateSeasonAndTime();
    const interval = setInterval(updateSeasonAndTime, 1000 * 60 * 30); // Update every 30 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {galleryTemplates.map((template) => (
        <motion.div
          key={template.id}
          className={`
            p-8 rounded-xl m-4
            backdrop-blur-lg
            transition-all duration-500
            ${template.season === currentSeason ? 'scale-105' : 'scale-100'}
          `}
          style={{
            backgroundColor: `${template.colorScheme.primary}22`,
            borderColor: template.colorScheme.accent,
            borderWidth: '1px',
          }}
        >
          <motion.h2 
            className="text-2xl font-['Playfair_Display']"
            animate={{ color: template.colorScheme.accent }}
          >
            {template.name}
          </motion.h2>

          {/* Magical Interaction Elements */}
          <div className="mt-4 relative overflow-hidden rounded-lg h-64">
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundColor: [
                  template.colorScheme.primary,
                  template.colorScheme.secondary,
                  template.colorScheme.primary
                ],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            >
              {/* Interactive Elements */}
              {template.interactions.map((interaction, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  animate={{
                    x: ['0%', '100%', '0%'],
                    y: Math.sin(index) * 100,
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 20,
                    delay: index * 2,
                    repeat: Infinity,
                  }}
                >
                  <span className="text-white/80 text-sm">{interaction}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Ambience Indicators */}
          <div className="mt-4 flex flex-wrap gap-2">
            {template.ambience.map((element, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 rounded-full text-sm"
                style={{ backgroundColor: `${template.colorScheme.secondary}44` }}
                whileHover={{ scale: 1.05 }}
              >
                {element}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}; 