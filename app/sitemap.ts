import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';

const routes = ['/', '/components', '/hero', '/about', '/pricing', '/cta', '/faqs', '/contact'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
