import type { Metadata } from 'next';
import { JsonLd } from '@/components/common/json-ld';
import { PageHero } from '@/components/sections/page-hero';
import { CtaBanner } from '@/components/sections/cta-banner';
import { PricingGrid } from '@/components/pricing/pricing-grid';
import { ScopeNotes } from '@/components/pricing/scope-notes';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, offerCatalogSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Pricing',
  description:
    'Explore CodeCraft UI project options for focused landing pages, multi-page frontend systems, and complete Next.js migrations.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <>
      <JsonLd data={[offerCatalogSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Pricing', path: '/pricing' }])]} />
      <PageHero
        description="Simple engagement shapes for frontend work that needs polish, maintainability, SEO, and production readiness."
        eyebrow="Pricing"
        primaryHref="/contact"
        primaryLabel="Request a quote"
        secondaryHref="/faqs"
        secondaryLabel="Read FAQs"
        title="Project pricing based on real delivery scope."
      />
      <PricingGrid />
      <ScopeNotes />
      <CtaBanner title="Have an existing React project that needs a migration plan?" />
    </>
  );
}
