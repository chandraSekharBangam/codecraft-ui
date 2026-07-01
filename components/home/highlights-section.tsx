import { IconGrid } from '@/components/sections/icon-grid';
import { highlights } from '@/data/content';

export function HighlightsSection() {
  return (
    <IconGrid
      description="The redesign replaces demo styling with a real design system, structured content, and production-grade platform features."
      eyebrow="Why it works"
      items={highlights}
      title="Polished on the surface, disciplined underneath."
    />
  );
}
