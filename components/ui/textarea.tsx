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
        'focus-ring min-h-32 w-full resize-y rounded-lg border border-line bg-white/95 px-3 py-3 text-sm text-ink-900 shadow-[inset_0_1px_0_rgb(255_255_255_/_80%)] transition placeholder:text-ink-400 hover:border-ink-300',
        className,
      )}
      {...props}
    />
  );
});
