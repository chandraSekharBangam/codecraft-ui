'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedPatternProps {
  className?: string;
  theme?: 'light' | 'dark';
}

export function AnimatedPattern({ className, theme = 'dark' }: AnimatedPatternProps) {
  const color = theme === 'dark' ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.07)';
  const dotColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)';

  return (
    <div 
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden flex items-center justify-center", 
        className
      )}
      style={{ perspective: '1000px' }}
    >
      <div 
        className="absolute inset-0"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 75%)',
        }}
      >
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: 'rotateX(60deg)', transformStyle: 'preserve-3d' }}
        >
          <motion.div
            animate={{
              y: [0, 100],
            }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 4, // Extremely smooth and relaxed pace
            }}
            className="absolute w-[300vw] h-[300vh]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 0.5px 0.5px, ${dotColor} 2px, transparent 2.5px),
                linear-gradient(to right, ${color} 1px, transparent 1px),
                linear-gradient(to bottom, ${color} 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
              willChange: 'transform', // Forces GPU acceleration to prevent lag
            }}
          />
        </div>
      </div>
    </div>
  );
}
