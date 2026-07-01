import type { Metadata } from 'next';
import { JsonLd } from '@/components/common/json-ld';
import { ContactSection } from '@/components/contact/contact-section';
import { PageHero } from '@/components/sections/page-hero';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, contactSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Contact CodeCraft UI for Next.js migration, React component system design, Tailwind CSS redesign, frontend QA, and production website work.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[contactSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])]} />
      <PageHero
        description="Tell CodeCraft UI what exists today, what needs to launch, and where the current interface is slowing you down."
        eyebrow="Contact"
        title="Start with a clear frontend brief."
      />
      <ContactSection />
    </>
  );
}
