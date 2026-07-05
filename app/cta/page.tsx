import type { Metadata } from 'next';
import { CtaExamples } from '@/components/cta/cta-examples';
import { CtaPatterns } from '@/components/cta/cta-patterns';
import { PageHero } from '@/components/sections/page-hero';
import { CtaBanner } from '@/components/sections/cta-banner';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'CTA sections',
  description:
    'Explore CodeCraft UI conversion CTA patterns for lead capture, product activation, trust reinforcement, and launch-ready frontend pages.',
  path: '/cta',
});

export default function CtaPage() {
  return (
    <>
      <PageHero
        description="CTA sections should make the next step obvious without shouting. This route collects conversion patterns that fit a premium SaaS or service website."
        eyebrow="Conversion sections"
        primaryHref="/contact"
        primaryLabel="Plan a CTA"
        secondaryHref="/pricing"
        secondaryLabel="View scope"
        title="Calls to action that guide, reassure, and convert."
      />
      <CtaPatterns />
      <CtaExamples />
      <CtaBanner title="Want the final section to feel intentional instead of bolted on?" />
    </>
  );
}
