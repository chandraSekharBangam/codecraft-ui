import { codeToHtml } from 'shiki';
import { componentLibraryCategories } from '@/data/components-library';
import type { HighlightedLibraryCategory } from '@/types/site';

export async function getHighlightedLibraryCategories(): Promise<HighlightedLibraryCategory[]> {
  return Promise.all(
    componentLibraryCategories.map(async (category) => ({
      ...category,
      variants: await Promise.all(
        category.variants.map(async (variant) => ({
          ...variant,
          highlightedCode: await codeToHtml(variant.code, {
            lang: 'tsx',
            theme: 'github-dark',
          }),
        })),
      ),
    })),
  );
}
