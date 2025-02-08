import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const PromptPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  
  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      <motion.div className="p-6 max-w-2xl mx-auto pt-12">
        <div className="relative">
          <img 
            src="/starry-night.jpg" 
            className="w-full h-64 object-cover rounded-lg shadow-xl"
            alt="This week's inspiration"
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLiked(!isLiked)}
            className="absolute bottom-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-lg"
          >
            <Heart 
              className={`w-6 h-6 ${isLiked ? 'text-pink-500 fill-pink-500' : 'text-white'}`}
            />
          </motion.button>
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-['Playfair_Display'] text-yellow-400">
            Dear Artist,
          </h2>
          <p className="text-[#f0e6d2] leading-relaxed">
            This week, let's explore the emotional depths of Van Gogh's world together. 
            What moves in your soul like his starry night?
          </p>
          <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
            <p className="italic text-yellow-400/80">
              "Great things are done by a series of small things brought together"
              - Vincent van Gogh
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}; 