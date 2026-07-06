import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = 'left', className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <Badge className="mb-4" tone="cyan">
          {eyebrow}
        </Badge>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight text-ink-950 sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-ink-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}
