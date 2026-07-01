import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import type { IconContent } from '@/types/site';

interface IconGridProps {
  eyebrow: string;
  title: string;
  description: string;
  items: IconContent[];
}

export function IconGrid({ eyebrow, title, description, items }: IconGridProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading description={description} eyebrow={eyebrow} title={title} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title} as="article" className="shadow-none">
                <div className="flex size-11 items-center justify-center rounded-lg bg-ink-950 text-brand-cyan">
                  <Icon aria-hidden="true" className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-600">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
