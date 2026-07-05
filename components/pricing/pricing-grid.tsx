import { CheckCircle2 } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { pricingPlans } from '@/data/content';
import { cn } from '@/lib/utils';

export function PricingGrid() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          align="center"
          description="No fixed public prices are shown because production frontend work depends on page count, content depth, integrations, timeline, and migration complexity."
          eyebrow="Engagement shapes"
          title="Choose the starting point that matches the build."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                'rounded-lg border bg-white p-6',
                plan.featured ? 'border-ink-950 shadow-[var(--shadow-premium)]' : 'border-line',
              )}
            >
              {plan.featured ? (
                <p className="mb-4 inline-flex rounded-full bg-brand-amber px-3 py-1 text-xs font-semibold text-ink-950">
                  Recommended
                </p>
              ) : null}
              <h2 className="text-2xl font-semibold text-ink-950">{plan.name}</h2>
              <p className="mt-3 text-3xl font-semibold text-ink-950">{plan.price}</p>
              <p className="mt-4 text-sm leading-7 text-ink-600">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-ink-700">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-blue" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink className="mt-8 w-full" href="/contact" variant={plan.featured ? 'primary' : 'outline'}>
                Discuss this option
              </ButtonLink>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
