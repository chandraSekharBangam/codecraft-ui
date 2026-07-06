import { CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { AnimatedPattern } from '@/components/ui/animated-pattern';

const highlights = [
  'Modern Web Architecture',
  'Premium Interface Design',
  'Scalable Frontend Systems',
  'Accessible & Responsive',
];

export default function About02() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Badge tone="cyan" className="mb-4">Our Approach</Badge>
          <h2 className="text-3xl font-semibold leading-tight text-ink-950 sm:text-4xl md:text-5xl">
            Building interfaces that empower your business.
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink-600">
            We don't just build websites; we engineer digital experiences. Our focus is on combining high-end design aesthetics with robust, scalable code to deliver platforms that truly stand out in the modern web.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 aria-hidden="true" className="size-5 text-brand-blue" />
                <span className="text-sm font-semibold text-ink-900">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button size="lg" variant="primary">
              Learn more about us
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 rounded-xl bg-ink-50/50 sm:-inset-6 lg:-inset-8" />
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-ink-100 shadow-[0_24px_60px_rgb(5_7_13_/_12%)]">
            <AnimatedPattern theme="light" />
            <div className="flex h-full items-center justify-center">
              <p className="text-sm font-semibold text-ink-400">Premium Image Placeholder</p>
            </div>
          </div>
          {/* Floating stat card */}
          <div className="absolute -bottom-6 -left-6 rounded-lg border border-line bg-white p-5 shadow-[0_12px_40px_rgb(5_7_13_/_10%)] sm:-bottom-8 sm:-left-8">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-brand-cyan/10 text-brand-blue">
                <span className="text-lg font-bold">10+</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-950">Years of</p>
                <p className="text-xs text-ink-500">Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
