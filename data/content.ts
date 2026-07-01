import {
  Award,
  BadgeCheck,
  Blocks,
  Braces,
  CheckCircle2,
  Code2,
  Compass,
  Gauge,
  Layers3,
  LayoutTemplate,
  Lightbulb,
  LineChart,
  MessageSquareText,
  MousePointerClick,
  Palette,
  Rocket,
  SearchCheck,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  Target,
  WandSparkles,
} from 'lucide-react';
import type {
  ComponentExample,
  FaqItem,
  IconContent,
  Metric,
  PricingPlan,
  ProcessStep,
  Testimonial,
} from '@/types/site';

export const metrics: Metric[] = [
  {
    value: '40+',
    label: 'Reusable sections',
    detail: 'Designed as composable building blocks for marketing and product pages.',
  },
  {
    value: '100%',
    label: 'Responsive system',
    detail: 'Built around mobile, tablet, laptop, and large-screen behavior.',
  },
  {
    value: '4',
    label: 'Core technologies',
    detail: 'Next.js, React, TypeScript, and Tailwind CSS working as one stack.',
  },
  {
    value: '0',
    label: 'Figma lock-in',
    detail: 'Production code lives directly in the application with no demo folder dependency.',
  },
];

export const services: IconContent[] = [
  {
    title: 'Interface systems',
    description:
      'Reusable components, page sections, tokens, and patterns that keep product teams moving with one consistent visual language.',
    icon: Layers3,
  },
  {
    title: 'Next.js migration',
    description:
      'React Router and Vite projects rebuilt with the App Router, metadata routes, server components, and production deployment hygiene.',
    icon: Compass,
  },
  {
    title: 'Conversion pages',
    description:
      'Premium landing pages, pricing flows, CTAs, FAQ pages, and contact experiences written with clear messaging and accessible markup.',
    icon: MousePointerClick,
  },
  {
    title: 'Performance hardening',
    description:
      'Lean client bundles, optimized assets, semantic HTML, SEO metadata, and careful interaction states before launch.',
    icon: Gauge,
  },
];

export const highlights: IconContent[] = [
  {
    title: 'Brand-led UI',
    description:
      'The palette is derived from the CodeCraft UI logo and applied consistently across cards, buttons, states, and page sections.',
    icon: Palette,
  },
  {
    title: 'Typed content',
    description:
      'Shared page copy, FAQs, pricing data, and component examples are modeled once and reused safely across the app.',
    icon: Braces,
  },
  {
    title: 'Deployment-ready SEO',
    description:
      'Metadata, Open Graph, Twitter Cards, canonical URLs, sitemap, robots, manifest, and JSON-LD are included from the start.',
    icon: SearchCheck,
  },
  {
    title: 'Accessible controls',
    description:
      'Buttons, inputs, accordions, navigation, and focus states are designed for keyboard and screen-reader use.',
    icon: ShieldCheck,
  },
];

export const processSteps: ProcessStep[] = [
  {
    eyebrow: '01',
    title: 'Audit and structure',
    description:
      'Map the existing pages, assets, and routes, then move reusable copy and configuration into typed data files.',
  },
  {
    eyebrow: '02',
    title: 'Redesign with a system',
    description:
      'Create one container, one button language, shared cards, section headings, and consistent brand-driven spacing.',
  },
  {
    eyebrow: '03',
    title: 'Migrate to App Router',
    description:
      'Replace client-side routing with Next.js layouts, route metadata, loading states, error boundaries, and not-found handling.',
  },
  {
    eyebrow: '04',
    title: 'Validate for release',
    description:
      'Run TypeScript, linting, production build, responsive checks, and link review before the site is considered complete.',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'CodeCraft UI turns scattered interface ideas into a system that feels calm, premium, and ready for a real product team.',
    name: 'Product Lead',
    role: 'SaaS launch team',
  },
  {
    quote:
      'The component structure is readable, the copy is sharper, and the Next.js setup has the SEO details we usually add much later.',
    name: 'Frontend Engineer',
    role: 'Growth platform',
  },
  {
    quote:
      'The design feels polished without becoming heavy. Every section has a clear reason to exist.',
    name: 'Founder',
    role: 'Early-stage product studio',
  },
];

