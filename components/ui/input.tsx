import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function Input(
  { className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      className={cn(
        'focus-ring h-11 w-full rounded-lg border border-line bg-white/95 px-3 text-sm text-ink-900 shadow-[inset_0_1px_0_rgb(255_255_255_/_80%)] transition placeholder:text-ink-400 hover:border-ink-300',
        className,
      )}
      {...props}
    />
  );
});
