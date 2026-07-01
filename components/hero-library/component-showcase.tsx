'use client';

import { useState } from 'react';
import { Check, Code2, Copy, Eye } from 'lucide-react';
import { HeroPreview } from '@/components/hero-library/hero-previews';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { componentExamples } from '@/data/content';
import { cn } from '@/lib/utils';

type ViewMode = 'preview' | 'code';

export function ComponentShowcase() {
  const [activeId, setActiveId] = useState(componentExamples[0]?.id ?? '');
  const [viewMode, setViewMode] = useState<ViewMode>('preview');
  const [copiedId, setCopiedId] = useState('');
  const activeExample = componentExamples.find((example) => example.id === activeId) ?? componentExamples[0];

  async function copyCode() {
    if (!activeExample) {
      return;
    }

    await navigator.clipboard.writeText(activeExample.code);
    setCopiedId(activeExample.id);
    window.setTimeout(() => setCopiedId(''), 1800);
  }

  if (!activeExample) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20" id="examples">
      <Container>
        <SectionHeading
          description="Each example is intentionally compact here, but the structure is ready to expand into a deeper component catalogue."
          eyebrow="Examples"
          title="Live previews with implementation-ready snippets."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.42fr_1fr]">
          <div className="space-y-3">
            {componentExamples.map((example) => (
              <button
                key={example.id}
                className={cn(
                  'focus-ring w-full rounded-lg border border-line bg-white p-4 text-left transition hover:border-ink-950',
                  activeId === example.id && 'border-ink-950 shadow-[var(--shadow-premium)]',
                )}
                type="button"
                onClick={() => setActiveId(example.id)}
              >
                <h2 className="text-base font-semibold text-ink-950">{example.title}</h2>
                <p className="mt-2 text-sm leading-6 text-ink-600">{example.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {example.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-lg border border-line bg-white">
            <div className="flex flex-col gap-3 border-b border-line p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-semibold text-ink-950">{activeExample.title}</h2>
                <p className="text-sm text-ink-600">{viewMode === 'preview' ? 'Live preview' : 'Code snippet'}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  aria-pressed={viewMode === 'preview'}
                  size="sm"
                  variant={viewMode === 'preview' ? 'primary' : 'outline'}
                  onClick={() => setViewMode('preview')}
                >
                  <Eye aria-hidden="true" className="size-4" />
                  Preview
                </Button>
                <Button
                  aria-pressed={viewMode === 'code'}
                  size="sm"
                  variant={viewMode === 'code' ? 'primary' : 'outline'}
                  onClick={() => setViewMode('code')}
                >
                  <Code2 aria-hidden="true" className="size-4" />
                  Code
                </Button>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              {viewMode === 'preview' ? (
                <HeroPreview example={activeExample} />
              ) : (
                <div>
                  <div className="mb-3 flex justify-end">
                    <Button size="sm" variant="outline" onClick={copyCode}>
                      {copiedId === activeExample.id ? (
                        <Check aria-hidden="true" className="size-4 text-brand-blue" />
                      ) : (
                        <Copy aria-hidden="true" className="size-4" />
                      )}
                      {copiedId === activeExample.id ? 'Copied' : 'Copy code'}
                    </Button>
                  </div>
                  <pre className="max-h-[520px] overflow-auto rounded-lg bg-ink-950 p-4 text-sm leading-7 text-ink-100">
                    <code>{activeExample.code}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
