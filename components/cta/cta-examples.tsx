import { ArrowRight, Mail, ShieldCheck } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { AnimatedPattern } from '@/components/ui/animated-pattern';
import { siteConfig } from '@/data/site';

export function CtaExamples() {
  return (
    <section className="bg-ink-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          description="These examples can be reused across product pages, service pages, pricing flows, and final contact sections."
          eyebrow="Examples"
          title="Three polished CTA compositions."
        />
        <div className="mt-10 grid gap-5">
          <article className="relative overflow-hidden rounded-lg border border-white/10 bg-ink-950 p-6 text-white shadow-[0_24px_70px_rgb(5_7_13_/_20%)] sm:p-8">
            <AnimatedPattern />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold text-brand-cyan">Launch support</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight">Move from redesign plan to production site.</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-300">
                  Get the App Router setup, reusable sections, metadata, and responsive QA in one focused frontend build.
                </p>
              </div>
              <ButtonLink href="/contact" size="lg" variant="secondary">
                Start now
                <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
            </div>
          </article>

          <article className="rounded-lg border border-line/80 bg-white p-6 shadow-[0_14px_38px_rgb(5_7_13_/_7%)] sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold text-brand-blue">Direct contact</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink-950">Send the current site and the launch goal.</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-600">
                  A clear brief is enough to start a scoped recommendation for migration, redesign, or performance cleanup.
                </p>
              </div>
              <ButtonLink href={`mailto:${siteConfig.email}`} size="lg" variant="outline">
                <Mail aria-hidden="true" className="size-4" />
                Email CodeCraft UI
              </ButtonLink>
            </div>
          </article>

          <article className="rounded-lg border border-line/80 bg-white p-6 shadow-[0_14px_38px_rgb(5_7_13_/_7%)] sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-brand-cyan/30 bg-brand-cyan/10 text-brand-blue">
                  <ShieldCheck aria-hidden="true" className="size-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-ink-950">Production readiness check</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-600">
                    Review routes, metadata, accessibility states, and build output before the site goes live.
                  </p>
                </div>
              </div>
              <ButtonLink href="/contact" variant="primary">
                Discuss readiness
              </ButtonLink>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
