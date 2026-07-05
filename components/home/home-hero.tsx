import Image from 'next/image';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { technologyStack } from '@/data/content';

export function HomeHero() {
  return (
    <section className="bg-grid bg-ink-950 text-white">
      <Container className="grid min-h-[calc(100svh-4.5rem)] gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div>
          <Badge tone="ink">
            <Sparkles aria-hidden="true" className="mr-2 size-3.5 text-brand-amber" />
            Next.js interface systems
          </Badge>
          <h1 className="text-balance mt-6 text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            CodeCraft UI
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-300">
            Hire Chandra Sekhar Bangam for custom websites, SaaS interfaces, dashboards, and modern web applications,
            or browse free Next.js, TypeScript, and Tailwind CSS sections you can copy into production.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" size="lg" variant="secondary">
              Start a project
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            <ButtonLink className="border-white/20 bg-white/5 text-white hover:bg-white/10" href="/components" size="lg" variant="outline">
              Explore components
            </ButtonLink>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {technologyStack.slice(0, 5).map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-ink-300">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-lg border border-white/12 bg-white/[0.04] p-3 shadow-[0_28px_90px_rgb(0_0_0_/_32%)]">
            <div className="rounded-lg border border-white/10 bg-white p-4 text-ink-950">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <Image alt="CodeCraft UI" className="h-auto w-[156px]" height={80} src="/CodeCraftUILogo.png" width={405} />
                <span className="rounded-full bg-ink-950 px-3 py-1 text-xs font-semibold text-brand-cyan">Live system</span>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-[0.8fr_1fr]">
                <div className="rounded-lg border border-line bg-ink-100 p-4">
                  <p className="text-xs font-semibold uppercase text-ink-500">Design tokens</p>
                  <div className="mt-4 grid grid-cols-5 gap-2">
                    {['bg-brand-cyan', 'bg-brand-blue', 'bg-brand-violet', 'bg-brand-coral', 'bg-brand-amber'].map((color) => (
                      <span key={color} className={`${color} block aspect-square rounded-md`} />
                    ))}
                  </div>
                  <div className="mt-5 space-y-2">
                    <div className="h-2 rounded-full bg-ink-200" />
                    <div className="h-2 w-2/3 rounded-full bg-ink-200" />
                  </div>
                </div>
                <div className="rounded-lg border border-line p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <CheckCircle2 aria-hidden="true" className="size-4 text-brand-blue" />
                    Production checklist
                  </div>
                  <div className="mt-4 space-y-3">
                    {['App Router pages', 'Reusable UI primitives', 'SEO metadata routes', 'Responsive QA'].map((item) => (
                      <div key={item} className="flex items-center justify-between rounded-md bg-ink-100 px-3 py-2 text-sm">
                        <span>{item}</span>
                        <span className="size-2 rounded-full bg-brand-cyan" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-ink-950 p-4 text-white">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Current migration</p>
                  <p className="text-sm text-brand-amber">Next.js 16</p>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-brand-cyan" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
