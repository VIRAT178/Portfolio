import { motion } from 'framer-motion'

export default function LoadingAnimation() {
  return (
    <div className="w-full h-screen bg-dark-bg flex items-center justify-center overflow-hidden">
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent-secondary/20"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated logo */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl font-bold gradient-text"
        >
          VS
        </motion.div>

        {/* Loading bars */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scaleY: [0.5, 1, 0.5] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="w-1 h-8 bg-gradient-to-t from-accent to-accent-secondary rounded"
            />
          ))}
        </div>

        {/* Loading text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400 text-sm font-light tracking-widest"
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </div>
  )
}
