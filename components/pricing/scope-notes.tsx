import { Container } from '@/components/ui/container';

const notes = [
  'Every engagement includes responsive implementation and a production build check.',
  'SEO scope is matched to the page importance: home, about, component library, pricing, and contact receive structured metadata.',
  'Existing assets and content are preserved unless a stronger implementation replaces them.',
  'The codebase is organized for handover, not only for a launch screenshot.',
];

export function ScopeNotes() {
  return (
    <section className="bg-ink-50 py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-brand-blue">Scope clarity</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink-950">What is included by default.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {notes.map((note, index) => (
              <article key={note} className="rounded-lg border border-line/80 bg-white p-5 shadow-[0_12px_34px_rgb(5_7_13_/_6%)]">
                <span className="mb-4 flex size-8 items-center justify-center rounded-lg bg-ink-950 text-xs font-semibold text-brand-cyan">
                  {index + 1}
                </span>
                <p className="text-sm leading-7 text-ink-700">{note}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