export const faqItems: FaqItem[] = [
  {
    question: 'What is CodeCraft UI?',
    answer:
      'CodeCraft UI is a production-focused frontend system for premium React and Next.js interfaces, including reusable sections, polished marketing pages, and deployment-ready SEO foundations.',
  },
  {
    question: 'Does the project still include the original component ideas?',
    answer:
      'Yes. The original hero-section catalogue is migrated into a polished component library page, while placeholder pages and Figma references are removed.',
  },
  {
    question: 'Why use Next.js App Router instead of React Router?',
    answer:
      'The App Router gives the project first-class layouts, server components, metadata routes, streaming-friendly loading states, and stronger SEO primitives.',
  },
  {
    question: 'Can the design system grow beyond the current pages?',
    answer:
      'Yes. Content is stored in typed data files, page sections are split into focused components, and shared UI primitives keep future pages consistent.',
  },
  {
    question: 'How should contact requests be sent?',
    answer:
      'Use the contact page or email chandrasekharbangam@gmail.com. The current form prepares a clear email request without relying on an unconfigured backend.',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: 'Project-based',
    description: 'For a focused landing page or a small component refresh.',
    features: [
      'One production page',
      'Responsive layout and core SEO',
      'Reusable UI primitives',
      'Brand color alignment',
    ],
  },
  {
    name: 'Growth',
    price: 'Best fit',
    description: 'For multi-page SaaS, portfolio, or service websites that need a complete system.',
    featured: true,
    features: [
      'Five to seven production pages',
      'Design system components',
      'Metadata, sitemap, robots, and JSON-LD',
      'Accessibility and performance pass',
      'Launch support checklist',
    ],
  },
  {
    name: 'Scale',
    price: 'Custom',
    description: 'For product teams migrating an existing frontend or standardizing a larger UI surface.',
    features: [
      'App Router migration',
      'Reusable section architecture',
      'Content and component audit',
      'Advanced QA and technical handover',
    ],
  },
];

