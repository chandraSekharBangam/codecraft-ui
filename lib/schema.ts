import { componentExamples, faqItems, pricingPlans, services } from '@/data/content';
import { componentLibraryCategories } from '@/data/components-library';
import { siteConfig } from '@/data/site';
import { absoluteUrl } from '@/lib/utils';

export type JsonLdGraph = Record<string, unknown>;

export function organizationSchema(): JsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.url, '/CodeCraftUILogo.png'),
    email: siteConfig.email,
    founder: {
      '@type': 'Person',
      name: siteConfig.creator,
      sameAs: [siteConfig.github, siteConfig.linkedin],
    },
    sameAs: [siteConfig.github, siteConfig.linkedin],
  };
}

export function websiteSchema(): JsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  };
}

export function serviceSchema(): JsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Next.js UI design and migration',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: 'Worldwide',
    serviceType: services.map((service) => service.title),
    description: siteConfig.description,
  };
}

export function collectionSchema(): JsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'CodeCraft UI component examples',
    url: absoluteUrl(siteConfig.url, '/hero'),
    hasPart: componentExamples.map((example) => ({
      '@type': 'CreativeWork',
      name: example.title,
      description: example.description,
      programmingLanguage: example.tech,
    })),
  };
}

export function componentLibrarySchema(): JsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Free Next.js UI component library',
    description:
      'Reusable Next.js, TypeScript, and Tailwind CSS UI sections with live previews, copy-ready code, and fullscreen preview support.',
    url: absoluteUrl(siteConfig.url, '/components'),
    hasPart: componentLibraryCategories.map((category) => ({
      '@type': 'Collection',
      name: category.title,
      description: category.description,
      hasPart: category.variants.map((variant) => ({
        '@type': 'SoftwareSourceCode',
        name: variant.title,
        description: variant.description,
        programmingLanguage: variant.stack,
        codeSampleType: 'full',
      })),
    })),
  };
}

export function faqSchema(): JsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function offerCatalogSchema(): JsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'CodeCraft UI project options',
    url: absoluteUrl(siteConfig.url, '/pricing'),
    itemListElement: pricingPlans.map((plan) => ({
      '@type': 'Offer',
      name: plan.name,
      description: plan.description,
      url: absoluteUrl(siteConfig.url, '/contact'),
      category: plan.price,
    })),
  };
}

export function contactSchema(): JsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact CodeCraft UI',
    url: absoluteUrl(siteConfig.url, '/contact'),
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      email: siteConfig.email,
      sameAs: [siteConfig.github, siteConfig.linkedin],
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>): JsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(siteConfig.url, item.path),
    })),
  };
}
