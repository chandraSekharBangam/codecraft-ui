import type { JsonLdGraph } from '@/lib/schema';

interface JsonLdProps {
  data: JsonLdGraph | JsonLdGraph[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
