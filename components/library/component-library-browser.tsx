'use client';

import { useEffect, useMemo, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Check,
  BookOpen,
  Code2,
  Copy,
  Expand,
  Eye,
  History,
  Layers3,
  ListChecks,
  MessageSquareText,
  Minimize2,
  MousePointerClick,
  PanelTop,
  Rows3,
  Sparkles,
} from 'lucide-react';
import { VariantPreview } from '@/components/library/variant-preview';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';
import type { HighlightedLibraryCategory, HighlightedLibraryVariant } from '@/types/site';

type ViewMode = 'preview' | 'code';

interface ComponentLibraryBrowserProps {
  categories: HighlightedLibraryCategory[];
}

const categoryIcons: Record<string, LucideIcon> = {
  headers: PanelTop,
  'hero-sections': Sparkles,
  about: BookOpen,
  features: Layers3,
  pricing: ListChecks,
  cta: MousePointerClick,
  timelines: History,
  'contact-faq': MessageSquareText,
};

export function ComponentLibraryBrowser({ categories }: ComponentLibraryBrowserProps) {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id ?? '');
  const [activeVariantId, setActiveVariantId] = useState(categories[0]?.variants[0]?.id ?? '');
  const [viewMode, setViewMode] = useState<ViewMode>('preview');
  const [copiedId, setCopiedId] = useState('');
  const [fullscreen, setFullscreen] = useState(false);

  const activeCategory = useMemo(
    () => categories.find((category) => category.id === activeCategoryId) ?? categories[0],
    [activeCategoryId, categories],
  );
  const activeVariant = useMemo(
    () => activeCategory?.variants.find((variant) => variant.id === activeVariantId) ?? activeCategory?.variants[0],
    [activeCategory, activeVariantId],
  );

  useEffect(() => {
    if (!fullscreen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setFullscreen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [fullscreen]);

  if (!activeCategory || !activeVariant) {
    return null;
  }

  function selectCategory(category: HighlightedLibraryCategory) {
    setActiveCategoryId(category.id);
    setActiveVariantId(category.variants[0]?.id ?? '');
    setViewMode('preview');
  }

  async function copyCode(variant: HighlightedLibraryVariant) {
    try {
      await navigator.clipboard.writeText(variant.code);
      setCopiedId(variant.id);
      window.setTimeout(() => setCopiedId(''), 1800);
    } catch {
      setCopiedId('');
    }
  }

  function openFullscreenPreview() {
    setViewMode('preview');
    setFullscreen(true);
  }

  return (
    <section className="py-16 sm:py-20" id="component-browser">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              description="Choose a category, compare variants, preview the section, then copy the production-ready Next.js, TypeScript, and Tailwind CSS code."
              eyebrow="Free UI library"
              title="Browse reusable sections by category."
            />

            <div className="mt-8 grid gap-3" aria-label="Component categories">
              {categories.map((category) => {
                const Icon = categoryIcons[category.id] ?? Rows3;
                const selected = category.id === activeCategory.id;

                return (
                  <button
                    key={category.id}
                    aria-pressed={selected}
                    className={cn(
                      'focus-ring rounded-lg border bg-white p-4 text-left transition hover:border-ink-950',
                      selected ? 'border-ink-950 shadow-[var(--shadow-premium)]' : 'border-line',
                    )}
                    type="button"
                    onClick={() => selectCategory(category)}
                  >
                    <span className="flex items-center gap-3">
                      <span className={cn('flex size-10 items-center justify-center rounded-lg', selected ? 'bg-ink-950 text-brand-cyan' : 'bg-ink-100 text-ink-700')}>
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-ink-950">{category.title}</span>
                        <span className="mt-1 block text-xs font-medium text-ink-500">{category.variants.length} variants</span>
                      </span>
                    </span>
                    <span className="mt-3 block text-sm leading-6 text-ink-600">{category.description}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="rounded-lg border border-line bg-white shadow-[var(--shadow-premium)]">
              <div className="border-b border-line p-4 sm:p-5">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-brand-blue">{activeCategory.title}</p>
                    <h2 className="mt-1 text-2xl font-semibold text-ink-950">{activeVariant.title}</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-ink-600">{activeVariant.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeVariant.stack.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                  {activeCategory.variants.map((variant) => (
                    <button
                      key={variant.id}
                      aria-pressed={variant.id === activeVariant.id}
                      className={cn(
                        'focus-ring rounded-lg border px-4 py-3 text-left text-sm font-semibold transition',
                        variant.id === activeVariant.id
                          ? 'border-ink-950 bg-ink-950 text-white'
                          : 'border-line bg-ink-100 text-ink-700 hover:border-ink-950',
                      )}
                      type="button"
                      onClick={() => {
                        setActiveVariantId(variant.id);
                        setViewMode('preview');
                      }}
                    >
                      {variant.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 border-b border-line p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <div className="inline-flex rounded-lg border border-line bg-ink-100 p-1" role="tablist" aria-label="Preview and code">
                  <button
                    aria-selected={viewMode === 'preview'}
                    className={cn(
                      'focus-ring inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm font-semibold transition',
                      viewMode === 'preview' ? 'bg-ink-950 text-white' : 'text-ink-700',
                    )}
                    role="tab"
                    type="button"
                    onClick={() => setViewMode('preview')}
                  >
                    <Eye aria-hidden="true" className="size-4" />
                    Preview
                  </button>
                  <button
                    aria-selected={viewMode === 'code'}
                    className={cn(
                      'focus-ring inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm font-semibold transition',
                      viewMode === 'code' ? 'bg-ink-950 text-white' : 'text-ink-700',
                    )}
                    role="tab"
                    type="button"
                    onClick={() => setViewMode('code')}
                  >
                    <Code2 aria-hidden="true" className="size-4" />
                    Code
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline" onClick={() => copyCode(activeVariant)}>
                    {copiedId === activeVariant.id ? (
                      <Check aria-hidden="true" className="size-4 text-brand-blue" />
                    ) : (
                      <Copy aria-hidden="true" className="size-4" />
                    )}
                    {copiedId === activeVariant.id ? 'Copied' : 'Copy code'}
                  </Button>
                  <Button size="sm" variant="outline" onClick={openFullscreenPreview}>
                    <Expand aria-hidden="true" className="size-4" />
                    Fullscreen
                  </Button>
                </div>
              </div>

              <div className="p-4 sm:p-5" role="tabpanel">
                {viewMode === 'preview' ? <PreviewSurface variant={activeVariant} /> : <CodeSurface variant={activeVariant} />}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {fullscreen ? (
        <div aria-label={`${activeVariant.title} fullscreen preview`} aria-modal="true" className="fixed inset-0 z-[100] bg-ink-950/80 p-3 backdrop-blur" role="dialog">
          <div className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-[0_28px_90px_rgb(0_0_0_/_38%)]">
            <div className="flex items-center justify-between gap-3 border-b border-line p-3 sm:p-4">
              <div>
                <p className="text-xs font-semibold uppercase text-ink-500">Fullscreen preview</p>
                <h2 className="text-base font-semibold text-ink-950">{activeVariant.title}</h2>
              </div>
              <Button size="sm" variant="outline" onClick={() => setFullscreen(false)}>
                <Minimize2 aria-hidden="true" className="size-4" />
                Exit
              </Button>
            </div>
            <div className="min-h-0 flex-1 overflow-auto bg-ink-100 p-4 sm:p-6">
              <div className="mx-auto min-w-[320px] max-w-6xl">
                <VariantPreview variant={activeVariant} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function PreviewSurface({ variant }: { variant: HighlightedLibraryVariant }) {
  return (
    <div className="h-[430px] overflow-auto rounded-lg border border-line bg-ink-100 p-4 sm:p-6">
      <div className="mx-auto min-w-[320px] max-w-5xl">
        <VariantPreview variant={variant} />
      </div>
    </div>
  );
}

function CodeSurface({ variant }: { variant: HighlightedLibraryVariant }) {
  return (
    <div className="overflow-hidden rounded-lg border border-ink-800 bg-[#0d1117]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#161b22] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-brand-coral" />
          <span className="size-3 rounded-full bg-brand-amber" />
          <span className="size-3 rounded-full bg-brand-cyan" />
        </div>
        <p className="truncate text-xs font-semibold text-ink-300">{variant.title.replaceAll(' ', '')}.tsx</p>
      </div>
      <div
        className="code-viewer max-h-[560px] overflow-auto text-sm"
        dangerouslySetInnerHTML={{ __html: variant.highlightedCode }}
      />
    </div>
  );
}
