import { Accordion } from '@/components/ui/accordion';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { faqItems } from '@/data/content';

export function FaqPreview() {
  return (
    <section className="bg-ink-100 py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-start">
        <div>
          <SectionHeading
            description="Short answers to the main migration, design, and launch-readiness questions."
            eyebrow="FAQs"
            title="Clear expectations before the build starts."
          />
          <ButtonLink className="mt-8" href="/faqs" variant="outline">
            Read all FAQs
          </ButtonLink>
        </div>
        <Accordion items={faqItems.slice(0, 4)} />
      </Container>
    </section>
  );
}
