import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { testimonials } from '@/data/content';

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          align="center"
          description="Strong frontend work should feel calm to use and clear to maintain."
          eyebrow="Trust signals"
          title="Built for teams that care about both design and code quality."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-lg border border-line bg-white p-6 shadow-[var(--shadow-premium)]">
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
