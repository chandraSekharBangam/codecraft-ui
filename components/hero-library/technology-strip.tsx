import { Container } from '@/components/ui/container';
import { technologyStack } from '@/data/content';

export function TechnologyStrip() {
  return (
    <section className="border-b border-line/80 bg-white">
      <Container className="flex flex-wrap gap-2 py-6">
        {technologyStack.map((item) => (
          <span key={item} className="rounded-full border border-line bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-700 shadow-[0_8px_24px_rgb(5_7_13_/_4%)]">
            {item}
          </span>
        ))}
      </Container>
    </section>
  );
}
