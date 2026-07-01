import { Container } from '@/components/ui/container';
import type { Metric } from '@/types/site';

interface MetricBandProps {
  metrics: Metric[];
}

export function MetricBand({ metrics }: MetricBandProps) {
  return (
    <section className="border-y border-line bg-white">
      <Container className="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-lg border border-line p-5">
            <p className="text-3xl font-semibold text-ink-950">{metric.value}</p>
            <h2 className="mt-2 text-sm font-semibold text-ink-900">{metric.label}</h2>
            <p className="mt-2 text-sm leading-6 text-ink-600">{metric.detail}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
