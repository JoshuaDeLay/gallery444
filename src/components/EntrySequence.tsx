import React from 'react';
import { motion } from 'framer-motion';
import MoodSelector from './MoodSelector';
import SoundscapeSelector from './SoundscapeSelector';

const EntrySequence = () => {
  return (
    <motion.div className="entry-sequence">
      // First visit: Personal mood calibration
      <MoodSelector 
        prompt="How are you feeling today?"
        affects="gallery-ambience"
      />
      
      // Daily music selection
      <SoundscapeSelector 
        options={[
          { mood: 'contemplative', track: 'Motion Picture Soundtrack' },
          { mood: 'energetic', track: '15 Step' },
          { mood: 'melancholic', track: 'How to Disappear Completely' }
        ]}
      />
    </motion.div>
  );
};

export default EntrySequence; 