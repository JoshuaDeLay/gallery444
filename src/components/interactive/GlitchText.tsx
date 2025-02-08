import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ text }: { text: string }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  
  const glitchCharacters = "!@#$%^&*()<>{}";
  
  return (
    <motion.span
      onHoverStart={() => setIsGlitching(true)}
      onHoverEnd={() => setIsGlitching(false)}
      className="glitch-text"
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          animate={isGlitching ? {
            display: ['block', 'none', 'block'],
            text: [
              char,
              glitchCharacters[Math.floor(Math.random() * glitchCharacters.length)],
              char
            ]
          } : {}}
          transition={{ 
            duration: 0.1,
            repeat: isGlitching ? 2 : 0
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default GlitchText; 