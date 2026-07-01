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
        'focus-ring h-11 w-full rounded-lg border border-line bg-white px-3 text-sm text-ink-900 placeholder:text-ink-500',
        className,
      )}
      {...props}
    />
  );
});
