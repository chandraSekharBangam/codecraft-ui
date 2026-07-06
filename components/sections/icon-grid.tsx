import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import type { IconContent } from '@/types/site';

const iconAccents = [
  'bg-brand-cyan/10 text-brand-blue border-brand-cyan/30',
  'bg-brand-blue/10 text-brand-blue border-brand-blue/30',
  'bg-ink-100 text-ink-800 border-ink-200',
  'bg-brand-cyan/5 text-brand-cyan border-brand-cyan/20',
];

interface IconGridProps {
  eyebrow: string;
  title: string;
  description: string;
  items: IconContent[];
}

export function IconGrid({ eyebrow, title, description, items }: IconGridProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading description={description} eyebrow={eyebrow} title={title} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card key={item.title} as="article" className="group relative min-h-[250px] shadow-[0_12px_36px_rgb(5_7_13_/_7%)]">
                <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-[linear-gradient(90deg,var(--color-brand-blue),var(--color-brand-cyan))] opacity-80" />
                <div className={`flex size-12 items-center justify-center rounded-lg border ${iconAccents[index % iconAccents.length]}`}>
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
