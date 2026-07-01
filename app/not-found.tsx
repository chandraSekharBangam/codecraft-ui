import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export default function NotFound() {
  return (
    <Container className="py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-brand-blue">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink-950">This page is not available.</h1>
        <p className="mt-4 text-ink-600">
          The route may have moved during the migration. Head back to the homepage to continue exploring CodeCraft UI.
        </p>
        <ButtonLink className="mt-8" href="/">
          Back to home
        </ButtonLink>
      </div>
    </Container>
  );
}
