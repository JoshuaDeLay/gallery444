import React from 'react';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { GalleryPageProps } from '@/types/components';
import { HeartbeatContainer } from '../components/LoveableAnimations';

const AnticipationBuilder: FC<{ timeLeft: number }> = ({ timeLeft }) => {
  const messages = [
    "Your masterpiece is brewing...",
    "Creative energy is building...",
    "Something beautiful is coming...",
    "Art takes time, just like love...",
  ];

  return (
    <motion.div 
      className="text-center max-w-md mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-32 h-32 mx-auto mb-8">
        <motion.div
          className="absolute inset-0 rounded-full bg-yellow-400/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl">🎨</span>
        </div>
      </div>

      <HeartbeatContainer>
        <h1 className="text-3xl font-['Playfair_Display'] text-yellow-400 mb-4">
          Your Gallery is Blooming
        </h1>
      </HeartbeatContainer>

      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="text-[#f0e6d2] text-lg mb-8"
      >
        {messages[Math.floor((timeLeft / (24 * 60 * 60)) % messages.length)]}
      </motion.p>

      <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
        <div className="text-5xl font-mono text-yellow-400 mb-2">
          {Math.floor(timeLeft / (24 * 60 * 60))}d
        </div>
        <p className="text-[#f0e6d2]/60">until revelation</p>
      </div>
    </motion.div>
  );
};

export default AnticipationBuilder; 