import type { Metadata } from 'next';
import { JsonLd } from '@/components/common/json-ld';
import { FaqList } from '@/components/faqs/faq-list';
import { SupportPanel } from '@/components/faqs/support-panel';
import { PageHero } from '@/components/sections/page-hero';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'FAQs',
  description:
    'Answers about CodeCraft UI, the Next.js migration, reusable component architecture, SEO, accessibility, and contact flow.',
  path: '/faqs',
});

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={[faqSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'FAQs', path: '/faqs' }])]} />
      <PageHero
        description="Clear answers for the questions that matter before investing in a production frontend migration or redesign."
        eyebrow="FAQs"
        primaryHref="/contact"
        primaryLabel="Ask directly"
        secondaryHref="/pricing"
        secondaryLabel="Compare scope"
        title="Frontend migration questions, answered plainly."
      />
      <FaqList />
      <SupportPanel />
    </>
  );
}
