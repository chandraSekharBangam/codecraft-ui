import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { AnimatedPattern } from '@/components/ui/animated-pattern';
import { SectionHeading } from '@/components/ui/section-heading';
import { componentLibraryCategories } from '@/data/components-library';

export function FeaturedComponents() {
  return (
    <section className="relative bg-ink-950 py-16 text-white sm:py-20">
      <AnimatedPattern />
      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading
              className="[&_h2]:text-white [&_p]:text-ink-300"
              description="The free UI library now organizes reusable sections by category, variant, live preview, and copy-ready code."
              eyebrow="Migrated library"
              title="Reusable sections with production copy."
            />
            <ButtonLink className="mt-8" href="/components" variant="secondary">
              View component library
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </div>

          <div className="grid gap-4">
            {componentLibraryCategories.slice(0, 4).map((category) => (
              <Link
                key={category.id}
                className="focus-ring rounded-lg border border-white/12 bg-white/5 p-5 shadow-[0_16px_46px_rgb(0_0_0_/_16%)] transition hover:-translate-y-1 hover:border-brand-cyan hover:bg-white/10"
                href="/components#component-browser"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink-300">{category.description}</p>
                  </div>
                  <ArrowRight aria-hidden="true" className="size-5 shrink-0 text-brand-cyan" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge tone="ink">{category.variants.length} variants</Badge>
                  <Badge tone="ink">Copy-ready code</Badge>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
