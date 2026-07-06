import Image from 'next/image';
import { ArrowRight, CheckCircle2, LayoutDashboard, ShieldCheck, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { AnimatedPattern } from '@/components/ui/animated-pattern';
import { technologyStack } from '@/data/content';

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <AnimatedPattern />
      <Container className="relative z-10 grid min-h-[calc(100svh-4.75rem)] gap-12 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="max-w-3xl">
          <Badge tone="ink">
            <Sparkles aria-hidden="true" className="mr-2 size-3.5 text-brand-cyan" />
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
              <span key={item} className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-semibold text-ink-300">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="rounded-lg border border-white/12 bg-white/5 p-3 shadow-[0_30px_90px_rgb(0_0_0_/_34%)]">
            <div className="overflow-hidden rounded-lg border border-line bg-white text-ink-950">
              <div className="flex items-center justify-between gap-4 border-b border-line bg-ink-950 p-4">
                <Image alt="CodeCraft UI" className="h-auto w-[168px] drop-shadow-[0_10px_24px_rgb(0_0_0_/_35%)]" height={80} src="/CodeCraftUILogo.png" width={405} />
                <span className="rounded-full border border-brand-cyan/35 bg-brand-cyan/10 px-3 py-1 text-xs font-semibold text-brand-cyan">
                  Live system
                </span>
              </div>

              <div className="grid gap-4 p-4 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-lg border border-line bg-ink-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-ink-950">
                    <LayoutDashboard aria-hidden="true" className="size-4 text-brand-blue" />
                    Design command
                  </div>
                  <div className="mt-4 grid grid-cols-5 gap-2">
                    {['bg-ink-950', 'bg-ink-800', 'bg-ink-600', 'bg-brand-blue', 'bg-brand-cyan'].map((color) => (
                      <span key={color} className={`${color} block aspect-square rounded-md shadow-[inset_0_0_0_1px_rgb(255_255_255_/_45%)]`} />
                    ))}
                  </div>
                  <div className="mt-5 grid gap-2">
                    {['Identity', 'Sections', 'Responsive'].map((item) => (
                      <div key={item} className="flex items-center justify-between rounded-md bg-white px-3 py-2 text-xs font-semibold text-ink-700">
                        <span>{item}</span>
                        <CheckCircle2 aria-hidden="true" className="size-4 text-brand-blue" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-line p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <ShieldCheck aria-hidden="true" className="size-4 text-brand-blue" />
                    Production checklist
                  </div>
                  <div className="mt-4 space-y-3">
                    {['App Router pages', 'Reusable UI primitives', 'SEO metadata routes', 'Responsive QA'].map((item) => (
                      <div key={item} className="flex items-center justify-between rounded-md border border-line bg-ink-50 px-3 py-2 text-sm">
                        <span>{item}</span>
                        <span className="size-2 rounded-full bg-brand-cyan" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-line bg-ink-950 p-4 text-white">
                <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <p className="text-sm font-semibold">Current migration</p>
                    <p className="mt-1 text-xs text-ink-300">Next.js 16 interface system</p>
                  </div>
                  <span className="rounded-full bg-brand-cyan px-3 py-1 text-xs font-semibold text-ink-950">Premium pass</span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-4/5 rounded-full bg-[linear-gradient(90deg,var(--color-brand-blue),var(--color-brand-cyan))]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
