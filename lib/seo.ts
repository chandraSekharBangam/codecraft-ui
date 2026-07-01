import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { absoluteUrl } from '@/lib/utils';

interface MetadataInput {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  imagePath = '/opengraph-image',
  noIndex = false,
}: MetadataInput): Metadata {
  const canonical = absoluteUrl(siteConfig.url, path);
  const image = absoluteUrl(siteConfig.url, imagePath);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}
