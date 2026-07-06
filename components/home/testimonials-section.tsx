import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { testimonials } from '@/data/content';

export function TestimonialsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          align="center"
          description="Strong frontend work should feel calm to use and clear to maintain."
          eyebrow="Trust signals"
          title="Built for teams that care about both design and code quality."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <figure key={testimonial.name} className="rounded-lg border border-line/80 bg-white p-6 shadow-[var(--shadow-premium)]">
              <div className="mb-5 h-1.5 w-12 rounded-full bg-[linear-gradient(90deg,var(--color-brand-blue),var(--color-brand-cyan))]" style={{ opacity: 1 - index * 0.12 }} />
              <blockquote className="text-base leading-8 text-ink-700">{testimonial.quote}</blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="font-semibold text-ink-950">{testimonial.name}</p>
                <p className="mt-1 text-sm text-ink-500">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
