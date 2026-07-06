import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends PropsWithChildren {
  className?: string;
  tone?: 'cyan' | 'amber' | 'coral' | 'ink';
}

const tones: Record<NonNullable<BadgeProps['tone']>, string> = {
  cyan: 'border-brand-cyan/35 bg-brand-cyan/10 text-ink-950 shadow-[0_8px_24px_rgb(32_200_243_/_10%)]',
  amber: 'border-brand-amber/45 bg-brand-amber/18 text-ink-950 shadow-[0_8px_24px_rgb(255_201_70_/_12%)]',
  coral: 'border-brand-coral/35 bg-brand-coral/12 text-ink-950 shadow-[0_8px_24px_rgb(255_107_74_/_10%)]',
  ink: 'border-white/15 bg-white/10 text-white shadow-[inset_0_1px_0_rgb(255_255_255_/_10%)]',
};

export function Badge({ children, className, tone = 'cyan' }: BadgeProps) {
  return (
    <span className={cn('inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold', tones[tone], className)}>
      {children}
    </span>
  );
}
