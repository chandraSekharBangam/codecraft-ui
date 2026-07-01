import type { Metadata } from 'next';
import { JsonLd } from '@/components/common/json-ld';
import { CtaBanner } from '@/components/sections/cta-banner';
import { ComponentShowcase } from '@/components/hero-library/component-showcase';
import { LibraryHero } from '@/components/hero-library/library-hero';
import { TechnologyStrip } from '@/components/hero-library/technology-strip';
import { UsageGuide } from '@/components/hero-library/usage-guide';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, collectionSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Hero section component library',
  description:
    'Explore migrated CodeCraft UI hero sections rebuilt as production-ready Next.js, TypeScript, and Tailwind CSS patterns.',
  path: '/hero',
});

export default function HeroLibraryPage() {
  return (
    <>
      <JsonLd data={[collectionSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Components', path: '/hero' }])]} />
      <LibraryHero />
      <TechnologyStrip />
      <ComponentShowcase />
      <UsageGuide />
      <CtaBanner title="Need a hero section that matches your product exactly?" />
    </>
  );
}
