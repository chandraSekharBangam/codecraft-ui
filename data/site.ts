import type { FooterGroup, NavItem, SocialLink } from '@/types/site';

const fallbackUrl = 'https://codecraft-ui.vercel.app';

export const siteConfig = {
  name: 'CodeCraft UI',
  shortName: 'CodeCraft UI',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl,
  description:
    'CodeCraft UI designs and ships premium React, Next.js, TypeScript, and Tailwind CSS interface systems for teams that want production-ready frontends.',
  email: 'chandrasekharbangam@gmail.com',
  github: 'https://github.com/chandraSekharBangam',
  linkedin: 'https://www.linkedin.com/in/chandra-sekhar-b-62a0a7316',
  creator: 'Chandra Sekhar Bangam',
  keywords: [
    'CodeCraft UI',
    'Next.js UI components',
    'React component library',
    'Tailwind CSS templates',
    'TypeScript frontend',
    'SaaS website design',
    'frontend development',
  ],
} as const;

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Components', href: '/hero' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'CTA', href: '/cta' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
];

export const footerGroups: FooterGroup[] = [
  {
    title: 'Explore',
    links: [
      { label: 'Components', href: '/hero' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Conversion CTA', href: '/cta' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Email', href: `mailto:${siteConfig.email}` },
      { label: 'LinkedIn', href: siteConfig.linkedin },
    ],
  },
  {
    title: 'Stack',
    links: [
      { label: 'Next.js', href: 'https://nextjs.org' },
      { label: 'React', href: 'https://react.dev' },
      { label: 'Tailwind CSS', href: 'https://tailwindcss.com' },
      { label: 'TypeScript', href: 'https://www.typescriptlang.org' },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: siteConfig.github },
  { label: 'LinkedIn', href: siteConfig.linkedin },
  { label: 'Email', href: `mailto:${siteConfig.email}` },
];
