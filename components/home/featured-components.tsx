import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { componentExamples } from '@/data/content';

export function FeaturedComponents() {
  return (
    <section className="bg-ink-950 py-16 text-white sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading
              className="[&_h2]:text-white [&_p]:text-ink-300"
              description="The original hero-section catalogue is preserved as a more professional component library page with live previews and code examples."
              eyebrow="Migrated library"
              title="Reusable hero sections with production copy."
            />
            <ButtonLink className="mt-8" href="/hero" variant="secondary">
              View component library
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </div>

          <div className="grid gap-4">
            {componentExamples.map((example) => (
              <Link
                key={example.id}
                className="focus-ring rounded-lg border border-white/12 bg-white/[0.04] p-5 transition hover:border-brand-cyan hover:bg-white/[0.07]"
                href="/hero"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{example.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink-300">{example.description}</p>
                  </div>
                  <ArrowRight aria-hidden="true" className="size-5 shrink-0 text-brand-amber" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {example.tech.map((tech) => (
                    <Badge key={tech} tone="ink">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
