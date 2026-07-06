import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends PropsWithChildren {
  className?: string;
  as?: 'article' | 'div';
}

export function Card({ children, className, as: Component = 'div' }: CardProps) {
  return (
    <Component
      className={cn(
        'rounded-lg border border-line/80 bg-white/95 p-6 shadow-[var(--shadow-premium)] ring-1 ring-white/70 transition duration-200 hover:-translate-y-1 hover:border-brand-cyan/50 hover:shadow-[var(--shadow-lifted)]',
        className,
      )}
    >
      {children}
    </Component>
  );
}
