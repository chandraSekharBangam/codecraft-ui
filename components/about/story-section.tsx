import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

export function StorySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
        <SectionHeading
          description="The project started as a React component gallery. The redesign keeps that useful origin, then turns it into a production-ready website with stronger architecture and a sharper product story."
          eyebrow="About CodeCraft UI"
          title="A component catalogue becoming a real frontend platform."
        />
        <div className="rounded-lg border border-line/80 bg-ink-50 p-6 text-base leading-8 text-ink-600 shadow-[0_14px_38px_rgb(5_7_13_/_7%)] sm:p-8">
          <div className="mb-6 h-1.5 w-16 rounded-full bg-[linear-gradient(90deg,var(--color-brand-blue),var(--color-brand-cyan))]" />
          <div className="space-y-5">
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
        </div>
      </Container>
    </section>
  );
}
