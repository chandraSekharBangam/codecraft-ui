import { forwardRef } from 'react';
import type { SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(function Select(
  { className, children, ...props },
  ref,
) {
  return (
    <select
      ref={ref}
      className={cn(
        'focus-ring h-11 w-full rounded-lg border border-line bg-white/95 px-3 text-sm text-ink-900 shadow-[inset_0_1px_0_rgb(255_255_255_/_80%)] transition hover:border-ink-300',
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
});
