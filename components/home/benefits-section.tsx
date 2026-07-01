import { IconGrid } from '@/components/sections/icon-grid';
import { pageBenefits } from '@/data/content';

export function BenefitsSection() {
  return (
    <IconGrid
      description="We focus on creating systems that scale with your team, rather than leaving you with disorganized templates."
      eyebrow="Benefits"
      items={pageBenefits}
      title="More than just a pretty interface."
    />
  );
}
