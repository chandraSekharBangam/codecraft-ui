import { Container } from '@/components/ui/container';

interface LogoCloudProps {
  title?: string;
  items: string[];
}

export function LogoCloud({ title, items }: LogoCloudProps) {
  return (
    <section className="border-y border-ink-100 bg-white py-12">
      <Container>
        {title && (
          <p className="text-center text-sm font-semibold text-ink-500 mb-8">
            {title}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 lg:gap-x-24">
          {items.map((item, index) => (
            <div key={index} className="text-xl font-bold tracking-tight text-ink-300 sm:text-2xl select-none">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
