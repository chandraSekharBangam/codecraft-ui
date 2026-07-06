import { Container } from '@/components/ui/container';
import type { Metric } from '@/types/site';

interface MetricBandProps {
  metrics: Metric[];
}

export function MetricBand({ metrics }: MetricBandProps) {
  return (
    <section className="border-y border-line/80 bg-ink-50">
      <Container className="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <div key={metric.label} className="brand-border-gradient rounded-lg p-5 shadow-[0_16px_42px_rgb(5_7_13_/_7%)]">
            <div className="mb-5 h-1.5 w-12 rounded-full bg-[linear-gradient(90deg,var(--color-brand-blue),var(--color-brand-cyan))]" style={{ opacity: 1 - index * 0.08 }} />
            <p className="text-3xl font-semibold text-ink-950">{metric.value}</p>
            <h2 className="mt-2 text-sm font-semibold text-ink-900">{metric.label}</h2>
            <p className="mt-2 text-sm leading-6 text-ink-600">{metric.detail}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
