import { Eye, FileCode2, Rocket } from 'lucide-react';
import { IconGrid } from '@/components/sections/icon-grid';

const usageItems = [
  {
    title: 'Preview in context',
    description:
      'Start with the section intent, then judge layout, hierarchy, and responsive behavior before copying code.',
    icon: Eye,
  },
  {
    title: 'Adapt the snippet',
    description:
      'Replace the copy, data, and calls to action while keeping the accessible structure and spacing rhythm.',
    icon: FileCode2,
  },
  {
    title: 'Launch with QA',
    description:
      'Validate metadata, keyboard states, mobile layout, and production build output before publishing.',
    icon: Rocket,
  },
];

export function UsageGuide() {
  return (
    <IconGrid
      description="The component library is a practical starting point, not a visual dump. Each section should be adapted to the product story it supports."
      eyebrow="How to use"
      items={usageItems}
      title="Copy the pattern, then make it specific."
    />
  );
}
