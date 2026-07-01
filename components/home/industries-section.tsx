import { IconGrid } from '@/components/sections/icon-grid';
import { industries } from '@/data/content';

export function IndustriesSection() {
  return (
    <IconGrid
      description="Our component architecture adapts cleanly to diverse business requirements, maintaining accessibility and performance."
      eyebrow="Industries"
      items={industries}
      title="Built for rigorous sectors."
    />
  );
}
