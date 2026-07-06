import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { AnimatedPattern } from '@/components/ui/animated-pattern';
import { Container } from '@/components/ui/container';

const heroSignals = ['Brand system', 'Responsive pages', 'Launch-ready code'];

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <AnimatedPattern />
      <Container className="relative z-10 grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-4xl">
          <Badge tone="ink">{eyebrow}</Badge>
          <h1 className="text-balance mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-ink-300 sm:text-lg">{description}</p>
          {primaryHref || secondaryHref ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryHref && primaryLabel ? (
                <ButtonLink href={primaryHref} size="lg" variant="secondary">
                  {primaryLabel}
                </ButtonLink>
              ) : null}
              {secondaryHref && secondaryLabel ? (
                <ButtonLink className="border-white/20 bg-white/5 text-white hover:border-brand-cyan hover:bg-white/10" href={secondaryHref} size="lg" variant="outline">
                  {secondaryLabel}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="rounded-lg border border-white/12 bg-white/5 p-4 shadow-[0_24px_80px_rgb(0_0_0_/_24%)]">
          <div className="rounded-lg border border-white/10 bg-ink-950/80 p-4">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <p className="text-sm font-semibold text-white">{eyebrow}</p>
              <span className="h-2 w-20 rounded-full bg-[linear-gradient(90deg,var(--color-brand-blue),var(--color-brand-cyan))]" />
            </div>
            <div className="mt-4 grid gap-3">
              {heroSignals.map((signal, index) => (
                <div key={signal} className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-white text-sm font-semibold text-ink-950">
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold text-ink-100">{signal}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
