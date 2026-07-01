import { IconGrid } from '@/components/sections/icon-grid';
import { values } from '@/data/content';

export function ValuesSection() {
  return (
    <IconGrid
      description="A premium interface should earn trust through restraint, structure, accessibility, and maintainable code."
      eyebrow="Values"
      items={values}
      title="The principles behind the redesign."
    />
  );
}