export const componentExamples: ComponentExample[] = [
  {
    id: 'saas-hero',
    title: 'SaaS Launch Hero',
    description:
      'A crisp product-led hero with trust indicators, a dashboard mockup, and two clear calls to action.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    code: `import Link from "next/link";

export function SaasHero() {
  return (
    <section className="bg-ink-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold text-brand-cyan">Production UI system</p>
          <h1 className="mt-4 text-5xl font-semibold">Ship premium interfaces faster.</h1>
          <p className="mt-5 max-w-xl text-ink-300">
            Reusable sections, typed content, and launch-ready SEO for modern SaaS teams.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/contact">Start a project</Link>
            <Link href="/hero">View components</Link>
          </div>
        </div>
      </div>
    </section>
  );
}`,
  },
  {
    id: 'education-hero',
    title: 'Education Program Hero',
    description:
      'The original education concept rebuilt with stronger hierarchy, cleaner stats, and accessible markup.',
    tech: ['React', 'Tailwind CSS', 'Lucide'],
    code: `const stats = [
  { value: "10K+", label: "Learners" },
  { value: "100+", label: "Workshops" },
  { value: "25+", label: "College partners" },
];

export function EducationHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold text-brand-blue">Technical learning programs</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold text-ink-950">
          Empowering college students through practical technical learning.
        </h1>
        <p className="mt-5 max-w-2xl text-ink-600">
          Hands-on workshops, mentor-led programs, and placement-focused learning paths.
        </p>
      </div>
    </section>
  );
}`,
  },
  {
    id: 'contact-hero',
    title: 'Consultation Hero',
    description:
      'A dark conversion section with a concise contact path and structured proof points.',
    tech: ['Next.js', 'Server Components', 'Tailwind CSS'],
    code: `export function ConsultationHero() {
  return (
    <section className="bg-ink-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-brand-amber">Frontend strategy call</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold">
          Turn a scattered UI into a production-ready web experience.
        </h1>
        <a className="mt-8 inline-flex" href="mailto:chandrasekharbangam@gmail.com">
          Book the conversation
        </a>
      </div>
    </section>
  );
}`,
  },
];

export const ctaPatterns: IconContent[] = [
  {
    title: 'Lead capture',
    description:
      'Focused CTA sections that help visitors request a build, book a consultation, or start a frontend audit.',
    icon: MessageSquareText,
  },
  {
    title: 'Product activation',
    description:
      'Launch sections that move users from proof to action with visible outcomes and practical next steps.',
    icon: Rocket,
  },
  {
    title: 'Trust reinforcement',
    description:
      'Compact proof bars, guarantee copy, and delivery cues that reduce hesitation before the final click.',
    icon: BadgeCheck,
  },
];

export const pageBenefits: IconContent[] = [
  {
    title: 'No placeholder pages',
    description:
      'Every route has a complete purpose, polished copy, and a clear relationship to the product story.',
    icon: CheckCircle2,
  },
  {
    title: 'Reusable by default',
    description:
      'Sections are split into small files so future pages can be assembled without copying giant components.',
    icon: Blocks,
  },
  {
    title: 'Premium but practical',
    description:
      'Visual polish supports scanning, comparison, and action instead of becoming decorative noise.',
    icon: Sparkles,
  },
  {
    title: 'Launch-minded',
    description:
      'SEO, accessibility, metadata, and responsive behavior are treated as product requirements.',
    icon: LayoutTemplate,
  },
];

export const technologyStack = [
  'Next.js 16',
  'React 19',
  'TypeScript 6',
  'Tailwind CSS 4',
  'App Router',
  'Server Components',
  'JSON-LD',
  'Metadata Routes',
];

export const values: IconContent[] = [
  {
    title: 'Clarity before decoration',
    description:
      'Every visual choice should make the message easier to understand, compare, or act on.',
    icon: SearchCheck,
  },
  {
    title: 'Reusable craft',
    description:
      'Components should be pleasant to edit six months after the first launch.',
    icon: Code2,
  },
  {
    title: 'Responsible polish',
    description:
      'Animations, gradients, and interactions stay subtle enough to support performance and accessibility.',
    icon: WandSparkles,
  },
  {
    title: 'Trust in the details',
    description:
      'Good SEO, alt text, focus states, and empty states are treated as part of the design.',
    icon: ShieldCheck,
  },
];

export const timeline: ProcessStep[] = [
  {
    eyebrow: 'Origin',
    title: 'Component inspiration',
    description:
      'The project began as a UI component catalogue with hero-section ideas and copy-paste examples.',
  },
  {
    eyebrow: 'Migration',
    title: 'Production architecture',
    description:
      'The Vite shell is replaced with Next.js App Router, reusable data, metadata routes, and route-level pages.',
  },
  {
    eyebrow: 'Design',
    title: 'Brand system',
    description:
      'The CodeCraft UI logo drives a tighter color system built around black, cyan, amber, coral, blue, and violet.',
  },
  {
    eyebrow: 'Launch',
    title: 'Real-world readiness',
    description:
      'Build checks, SEO assets, accessible controls, and responsive QA support production deployment.',
  },
];

export const industries: IconContent[] = [
  {
    title: 'Technology & SaaS',
    description: 'Providing scalable component architectures that help product teams ship faster and maintain consistency.',
    icon: Code2,
  },
  {
    title: 'Finance & Fintech',
    description: 'Building secure, accessible interfaces that convey trust and clarity for complex financial data.',
    icon: LineChart,
  },
  {
    title: 'E-commerce & Retail',
    description: 'Creating high-performance, conversion-optimized experiences that handle scale without breaking.',
    icon: ShoppingCart,
  },
  {
    title: 'Healthcare & Wellness',
    description: 'Developing compliant, user-friendly portals with strict attention to accessibility and semantic structure.',
    icon: Stethoscope,
  },
];

export const trustIndicators = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Vercel',
];

export const certifications: IconContent[] = [
  {
    title: 'WCAG 2.1 AA Focus',
    description: 'Committed to building accessible experiences with proper semantic HTML, ARIA labels, and keyboard navigation.',
    icon: ShieldCheck,
  },
  {
    title: 'Core Web Vitals Optimized',
    description: 'Engineered for top-tier performance, focusing on strict metric scores for maximum user retention.',
    icon: Award,
  },
  {
    title: 'SEO Production Ready',
    description: 'Implemented with strict technical SEO standards, JSON-LD schema, and complete metadata routes.',
    icon: CheckCircle2,
  },
];

export const companyVision = {
  title: 'Vision',
  description: 'To become the foundational UI architecture standard that empowers teams to focus on their unique product features, rather than rebuilding basic interface systems and deployment plumbing.',
  icon: Lightbulb,
};

export const companyMission = {
  title: 'Mission',
  description: 'We bridge the gap between design vision and production reality by delivering premium, accessible, and scalable frontend architectures built on modern web standards.',
  icon: Target,
};
