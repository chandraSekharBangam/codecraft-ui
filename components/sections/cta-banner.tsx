import { ArrowRight } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/data/site';

interface CtaBannerProps {
  title?: string;
  description?: string;
}

export function CtaBanner({
  title = 'Ready to turn the interface into a production asset?',
  description = 'Start with a focused frontend audit, a new landing page, or a full Next.js migration plan.',
}: CtaBannerProps) {
  return (
    <section className="bg-ink-950 text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-brand-amber">Launch with clarity</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-300 sm:text-base">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href="/contact" size="lg" variant="secondary">
              Start a project
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            <ButtonLink className="border-white/20 bg-transparent text-white hover:bg-white/10" href={`mailto:${siteConfig.email}`} size="lg" variant="outline">
              Email directly
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
