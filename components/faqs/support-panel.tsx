import { Mail } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/data/site';

export function SupportPanel() {
  return (
    <section className="bg-ink-100 py-16 sm:py-20">
      <Container>
        <div className="rounded-lg border border-line bg-white p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-brand-blue">Still deciding?</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink-950">Send the current state and the outcome you want.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-600">
                A short note with your current repository, page count, and launch deadline is enough to shape the next step.
              </p>
            </div>
            <ButtonLink href={`mailto:${siteConfig.email}`} size="lg" variant="primary">
              <Mail aria-hidden="true" className="size-4" />
              Email a question
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
