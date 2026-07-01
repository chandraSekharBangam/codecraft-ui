import { forwardRef } from 'react';
import type { TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(function Textarea(
  { className, ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      className={cn(
        'focus-ring min-h-32 w-full resize-y rounded-lg border border-line bg-white px-3 py-3 text-sm text-ink-900 placeholder:text-ink-500',
        className,
      )}
      {...props}
    />
  );
});
