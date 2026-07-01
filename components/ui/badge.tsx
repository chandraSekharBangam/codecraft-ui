import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends PropsWithChildren {
  className?: string;
  tone?: 'cyan' | 'amber' | 'coral' | 'ink';
}

const tones: Record<NonNullable<BadgeProps['tone']>, string> = {
  cyan: 'border-brand-cyan/30 bg-brand-cyan/12 text-ink-950',
  amber: 'border-brand-amber/40 bg-brand-amber/16 text-ink-950',
  coral: 'border-brand-coral/30 bg-brand-coral/12 text-ink-950',
  ink: 'border-ink-800 bg-ink-950 text-white',
};

export function Badge({ children, className, tone = 'cyan' }: BadgeProps) {
  return (
    <span className={cn('inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold', tones[tone], className)}>
      {children}
    </span>
  );
}
