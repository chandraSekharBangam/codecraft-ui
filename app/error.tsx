'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <Container className="py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-brand-coral">Application error</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink-950">Something interrupted this page.</h1>
        <p className="mt-4 text-ink-600">
          The page did not render cleanly. Try again, and if it repeats, include this message when reporting it:
          {' '}
          {error.message}
        </p>
        <Button className="mt-8" onClick={reset}>
          Retry
        </Button>
      </div>
    </Container>
  );
}
