import type { Metadata } from 'next';
import { JsonLd } from '@/components/common/json-ld';
import { PageHero } from '@/components/sections/page-hero';
import { CtaBanner } from '@/components/sections/cta-banner';
import { PricingGrid } from '@/components/pricing/pricing-grid';
import { ScopeNotes } from '@/components/pricing/scope-notes';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, offerCatalogSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Project scope',
  description:
    'Explore CodeCraft UI engagement shapes for custom website development and contact-first project scoping without fixed public pricing.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <>
      <JsonLd data={[offerCatalogSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Project scope', path: '/pricing' }])]} />
      <PageHero
        description="Simple engagement shapes for frontend work that needs polish, maintainability, SEO, and production readiness."
        eyebrow="Project scope"
        primaryHref="/contact"
        primaryLabel="Discuss requirements"
        secondaryHref="/faqs"
        secondaryLabel="Read FAQs"
        title="Scope is shaped around real project requirements."
      />
      <PricingGrid />
      <ScopeNotes />
      <CtaBanner title="Have an existing React project that needs a migration plan?" />
    </>
  );
}
