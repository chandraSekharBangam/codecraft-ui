import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import type { ProcessStep } from '@/types/site';

interface ProcessListProps {
  eyebrow: string;
  title: string;
  description: string;
  steps: ProcessStep[];
}

export function ProcessList({ eyebrow, title, description, steps }: ProcessListProps) {
  return (
    <section className="bg-ink-100 py-16 sm:py-20">
      <Container>
        <SectionHeading align="center" description={description} eyebrow={eyebrow} title={title} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={`${step.eyebrow}-${step.title}`} className="rounded-lg border border-line bg-white p-5">
              <p className="text-sm font-semibold text-brand-blue">{step.eyebrow}</p>
              <h3 className="mt-3 text-lg font-semibold text-ink-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-600">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
