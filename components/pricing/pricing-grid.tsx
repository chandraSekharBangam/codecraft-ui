import { CheckCircle2 } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { pricingPlans } from '@/data/content';
import { cn } from '@/lib/utils';

export function PricingGrid() {
  return (
    <section className="bg-white py-16 sm:py-20">
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
                'rounded-lg border bg-white p-6 shadow-[0_14px_38px_rgb(5_7_13_/_7%)] transition duration-200 hover:-translate-y-1',
                plan.featured ? 'border-ink-950 bg-ink-950 text-white shadow-[0_24px_70px_rgb(5_7_13_/_22%)]' : 'border-line/80',
              )}
            >
              {plan.featured ? (
                <p className="mb-4 inline-flex rounded-full bg-brand-cyan px-3 py-1 text-xs font-semibold text-ink-950">
                  Recommended
                </p>
              ) : null}
              <h2 className={cn('text-2xl font-semibold', plan.featured ? 'text-white' : 'text-ink-950')}>{plan.name}</h2>
              <p className={cn('mt-3 text-3xl font-semibold', plan.featured ? 'text-brand-cyan' : 'text-ink-950')}>{plan.price}</p>
              <p className={cn('mt-4 text-sm leading-7', plan.featured ? 'text-ink-300' : 'text-ink-600')}>{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className={cn('flex gap-3 text-sm leading-6', plan.featured ? 'text-ink-200' : 'text-ink-700')}>
                    <CheckCircle2 aria-hidden="true" className={cn('mt-0.5 size-4 shrink-0', plan.featured ? 'text-brand-cyan' : 'text-brand-blue')} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink className={cn('mt-8 w-full', plan.featured && 'border-white bg-white !text-ink-950 hover:border-brand-cyan hover:bg-brand-cyan')} href="/contact" variant="outline">
                Discuss this option
              </ButtonLink>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
