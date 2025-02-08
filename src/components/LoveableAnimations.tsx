import { motion, AnimatePresence } from 'framer-motion';

export const HeartbeatContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.02, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      {children}
    </motion.div>
  );
}; 