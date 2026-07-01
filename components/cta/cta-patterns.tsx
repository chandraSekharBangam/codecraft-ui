import { IconGrid } from '@/components/sections/icon-grid';
import { ctaPatterns } from '@/data/content';

export function CtaPatterns() {
  return (
    <IconGrid
      description="A strong CTA section is not only a button. It resolves hesitation, clarifies the next step, and gives the visitor a reason to act now."
      eyebrow="CTA strategy"
      items={ctaPatterns}
      title="Conversion sections for different buying moments."
    />
  );
}
