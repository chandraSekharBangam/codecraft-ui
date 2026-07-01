import { IconGrid } from '@/components/sections/icon-grid';
import { services } from '@/data/content';

export function ServicesSection() {
  return (
    <IconGrid
      description="CodeCraft UI is organized around the work that makes a frontend feel complete: migration, reusable components, conversion pages, and launch quality."
      eyebrow="What gets built"
      items={services}
      title="A complete frontend surface, not a loose set of sections."
    />
  );
}
