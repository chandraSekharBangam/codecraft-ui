import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends PropsWithChildren {
  className?: string;
  as?: 'article' | 'div';
}

export function Card({ children, className, as: Component = 'div' }: CardProps) {
  return (
    <Component className={cn('rounded-lg border border-line bg-white p-6 shadow-[var(--shadow-premium)]', className)}>
      {children}
    </Component>
  );
}
