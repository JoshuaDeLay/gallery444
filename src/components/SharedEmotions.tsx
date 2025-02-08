export const EmotionBubble = ({ emotion }: { emotion: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm"
    >
      <span className="mr-2">{emotion}</span>
      <motion.span
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ❤️
      </motion.span>
    </motion.div>
  );
}; 