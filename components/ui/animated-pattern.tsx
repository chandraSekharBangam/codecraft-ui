'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedPatternProps {
  className?: string;
  theme?: 'light' | 'dark';
}

export function AnimatedPattern({ className, theme = 'dark' }: AnimatedPatternProps) {
  // A seamless 3D isometric pyramid / low-poly mesh pattern built with solid SVG polygons.
  // This uses NO grids, NO dots, NO gradients, NO glows, and NO lines.
  const svgData = theme === 'dark' 
    ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpolygon fill='rgba(255,255,255,0.015)' points='0,0 120,0 60,60'/%3E%3Cpolygon fill='rgba(255,255,255,0.03)' points='120,0 120,120 60,60'/%3E%3Cpolygon fill='rgba(255,255,255,0.02)' points='120,120 0,120 60,60'/%3E%3Cpolygon fill='rgba(255,255,255,0.035)' points='0,120 0,0 60,60'/%3E%3C/svg%3E"
    : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpolygon fill='rgba(32,200,243,0.02)' points='0,0 120,0 60,60'/%3E%3Cpolygon fill='rgba(32,200,243,0.04)' points='120,0 120,120 60,60'/%3E%3Cpolygon fill='rgba(32,200,243,0.03)' points='120,120 0,120 60,60'/%3E%3Cpolygon fill='rgba(32,200,243,0.05)' points='0,120 0,0 60,60'/%3E%3C/svg%3E";

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <motion.div
        animate={{
          x: [0, -120],
          y: [0, -120],
        }}
        className="absolute -inset-[240px]"
        style={{
          backgroundImage: `url("${svgData}")`,
          backgroundSize: '120px 120px',
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 5,
        }}
      />
    </div>
  );
}
