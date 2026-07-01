import { Accordion } from '@/components/ui/accordion';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { faqItems } from '@/data/content';

export function FaqList() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-start">
        <SectionHeading
          description="The answers below cover the migration shape, the design system, SEO responsibilities, and contact flow."
          eyebrow="Questions"
          title="Everything important before starting."
        />
        <Accordion items={faqItems} />
      </Container>
    </section>
  );
}
