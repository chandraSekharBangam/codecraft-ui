import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

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
    <section className="bg-ink-950 text-white">
      <Container className="py-16 sm:py-20">
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
                <ButtonLink className="border-white/20 bg-transparent text-white hover:bg-white/10" href={secondaryHref} size="lg" variant="outline">
                  {secondaryLabel}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
