import type { Metadata } from 'next';
import { JsonLd } from '@/components/common/json-ld';
import { ComponentLibraryBrowser } from '@/components/library/component-library-browser';
import { CtaBanner } from '@/components/sections/cta-banner';
import { PageHero } from '@/components/sections/page-hero';
import { getHighlightedLibraryCategories } from '@/lib/code-highlight';
import { breadcrumbSchema, componentLibrarySchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Free UI components',
  description:
    'Browse free reusable Next.js, TypeScript, and Tailwind CSS UI components with live previews, fullscreen viewing, syntax-highlighted code, and copy-ready snippets.',
  path: '/components',
});

export default async function ComponentsPage() {
  const categories = await getHighlightedLibraryCategories();

  return (
    <>
      <JsonLd
        data={[
          componentLibrarySchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Components', path: '/components' },
          ]),
        ]}
      />
      <PageHero
        description="Browse category-based UI sections, preview each variant, inspect VS Code-style snippets, copy production-ready code, or open a focused fullscreen preview."
        eyebrow="Free components"
        primaryHref="#component-browser"
        primaryLabel="Browse library"
        secondaryHref="/contact"
        secondaryLabel="Request custom UI"
        title="Free Next.js, TypeScript, and Tailwind CSS sections."
      />
      <ComponentLibraryBrowser categories={categories} />
      <CtaBanner
        description="Send your project type, pages, required features, timeline, and launch target so the custom build can be scoped after review."
        title="Need components tailored to your brand and project?"
      />
    </>
  );
}
