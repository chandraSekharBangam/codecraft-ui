import { Container } from '@/components/ui/container';

interface LogoCloudProps {
  title?: string;
  items: string[];
}

export function LogoCloud({ title, items }: LogoCloudProps) {
  return (
    <section className="border-y border-line/80 bg-white py-12">
      <Container>
        {title && (
          <p className="mb-8 text-center text-sm font-semibold text-ink-500">
            {title}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="select-none rounded-lg border border-line/80 bg-ink-50 px-4 py-2 text-sm font-semibold text-ink-700 shadow-[0_8px_24px_rgb(5_7_13_/_5%)] sm:text-base"
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
