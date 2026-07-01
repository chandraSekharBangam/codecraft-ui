import { Container } from '@/components/ui/container';

export default function Loading() {
  return (
    <Container className="py-24">
      <div className="h-2 w-40 overflow-hidden rounded-full bg-ink-100">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-brand-cyan" />
      </div>
      <p className="mt-5 text-sm font-medium text-ink-600">Loading CodeCraft UI...</p>
    </Container>
  );
}
