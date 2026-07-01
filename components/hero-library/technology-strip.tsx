import { Container } from '@/components/ui/container';
import { technologyStack } from '@/data/content';

export function TechnologyStrip() {
  return (
    <section className="border-b border-line bg-white">
      <Container className="flex flex-wrap gap-2 py-6">
        {technologyStack.map((item) => (
          <span key={item} className="rounded-full border border-line bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-700">
            {item}
          </span>
        ))}
      </Container>
    </section>
  );
}
