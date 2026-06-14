import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const statuses = [
    'INITIALIZING ENGINE...',
    'LOADING TECH STACK...',
    'COMPILING PORTFOLIO...',
    'RENDERING STYLES...',
    'SYSTEM READY'
  ];

  useEffect(() => {
    // Cycle through status messages
    const statusInterval = setInterval(() => {
      setStatusIndex((prev) => (prev < statuses.length - 1 ? prev + 1 : prev));
    }, 450);

    // Fast and smooth counting
    const counterInterval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(counterInterval);
          clearInterval(statusInterval);
          setTimeout(onComplete, 600); // Give user 600ms to see "100%" and "READY"
          return 100;
        }
        // Accelerate near the end
        const increment = prev < 70 ? Math.floor(Math.random() * 5) + 3 : Math.floor(Math.random() * 2) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => {
      clearInterval(counterInterval);
      clearInterval(statusInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#030303] z-9999 flex flex-col items-center justify-center text-white select-none"
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100vh',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="w-full max-w-md px-6 text-center">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-violet-600/20 blur-[100px] pointer-events-none" />

        {/* Brand Reveal */}
        <motion.h1 
          className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-2 font-display uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sumiran Chauhan
        </motion.h1>
        
        {/* Large Counter */}
        <motion.div 
          className="text-8xl font-black tracking-tight text-white mb-8 font-display"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {count}%
        </motion.div>

        {/* Animated Progress Bar */}
        <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden mb-4 relative">
          <motion.div 
            className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 rounded-full"
            style={{ width: `${count}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Dynamic Status Text */}
        <motion.div
          key={statusIndex}
          className="text-xs font-mono tracking-widest text-zinc-400"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.25 }}
        >
          {statuses[statusIndex]}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
