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
    <section className="bg-ink-50 py-16 sm:py-20">
      <Container>
        <SectionHeading align="center" description={description} eyebrow={eyebrow} title={title} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={`${step.eyebrow}-${step.title}`} className="relative rounded-lg border border-line/80 bg-white p-5 shadow-[0_14px_38px_rgb(5_7_13_/_7%)]">
              <div className="mb-5 flex items-center justify-between gap-3">
                <p className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg bg-ink-950 px-3 text-sm font-semibold text-brand-cyan">
                  {step.eyebrow}
                </p>
                <span className="h-px flex-1 bg-[linear-gradient(90deg,var(--color-brand-blue),var(--color-brand-cyan))] opacity-60" />
                <span className="text-xs font-semibold text-ink-400">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-ink-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-600">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
