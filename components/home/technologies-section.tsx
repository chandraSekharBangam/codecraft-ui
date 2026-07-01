import { LogoCloud } from '@/components/sections/logo-cloud';
import { technologyStack } from '@/data/content';

export function TechnologiesSection() {
  return (
    <LogoCloud
      title="Built on modern web standards"
      items={technologyStack}
    />
  );
}
