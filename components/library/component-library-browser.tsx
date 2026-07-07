'use client';

import { useEffect, useMemo, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Check,
  BookOpen,
  Code2,
  Copy,
  Expand,
  History,
  Layers3,
  ListChecks,
  MessageSquareText,
  Minimize2,
  MousePointerClick,
  PanelTop,
  Rows3,
  Maximize,
  LayoutTemplate,
  Square,
  RectangleHorizontal,
  FormInput,
  Sparkles,
  Search,
  X,
} from 'lucide-react';
import { VariantPreview } from '@/components/library/variant-preview';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';
import type { HighlightedLibraryCategory, HighlightedLibraryVariant } from '@/types/site';

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
  buttons: Square,
  forms: FormInput,
  cards: RectangleHorizontal,
  popups: Maximize,
  'landing-pages': LayoutTemplate,
};

export function ComponentLibraryBrowser({ categories }: ComponentLibraryBrowserProps) {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id ?? '');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals state
  const [fullscreenVariant, setFullscreenVariant] = useState<HighlightedLibraryVariant | null>(null);
  const [codeViewerVariant, setCodeViewerVariant] = useState<HighlightedLibraryVariant | null>(null);
  const [copiedId, setCopiedId] = useState('');

  const activeCategory = useMemo(
    () => categories.find((category) => category.id === activeCategoryId) ?? categories[0],
    [activeCategoryId, categories],
  );

  // Search logic: If searchQuery is empty, show active category variants.
  // If searchQuery has text, search across ALL categories.
  const displayedVariants = useMemo(() => {
    if (!searchQuery.trim()) {
      return activeCategory?.variants ?? [];
    }

    const query = searchQuery.toLowerCase();
    const allVariants = categories.flatMap(c => c.variants);
    return allVariants.filter(
      (v) => 
        v.title.toLowerCase().includes(query) || 
        v.description.toLowerCase().includes(query) ||
        v.stack.some(s => s.toLowerCase().includes(query))
    );
  }, [searchQuery, activeCategory, categories]);

  useEffect(() => {
    if (!fullscreenVariant && !codeViewerVariant) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setFullscreenVariant(null);
        setCodeViewerVariant(null);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [fullscreenVariant, codeViewerVariant]);

  if (!activeCategory) {
    return null;
  }

  function selectCategory(category: HighlightedLibraryCategory) {
    setActiveCategoryId(category.id);
    setSearchQuery(''); // clear search when category is manually selected
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

  return (
    <section className="bg-[#fcfdfd] py-16 sm:py-20" id="component-browser">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          {/* LEFT SIDEBAR - CATEGORIES UI INTACT */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              description="Choose a category, compare variants, preview the section, then copy the production-ready Next.js, TypeScript, and Tailwind CSS code."
              eyebrow="Free UI library"
              title="Browse reusable sections by category."
            />

            <div className="mt-8 grid gap-3" aria-label="Component categories">
              {categories.map((category) => {
                const Icon = categoryIcons[category.id] ?? Rows3;
                const selected = category.id === activeCategory.id && !searchQuery.trim();

                return (
                  <button
                    key={category.id}
                    aria-pressed={selected}
                    className={cn(
                      'focus-ring rounded-lg border bg-white p-4 text-left shadow-[0_10px_28px_rgb(5_7_13_/_5%)] transition hover:-translate-y-0.5 hover:border-brand-blue',
                      selected ? 'border-ink-950 bg-ink-950 text-white shadow-[var(--shadow-premium)]' : 'border-line/80',
                    )}
                    type="button"
                    onClick={() => selectCategory(category)}
                  >
                    <span className="flex items-center gap-3">
                      <span className={cn('flex size-10 items-center justify-center rounded-lg border', selected ? 'border-white/15 bg-white/10 text-brand-cyan' : 'border-line bg-ink-50 text-ink-700')}>
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <span>
                        <span className={cn('block text-sm font-semibold', selected ? 'text-white' : 'text-ink-950')}>{category.title}</span>
                        <span className={cn('mt-1 block text-xs font-medium', selected ? 'text-ink-300' : 'text-ink-500')}>{category.variants.length} variants</span>
                      </span>
                    </span>
                    <span className={cn('mt-3 block text-sm leading-6', selected ? 'text-ink-300' : 'text-ink-600')}>{category.description}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDEBAR - GRID UI UPGRADE */}
          <div className="flex flex-col gap-6">
            {/* Search Bar */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-ink-400">
                <Search className="size-5" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for components, sections, or keywords..." 
                className="w-full rounded-xl border border-line bg-white py-4 pl-11 pr-11 text-sm font-medium text-ink-950 shadow-[0_8px_20px_rgb(5_7_13_/_4%)] placeholder:text-ink-400 focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/10 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-ink-400 hover:text-ink-700 transition-colors"
                >
                  <X className="size-5" />
                </button>
              )}
            </div>
            
            {/* Search Results / Category Header */}
            <div className="flex items-center justify-between pb-2">
              <h2 className="text-xl font-semibold text-ink-950">
                {searchQuery.trim() ? `Search results for "${searchQuery}"` : activeCategory.title}
              </h2>
              <span className="rounded-full bg-ink-100 px-3 py-1 text-sm font-semibold text-ink-700">{displayedVariants.length} variants</span>
            </div>

            {/* Grid View */}
            {displayedVariants.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                {displayedVariants.map(variant => (
                  <div key={variant.id} className="flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-[0_12px_32px_rgb(5_7_13_/_6%)] transition-all hover:shadow-[0_16px_48px_rgb(5_7_13_/_10%)]">
                    <div className="flex flex-col gap-2 border-b border-line/60 p-5 pb-4">
                      <h3 className="text-lg font-semibold text-ink-950">{variant.title}</h3>
                      <p className="line-clamp-2 text-sm text-ink-600">{variant.description}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {variant.stack.map((item) => (
                          <Badge key={item} tone="ink" className="bg-ink-50 text-ink-700">{item}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Preview Area in Grid - Now Fully Interactable */}
                    <div className="relative h-[280px] w-full overflow-hidden bg-ink-50/50 p-4">
                      <div className="relative h-full w-full overflow-hidden rounded-lg border border-line bg-white shadow-sm">
                         <div className="absolute inset-0 h-[153.8%] w-[153.8%] origin-top-left scale-[0.65]">
                           <VariantPreview variant={variant} />
                         </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 border-t border-line bg-ink-50/30 p-4">
                      <Button size="sm" variant="outline" className="bg-white hover:border-brand-blue hover:text-brand-blue" onClick={() => setFullscreenVariant(variant)}>
                        <Expand aria-hidden="true" className="mr-2 size-4" />
                        Preview
                      </Button>
                      <Button size="sm" variant="outline" className="bg-white hover:border-brand-blue hover:text-brand-blue" onClick={() => setCodeViewerVariant(variant)}>
                        <Code2 aria-hidden="true" className="mr-2 size-4" />
                        Code
                      </Button>
                      <Button size="sm" variant="primary" className="ml-auto" onClick={() => copyCode(variant)}>
                        {copiedId === variant.id ? (
                          <Check aria-hidden="true" className="mr-2 size-4 text-green-400" />
                        ) : (
                          <Copy aria-hidden="true" className="mr-2 size-4" />
                        )}
                        {copiedId === variant.id ? 'Copied' : 'Copy'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex h-[400px] flex-col items-center justify-center rounded-xl border border-dashed border-line bg-white text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-ink-50 text-ink-400">
                  <Search className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-950">No variants found</h3>
                <p className="mt-2 text-sm text-ink-600">Try adjusting your search terms or select a different category.</p>
                <Button variant="outline" className="mt-6" onClick={() => setSearchQuery('')}>Clear search</Button>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Fullscreen Preview Modal */}
      {fullscreenVariant ? (
        <div aria-label={`${fullscreenVariant.title} fullscreen preview`} aria-modal="true" className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/85 p-3 backdrop-blur sm:p-6 md:p-8" role="dialog">
          <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/15 bg-white shadow-[0_28px_90px_rgb(0_0_0_/_38%)]">
            <div className="flex items-center justify-between gap-3 border-b border-line bg-ink-50 p-3 sm:p-4 md:px-6">
              <div>
                <p className="text-xs font-semibold uppercase text-brand-blue">Fullscreen Preview</p>
                <h2 className="text-base font-semibold text-ink-950">{fullscreenVariant.title}</h2>
              </div>
              <Button size="sm" variant="outline" onClick={() => setFullscreenVariant(null)}>
                <Minimize2 aria-hidden="true" className="mr-2 size-4" />
                Close
              </Button>
            </div>
            <div className="min-h-0 flex-1 overflow-auto bg-ink-50/50 p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="mx-auto min-w-[320px] max-w-7xl overflow-hidden rounded-xl border border-line bg-white shadow-xl">
                <VariantPreview variant={fullscreenVariant} />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Code Viewer Modal (Fixes overlap issues) */}
      {codeViewerVariant ? (
        <div aria-label={`${codeViewerVariant.title} code`} aria-modal="true" className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/85 p-3 backdrop-blur sm:p-6 md:p-12" role="dialog">
          <div className="flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0d1117] shadow-[0_28px_90px_rgb(0_0_0_/_50%)]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#161b22] p-4 sm:px-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-brand-cyan" />
                  <span className="size-3 rounded-full bg-brand-blue" />
                  <span className="size-3 rounded-full bg-brand-cyan" />
                </div>
                <div>
                  <p className="text-xs font-medium text-ink-400">Code View</p>
                  <h2 className="text-sm font-semibold text-white">{codeViewerVariant.title.replaceAll(' ', '')}.tsx</h2>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button size="sm" variant="outline" className="border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white" onClick={() => copyCode(codeViewerVariant)}>
                  {copiedId === codeViewerVariant.id ? (
                    <Check aria-hidden="true" className="mr-2 size-4 text-green-400" />
                  ) : (
                    <Copy aria-hidden="true" className="mr-2 size-4" />
                  )}
                  {copiedId === codeViewerVariant.id ? 'Copied' : 'Copy'}
                </Button>
                <button 
                  onClick={() => setCodeViewerVariant(null)}
                  className="rounded-lg p-2 text-ink-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>
            
            {/* Code Body - Fully isolated to prevent overlap */}
            <div className="min-h-0 flex-1 overflow-auto bg-[#0d1117] p-4 sm:p-6">
              <div
                className="code-viewer text-sm [&>pre]:!bg-transparent [&>pre]:!p-0"
                dangerouslySetInnerHTML={{ __html: codeViewerVariant.highlightedCode }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
