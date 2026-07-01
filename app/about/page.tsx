import type { Metadata } from 'next';
import { JsonLd } from '@/components/common/json-ld';
import { CertificationsSection } from '@/components/about/certifications-section';
import { MissionVisionSection } from '@/components/about/mission-vision-section';
import { StorySection } from '@/components/about/story-section';
import { TimelineSection } from '@/components/about/timeline-section';
import { ValuesSection } from '@/components/about/values-section';
import { CtaBanner } from '@/components/sections/cta-banner';
import { PageHero } from '@/components/sections/page-hero';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, organizationSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description:
    'Learn how CodeCraft UI turns a React component gallery into a production-ready Next.js frontend system with reusable sections and brand-led design.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])]} />
      <PageHero
        description="CodeCraft UI blends design craft with maintainable frontend architecture, giving modern teams a polished interface system that is ready for real deployment."
        eyebrow="Company"
        primaryHref="/contact"
        primaryLabel="Work together"
        secondaryHref="/hero"
        secondaryLabel="View components"
        title="Design discipline, frontend clarity, and production focus."
      />
      <StorySection />
      <MissionVisionSection />
      <ValuesSection />
      <TimelineSection />
      <CertificationsSection />
      <CtaBanner title="Bring the same clarity to your next frontend." />
    </>
  );
}
