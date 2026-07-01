import type { Metadata } from 'next';
import { JsonLd } from '@/components/common/json-ld';
import { CtaBanner } from '@/components/sections/cta-banner';
import { MetricBand } from '@/components/sections/metric-band';
import { BenefitsSection } from '@/components/home/benefits-section';
import { FeaturedComponents } from '@/components/home/featured-components';
import { FaqPreview } from '@/components/home/faq-preview';
import { HighlightsSection } from '@/components/home/highlights-section';
import { HomeHero } from '@/components/home/home-hero';
import { IndustriesSection } from '@/components/home/industries-section';
import { ProcessSection } from '@/components/home/process-section';
import { ServicesSection } from '@/components/home/services-section';
import { TechnologiesSection } from '@/components/home/technologies-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { TrustIndicators } from '@/components/home/trust-indicators';
import { metrics } from '@/data/content';
import { buildMetadata } from '@/lib/seo';
import { organizationSchema, serviceSchema, websiteSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Premium Next.js UI systems',
  description:
    'CodeCraft UI redesigns React, TypeScript, and Tailwind CSS projects into production-ready Next.js applications with premium design, reusable components, and SEO foundations.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema(), serviceSchema()]} />
      <HomeHero />
      <TrustIndicators />
      <MetricBand metrics={metrics} />
      <BenefitsSection />
      <ServicesSection />
      <FeaturedComponents />
      <HighlightsSection />
      <IndustriesSection />
      <TechnologiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqPreview />
      <CtaBanner />
    </>
  );
}
