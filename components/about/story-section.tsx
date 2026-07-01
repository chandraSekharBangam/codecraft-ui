import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

export function StorySection() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
        <SectionHeading
          description="The project started as a React component gallery. The redesign keeps that useful origin, then turns it into a production-ready website with stronger architecture and a sharper product story."
          eyebrow="About CodeCraft UI"
          title="A component catalogue becoming a real frontend platform."
        />
        <div className="space-y-5 text-base leading-8 text-ink-600">
          <p>
            CodeCraft UI exists for teams and makers who want web interfaces that look credible, read clearly, and are
            easy to extend. The work combines design systems, Next.js architecture, TypeScript discipline, and practical
            launch details.
          </p>
          <p>
            The migration removes demo-only concepts, replaces React Router with App Router routes, and organizes pages
            around reusable sections. The result is a codebase that can grow without depending on a separate UI showcase
            folder or duplicated page copy.
          </p>
        </div>
      </Container>
    </section>
  );
}
