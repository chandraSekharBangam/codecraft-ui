import type { LibraryCategory } from '@/types/site';

export const componentLibraryCategories = [
  {
    id: 'headers',
    title: 'Headers',
    description: 'Navigation bars for service sites, SaaS products, and launch pages.',
    variants: [
      {
        id: 'studio-header',
        title: 'Studio Header',
        description: 'A compact service-site header with a clear project discussion CTA.',
        preview: 'header-studio',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        code: `import Link from "next/link";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function StudioHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="text-lg font-semibold text-slate-950" href="/">
          StudioLayer
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} className="text-sm font-medium text-slate-600 hover:text-slate-950" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white hover:bg-slate-800"
          href="#contact"
        >
          Start a project
        </Link>
      </div>
    </header>
  );
}`,
      },
      {
        id: 'product-header',
        title: 'Product Header',
        description: 'A dark product header with account actions and strong scan clarity.',
        preview: 'header-product',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        code: `import Link from "next/link";

export function ProductHeader() {
  return (
    <header className="bg-slate-950 text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="text-lg font-semibold" href="/">
          PulseDesk
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Product navigation">
          {["Dashboard", "Reports", "Customers", "Automations"].map((item) => (
            <Link key={item} className="text-sm font-medium text-slate-300 hover:text-white" href="#">
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link className="hidden text-sm font-semibold text-slate-300 hover:text-white sm:inline" href="#">
            Sign in
          </Link>
          <Link className="rounded-lg bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-300" href="#">
            Try demo
          </Link>
        </div>
      </div>
    </header>
  );
}`,
      },
    ],
  },
  {
    id: 'hero-sections',
    title: 'Hero Sections',
    description: 'First-screen sections for SaaS launches, agency sites, and conversion pages.',
    variants: [
      {
        id: 'saas-product-hero',
        title: 'SaaS Product Hero',
        description: 'A product-led hero with proof points, dual CTAs, and a dashboard surface.',
        preview: 'hero-saas',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        code: `import Link from "next/link";

const proofPoints = ["14 day launch plan", "Reusable sections", "SEO included"];

export function SaasProductHero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold text-cyan-300">Launch-ready SaaS UI</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight">
            Turn product complexity into a calm interface.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            A complete Next.js landing page system with reusable sections, responsive behavior, and practical conversion copy.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950" href="#contact">
              Discuss the build
            </Link>
            <Link className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white" href="#features">
              View features
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {proofPoints.map((point) => (
              <span key={point} className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-slate-300">
                {point}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="rounded-lg bg-white p-4 text-slate-950">
            <div className="h-40 rounded-lg bg-slate-100" />
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="h-20 rounded-lg bg-cyan-200" />
              <div className="h-20 rounded-lg bg-amber-200" />
              <div className="h-20 rounded-lg bg-violet-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`,
      },
      {
        id: 'agency-service-hero',
        title: 'Agency Service Hero',
        description: 'A bright service hero for studios, freelancers, and custom website offers.',
        preview: 'hero-agency',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        code: `import Link from "next/link";

const services = ["SaaS websites", "Business sites", "Custom dashboards"];

export function AgencyServiceHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-blue-600">Custom website development</p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight text-slate-950">
            Websites designed around your business goal, not a template.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Share your pages, features, timeline, and launch target. The scope is shaped after the requirements are reviewed.
          </p>
          <Link className="mt-8 inline-flex rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white" href="#contact">
            Send project requirements
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="rounded-lg border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-950">{service}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Responsive, SEO-aware, and built for production handoff.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
      },
    ],
  },
  {
    id: 'about',
    title: 'About Sections',
    description: 'Reference-inspired about sections for programs, services, and capability storytelling.',
    variants: [
      {
        id: 'learning-program-about',
        title: 'Learning Program About',
        description: 'A two-column program overview with stats and a static feature highlight.',
        preview: 'about-learning-program',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Lucide'],
        code: `import { Award, BookOpen, Briefcase, Clock, Globe, Target, TrendingUp, Users } from "lucide-react";

const stats = [
  { icon: Award, value: "500+", label: "Graduates" },
  { icon: Briefcase, value: "95%", label: "Placement rate" },
  { icon: Clock, value: "12 weeks", label: "Duration" },
  { icon: Globe, value: "50+", label: "Partners" },
];

const features = [
  { icon: BookOpen, title: "Industry-ready curriculum", description: "Learn current tools and methods from practicing mentors." },
  { icon: Users, title: "Mentor-led sessions", description: "Get structured guidance from experienced professionals." },
  { icon: Target, title: "Project-based learning", description: "Build work that mirrors real delivery requirements." },
  { icon: TrendingUp, title: "Career advancement", description: "Strengthen the portfolio and confidence needed for growth." },
];

export function LearningProgramAbout() {
  const FeatureIcon = features[0].icon;

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="inline-flex rounded-lg bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
            Career Learning Program
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-slate-950">
            Accelerate your career through hands-on learning.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Bridge the gap between academic knowledge and industry delivery with practical projects,
            guided sessions, and a clear professional pathway.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-lg border border-slate-200 bg-white p-4 text-center">
                  <Icon className="mx-auto h-5 w-5 text-blue-600" />
                  <p className="mt-3 text-2xl font-semibold text-slate-950">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <div className="rounded-lg bg-slate-950 p-6 text-white">
            <FeatureIcon className="h-8 w-8 text-cyan-300" />
            <h3 className="mt-5 text-2xl font-semibold">{features[0].title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{features[0].description}</p>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-lg border border-slate-200 p-4">
                  <Icon className="h-5 w-5 text-blue-600" />
                  <h4 className="mt-3 text-sm font-semibold text-slate-950">{feature.title}</h4>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}`,
      },
      {
        id: 'image-program-about',
        title: 'Image Program About',
        description: 'A visual about block with an online Unsplash image, glass detail card, and feature list.',
        preview: 'about-image-program',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Lucide'],
        code: `import Image from "next/image";
import { BookOpen, CheckCircle2, CalendarDays, Sparkles, Users } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Practical curriculum", desc: "Short modules focused on job-ready skills." },
  { icon: Users, title: "Mentor sessions", desc: "Live guidance and code reviews with industry mentors." },
  { icon: CalendarDays, title: "Project-led", desc: "Build portfolio work by program end." },
  { icon: Sparkles, title: "Career support", desc: "Resume and interview support for the next step." },
];

export function ImageProgramAbout() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="relative overflow-hidden rounded-lg border border-slate-200">
          <Image
            alt="Learners collaborating"
            className="h-full min-h-[340px] object-cover"
            height={900}
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop"
            width={1200}
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/40 bg-white/80 p-4 backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-slate-950">Career learning</h3>
                <p className="text-xs text-slate-600">Short, practical, mentor-led pathway.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-blue-600">About the program</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-slate-950">Career Learning Program</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            A focused pathway that turns classroom knowledge into job-ready ability through projects,
            mentorship, and practical career coaching.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-lg border border-slate-200 bg-white p-4">
                  <Icon className="h-5 w-5 text-blue-600" />
                  <h3 className="mt-3 text-sm font-semibold text-slate-950">{feature.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-slate-600">{feature.desc}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-8 inline-flex rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
            Enroll Now
          </div>
        </div>
      </div>
    </section>
  );
}`,
      },
      {
        id: 'skills-program-about',
        title: 'Skills Program About',
        description: 'A skills-first about section with colorful capability tiles and feature cards.',
        preview: 'about-skills-program',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Lucide'],
        code: `import { Award, BookOpen, Brain, Code2, Database, Palette, TrendingUp, Users } from "lucide-react";

const skills = [
  { icon: Code2, label: "Development", className: "from-blue-500 to-cyan-500" },
  { icon: Database, label: "Data Science", className: "from-violet-500 to-fuchsia-500" },
  { icon: Palette, label: "Design", className: "from-amber-500 to-orange-500" },
  { icon: Brain, label: "AI and ML", className: "from-emerald-500 to-teal-500" },
];

const features = [
  { icon: BookOpen, title: "Structured learning", description: "A curriculum designed by industry experts." },
  { icon: Award, title: "Certification", description: "Recognition for completing the learning path." },
  { icon: Users, title: "Expert mentorship", description: "Guidance from experienced professionals." },
  { icon: TrendingUp, title: "Career growth", description: "Skills that support the next career step." },
];

export function SkillsProgramAbout() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-blue-600">About the program</p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-950">Career Learning Program</h2>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.label} className={\`rounded-lg bg-gradient-to-br \${skill.className} p-6 text-white\`}>
                    <Icon className="h-8 w-8" />
                    <p className="mt-4 font-semibold">{skill.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p className="text-base leading-8 text-slate-600">
              A program for students and professionals who want practical learning paths across
              development, analytics, design, and intelligent products.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title} className="rounded-lg border border-slate-200 bg-white p-5">
                    <Icon className="h-5 w-5 text-blue-600" />
                    <h3 className="mt-3 font-semibold text-slate-950">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`,
      },
    ],
  },
  {
    id: 'features',
    title: 'Features',
    description: 'Feature sections for explaining product value, service benefits, and delivery quality.',
    variants: [
      {
        id: 'feature-card-grid',
        title: 'Feature Card Grid',
        description: 'A four-card grid with concise benefit copy and stable responsive behavior.',
        preview: 'features-grid',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        code: `const features = [
  { title: "Typed content", description: "Keep repeatable page copy in reusable data structures." },
  { title: "Responsive sections", description: "Design every block for mobile, tablet, and desktop." },
  { title: "SEO foundations", description: "Ship metadata, sitemap, and structured content from day one." },
  { title: "Clean handoff", description: "Use small components that are simple to maintain later." },
];

export function FeatureCardGrid() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-blue-600">Why it works</p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-950">A frontend system built for launch.</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-950">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}`,
      },
      {
        id: 'feature-split-panel',
        title: 'Feature Split Panel',
        description: 'A split feature block for explaining process, architecture, or service depth.',
        preview: 'features-split',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        code: `const checks = ["Design tokens", "Reusable sections", "Accessible forms", "Production build check"];

export function FeatureSplitPanel() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold text-cyan-600">Delivery system</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-slate-950">
            Every page is planned as part of one maintainable interface.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            The build connects layout, content, accessibility, and SEO so the website feels complete when it reaches production.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white">
          <p className="text-sm font-semibold text-cyan-300">Included by default</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {checks.map((check) => (
              <div key={check} className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm font-semibold">
                {check}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}`,
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Scope Sections',
    description: 'Pricing-adjacent sections that encourage discussion without publishing fixed prices.',
    variants: [
      {
        id: 'scope-options',
        title: 'Scope Options',
        description: 'Three engagement shapes that direct visitors to discuss requirements.',
        preview: 'scope-options',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        code: `import Link from "next/link";

const options = [
  { name: "Focused page", detail: "Landing page, portfolio refresh, or single conversion route." },
  { name: "Website system", detail: "Multi-page business, startup, SaaS, or agency website." },
  { name: "Custom application", detail: "Dashboards, ecommerce flows, and product UI architecture." },
];

export function ScopeOptions() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-blue-600">Project scope</p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-950">Start with the shape of the build.</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Final scope, timeline, and implementation details are discussed after reviewing your requirements.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {options.map((option) => (
            <article key={option.name} className="rounded-lg border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-950">{option.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{option.detail}</p>
              <Link className="mt-6 inline-flex text-sm font-semibold text-blue-600" href="#contact">
                Discuss this scope
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}`,
      },
      {
        id: 'scope-discussion',
        title: 'Scope Discussion',
        description: 'A compact section that explains why the next step is a requirements review.',
        preview: 'scope-discussion',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        code: `import Link from "next/link";

const inputs = ["Pages", "Features", "Timeline", "Content", "Integrations", "Launch date"];

export function ScopeDiscussion() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold text-amber-300">No fixed package guessing</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight">Share the requirements first, then scope the work properly.</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            The right estimate depends on page count, feature depth, content readiness, integrations, and launch expectations.
          </p>
          <Link className="mt-8 inline-flex rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950" href="#contact">
            Start the discussion
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {inputs.map((input) => (
            <div key={input} className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm font-semibold">
              {input}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
      },
    ],
  },
  {
    id: 'cta',
    title: 'CTA Sections',
    description: 'Conversion sections that move visitors into a project conversation.',
    variants: [
      {
        id: 'consultation-cta',
        title: 'Consultation CTA',
        description: 'A dark final CTA focused on reviewing project requirements.',
        preview: 'cta-consultation',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        code: `import Link from "next/link";

export function ConsultationCta() {
  return (
    <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-semibold text-amber-300">Ready to discuss the build?</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight">
            Send your project details and get a practical implementation path.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Share the project type, pages, features, timeline, and expected launch date. Scope is reviewed before any estimate.
          </p>
        </div>
        <Link className="rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950" href="#contact">
          Send requirements
        </Link>
      </div>
    </section>
  );
}`,
      },
      {
        id: 'launch-cta',
        title: 'Launch CTA',
        description: 'A bright CTA that works after feature, pricing, or FAQ content.',
        preview: 'cta-launch',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        code: `import Link from "next/link";

export function LaunchCta() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-blue-600">Launch support</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">Make the final website feel planned, fast, and complete.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Bring the brand, content, SEO, and responsive UI into one production-ready Next.js build.
            </p>
          </div>
          <Link className="rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white" href="#contact">
            Plan my launch
          </Link>
        </div>
      </div>
    </section>
  );
}`,
      },
      {
        id: 'registration-access-cta',
        title: 'Registration Access CTA',
        description: 'A reference-style registration card adapted as a static design section.',
        preview: 'cta-registration-card',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Lucide'],
        code: `import { CheckCircle2, ArrowRight } from "lucide-react";

const checks = [
  "Secure identity verification process",
  "Instant access upon approval",
  "Protected by encryption standards",
];

export function RegistrationAccessCta() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-blue-600">Call to action</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">No college email domain? Register here.</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Complete a secure verification process to unlock student platform access.
          </p>
        </div>
        <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-slate-950">Cannot use college email?</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Follow a straightforward review process to verify student status and unlock platform tools.
              </p>
              <div className="mt-6 space-y-3">
                {checks.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white">
                Start Registration
                <ArrowRight className="h-4 w-4" />
              </span>
              <p className="mt-4 text-sm text-slate-500">Registration typically takes 2-3 business days.</p>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-xs text-slate-400">Trusted by students at</p>
                <div className="mt-3 flex justify-center gap-3">
                  {["College A", "College B", "College C"].map((college) => (
                    <span key={college} className="rounded bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                      {college}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`,
      },
      {
        id: 'career-application-cta',
        title: 'Career Application CTA',
        description: 'A dark application CTA with two static visual actions and subtle proof text.',
        preview: 'cta-career-application',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Lucide'],
        code: `import { ChevronRight } from "lucide-react";

export function CareerApplicationCta() {
  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg bg-gradient-to-r from-slate-950 to-slate-800 p-8 text-white sm:p-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold leading-tight">
              Ready to build your career with hands-on experience?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              Join a practical pathway and transform from student to industry-ready professional.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <span className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950">
              Start Your Application
              <ChevronRight className="h-4 w-4" />
            </span>
            <span className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white">
              Download Brochure
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}`,
      },
    ],
  },
  {
    id: 'timelines',
    title: 'Timelines',
    description: 'Timeline layouts for product releases, service milestones, and roadmap storytelling.',
    variants: [
      {
        id: 'product-evolution-timeline',
        title: 'Product Evolution Timeline',
        description: 'A reference-inspired release timeline converted into a static design section.',
        preview: 'timeline-product-evolution',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Lucide'],
        code: `import { Battery, Lock, Map, Music, Shield, Smartphone, Sparkles, Users, Wifi, Zap } from "lucide-react";

const releases = [
  {
    title: "Move 1",
    date: "December 2023",
    accent: "border-violet-500 bg-violet-50",
    features: [
      { icon: Lock, title: "Secure authentication", description: "Biometric login for seamless security." },
      { icon: Zap, title: "Lightning fast", description: "Optimized performance with instant response." },
      { icon: Shield, title: "Privacy first", description: "Protection patterns for sensitive data." },
      { icon: Sparkles, title: "Smart notifications", description: "Relevant alerts shaped around user needs." },
    ],
  },
  {
    title: "Move 2",
    date: "March 2024",
    accent: "border-blue-500 bg-blue-50",
    stats: ["50% faster", "2x more efficient"],
    features: [
      { icon: Map, title: "Advanced navigation", description: "Route guidance with real-time context." },
      { icon: Music, title: "Immersive audio", description: "Clear sound with custom profiles." },
      { icon: Wifi, title: "Always connected", description: "Network switching for continuous access." },
      { icon: Battery, title: "Extended battery", description: "Power management for longer sessions." },
      { icon: Users, title: "Multi-user support", description: "Profiles for shared environments." },
    ],
  },
  {
    title: "Move 3",
    date: "October 2024",
    accent: "border-emerald-500 bg-emerald-50",
    stats: ["75% faster", "3x more features"],
    features: [
      { icon: Sparkles, title: "AI assistant", description: "Context-aware task support." },
      { icon: Smartphone, title: "Cross-device sync", description: "Continue work across devices." },
      { icon: Shield, title: "Advanced security", description: "Behavioral detection for risky access." },
    ],
  },
];

export function ProductEvolutionTimeline() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-blue-600">Evolution timeline</p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-950">Gets better with every update.</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Each release brings new features, better performance, and a clearer user experience.
          </p>
        </div>
        <div className="mt-12 grid gap-6">
          {releases.map((release) => (
            <article key={release.title} className="rounded-lg border border-slate-200 bg-white p-6">
              <div className={\`inline-flex rounded-lg border px-4 py-2 text-sm font-semibold text-slate-950 \${release.accent}\`}>
                {release.title} - {release.date}
              </div>
              {release.stats ? (
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {release.stats.map((stat) => (
                    <div key={stat} className="rounded-lg bg-slate-950 p-5 text-xl font-semibold text-white">
                      {stat}
                    </div>
                  ))}
                </div>
              ) : null}
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {release.features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                      <Icon className="h-5 w-5 text-blue-600" />
                      <h3 className="mt-3 font-semibold text-slate-950">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}`,
      },
    ],
  },
  {
    id: 'contact-faq',
    title: 'FAQ & Contact',
    description: 'Support sections for answering objections and collecting project requirements.',
    variants: [
      {
        id: 'simple-faq',
        title: 'Simple FAQ',
        description: 'A clean FAQ block with scannable answers and semantic structure.',
        preview: 'faq-simple',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        code: `const faqs = [
  {
    question: "Do I need a complete brief before contacting you?",
    answer: "No. Share what you know now: project type, pages, features, timeline, and launch goal.",
  },
  {
    question: "Do you show fixed pricing?",
    answer: "No. Scope and timeline are discussed after the requirements are reviewed.",
  },
  {
    question: "Can you build custom website sections?",
    answer: "Yes. SaaS, business, portfolio, ecommerce, dashboard, and landing page sections can be built around your requirements.",
  },
];

export function SimpleFaq() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-blue-600">Questions</p>
        <h2 className="mt-3 text-4xl font-semibold text-slate-950">Before you start a project.</h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-lg border border-slate-200">
          {faqs.map((faq) => (
            <article key={faq.question} className="p-5">
              <h3 className="text-base font-semibold text-slate-950">{faq.question}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}`,
      },
      {
        id: 'learning-program-faq',
        title: 'Learning Program FAQ',
        description: 'A premium FAQ layout adapted from the reference with open answer cards and no toggle logic.',
        preview: 'faq-learning-program',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Lucide'],
        code: `import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What prerequisites are needed?",
    answer: "Basic programming understanding is helpful but not mandatory. Curiosity and commitment matter most.",
  },
  {
    question: "How many hours per week will I need?",
    answer: "Plan for 15-20 hours per week across live sessions, self-paced learning, projects, and assignments.",
  },
  {
    question: "What specialisations are available?",
    answer: "Common tracks include front-end, back-end, full-stack, data analytics, and UI/UX design.",
  },
];

export function LearningProgramFaq() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-4 py-2">
            <HelpCircle className="h-4 w-4 text-blue-600" />
            <p className="text-sm font-semibold text-blue-600">FAQs</p>
          </div>
          <h2 className="mt-4 text-4xl font-semibold text-slate-950">Frequently Asked Questions</h2>
          <p className="mt-3 text-base leading-7 text-slate-600">Find answers to common questions about the program.</p>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <article key={faq.question} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-950">{faq.question}</h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <ChevronDown className={\`h-5 w-5 \${index === 0 ? "rotate-180" : ""}\`} />
                </span>
              </div>
              <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}`,
      },
      {
        id: 'mentor-program-faq',
        title: 'Mentor Program FAQ',
        description: 'A mentor-focused FAQ design using lucide icons instead of Font Awesome.',
        preview: 'faq-mentor-program',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Lucide'],
        code: `import { ChevronDown, Handshake, LineChart, Users } from "lucide-react";

const faqs = [
  {
    icon: Users,
    question: "What qualifications do I need to become a mentor?",
    answer: "Share your industry experience, expertise areas, and availability so the team can review fit.",
  },
  {
    icon: Handshake,
    question: "What support is available to mentors?",
    answer: "Mentors receive session resources, templates, community support, and quality guidance.",
  },
  {
    icon: LineChart,
    question: "How is mentorship quality measured?",
    answer: "Feedback is reviewed across content quality, communication, outcomes, and student experience.",
  },
];

export function MentorProgramFaq() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-slate-950">Frequently Asked Questions</h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Everything needed to understand the mentor experience.
          </p>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <article key={faq.question} className="rounded-lg border border-slate-200 bg-white p-5">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-slate-950">{faq.question}</h3>
                      <ChevronDown className={\`h-5 w-5 text-slate-500 \${index === 0 ? "rotate-180" : ""}\`} />
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}`,
      },
      {
        id: 'project-brief-form',
        title: 'Project Brief Form',
        description: 'A structured contact form for collecting the details needed to scope a custom website.',
        preview: 'contact-brief',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        code: `export function ProjectBriefForm() {
  return (
    <form className="mx-auto max-w-3xl rounded-lg border border-slate-200 bg-white p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-900">
          Name
          <input className="mt-2 h-11 w-full rounded-lg border border-slate-300 px-3 text-sm" name="name" required />
        </label>
        <label className="text-sm font-semibold text-slate-900">
          Email
          <input className="mt-2 h-11 w-full rounded-lg border border-slate-300 px-3 text-sm" name="email" required type="email" />
        </label>
        <label className="text-sm font-semibold text-slate-900">
          Project type
          <select className="mt-2 h-11 w-full rounded-lg border border-slate-300 px-3 text-sm" name="projectType" required>
            <option value="">Select one</option>
            <option>SaaS application</option>
            <option>Business website</option>
            <option>Landing page</option>
            <option>Custom web application</option>
          </select>
        </label>
        <label className="text-sm font-semibold text-slate-900">
          Timeline
          <input className="mt-2 h-11 w-full rounded-lg border border-slate-300 px-3 text-sm" name="timeline" placeholder="Example: 4-6 weeks" required />
        </label>
      </div>
      <label className="mt-4 block text-sm font-semibold text-slate-900">
        Required features
        <textarea className="mt-2 min-h-32 w-full rounded-lg border border-slate-300 px-3 py-3 text-sm" name="features" required />
      </label>
      <button className="mt-6 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white" type="submit">
        Send project brief
      </button>
    </form>
  );
}`,
      },
    ],
  },
  {
    id: 'buttons',
    title: 'Buttons',
    description: 'A collection of premium, animated, and business-ready buttons.',
    variants: [
      {
        id: 'button-animated',
        title: 'Premium Animated',
        description: 'A glowing, premium button with gradient overlays and smooth scaling.',
        preview: 'button-animated',
        stack: ['React', 'Tailwind CSS'],
        code: `import { Sparkles } from "lucide-react";

export function AnimatedButton() {
  return (
    <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-8 font-medium text-white bg-slate-950 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <span className="absolute inset-0 rounded-full border-2 border-white/20 transition-all duration-300 group-hover:border-white/40"></span>
      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20 blur-lg"></span>
      <span className="relative flex items-center gap-2">
        Get Started <Sparkles className="h-4 w-4" />
      </span>
    </button>
  );
}`
      },
      {
        id: 'button-ghost',
        title: 'Outline / Ghost',
        description: 'A clean outline button that fills on hover. Great for secondary actions.',
        preview: 'button-ghost',
        stack: ['React', 'Tailwind CSS'],
        code: `export function GhostButton() {
  return (
    <button className="relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition-all hover:bg-white hover:text-slate-950">
      <span className="relative">View Documentation</span>
    </button>
  );
}`
      },
      {
        id: 'button-business',
        title: 'Professional Business',
        description: 'A standard, accessible, high-contrast primary button.',
        preview: 'button-business',
        stack: ['React', 'Tailwind CSS'],
        code: `export function BusinessButton() {
  return (
    <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
      Submit Request
    </button>
  );
}`
      }
    ]
  },
  {
    id: 'forms',
    title: 'Forms & Auth',
    description: 'Login, registration, and contact forms built for high conversion.',
    variants: [
      {
        id: 'form-login',
        title: 'Clean Login Form',
        description: 'A modern, centered login card with smooth focus states.',
        preview: 'form-login',
        stack: ['React', 'Tailwind CSS'],
        code: `export function LoginForm() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900">Welcome back</h2>
        <p className="mt-2 text-sm text-slate-600">Enter your credentials to access your account.</p>
      </div>
      <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-900">Email Address</label>
          <input type="email" placeholder="you@company.com" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="block text-sm font-medium text-slate-900">Password</label>
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <input type="password" placeholder="••••••••" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
        </div>
        <button className="mt-6 w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-slate-800">
          Sign In
        </button>
      </form>
    </div>
  );
}`
      },
      {
        id: 'form-register',
        title: 'SaaS Registration Flow',
        description: 'A split-screen sign up flow often used by premium SaaS products.',
        preview: 'form-register',
        stack: ['React', 'Tailwind CSS'],
        code: `import { Zap } from "lucide-react";

export function RegisterForm() {
  return (
    <div className="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl md:grid-cols-2">
      <div className="bg-slate-900 p-8 text-white flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 font-bold"><Zap className="text-cyan-400" /> SystemUI</div>
          <h3 className="mt-12 text-2xl font-semibold leading-tight">Start building modern interfaces today.</h3>
          <p className="mt-4 text-slate-400">Join thousands of developers shipping faster.</p>
        </div>
        <div className="mt-12 text-sm text-slate-500">&copy; 2024 SystemUI Inc.</div>
      </div>
      <div className="p-8 lg:p-12">
        <h2 className="text-2xl font-bold text-slate-900">Create an account</h2>
        <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-900">First name</label>
              <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-900">Last name</label>
              <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-900">Email Address</label>
            <input type="email" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-900">Password</label>
            <input type="password" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
          </div>
          <button className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-blue-500">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}`
      },
      {
        id: 'form-contact',
        title: 'Business Contact',
        description: 'A robust contact form with a clean, structured layout.',
        preview: 'form-contact',
        stack: ['React', 'Tailwind CSS'],
        code: `export function ContactForm() {
  return (
    <div className="mx-auto max-w-xl py-10 px-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Get in touch</h2>
        <p className="mt-2 text-sm text-slate-600">Our friendly team would love to hear from you.</p>
        <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-900">First name</label>
              <input type="text" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-900">Last name</label>
              <input type="text" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-900">Email</label>
            <input type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-900">Message</label>
            <textarea rows={4} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"></textarea>
          </div>
          <button className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-800">Send message</button>
        </form>
      </div>
    </div>
  );
}`
      }
    ]
  },
  {
    id: 'cards',
    title: 'Cards',
    description: 'Pricing, profile, and interactive cards for displaying info beautifully.',
    variants: [
      {
        id: 'card-pricing',
        title: 'Highlighted Pricing',
        description: 'A pop-out pricing tier card indicating a recommended plan.',
        preview: 'card-pricing',
        stack: ['React', 'Tailwind CSS'],
        code: `import { CheckCircle2 } from "lucide-react";

export function PricingCard() {
  return (
    <div className="relative w-full max-w-sm rounded-2xl border-2 border-blue-600 bg-white p-8 shadow-2xl">
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">Most Popular</span>
      <h3 className="text-xl font-bold text-slate-900">Pro Plan</h3>
      <p className="mt-2 text-sm text-slate-500">Perfect for growing businesses and teams.</p>
      <div className="mt-6 flex items-baseline text-5xl font-extrabold text-slate-900">
        $49
        <span className="ml-1 text-xl font-medium text-slate-500">/mo</span>
      </div>
      <ul className="mt-8 space-y-4 text-sm text-slate-600">
        {['Up to 10 users', 'Unlimited projects', 'Advanced analytics', '24/7 priority support'].map(f => (
          <li key={f} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" /> {f}</li>
        ))}
      </ul>
      <button className="mt-8 w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500">Get Started</button>
    </div>
  );
}`
      },
      {
        id: 'card-profile',
        title: 'Team Profile',
        description: 'A clean profile card with overlapping avatars and social links.',
        preview: 'card-profile',
        stack: ['React', 'Tailwind CSS'],
        code: `import { Globe, Users } from "lucide-react";
import Image from "next/image";

export function ProfileCard() {
  return (
    <div className="group w-full max-w-xs overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl">
      <div className="h-32 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <div className="px-6 pb-6 text-center">
        <div className="relative mx-auto -mt-12 h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-slate-200">
          <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" width={96} height={96} alt="Profile" className="h-full w-full object-cover" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-slate-900">Alex Morgan</h3>
        <p className="text-sm font-medium text-slate-500">Senior Designer</p>
        <div className="mt-4 flex justify-center gap-3">
          <button className="rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600"><Globe className="h-4 w-4" /></button>
          <button className="rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600"><Users className="h-4 w-4" /></button>
        </div>
      </div>
    </div>
  );
}`
      },
      {
        id: 'card-hover',
        title: 'Image Hover Overlay',
        description: 'A beautiful image card that reveals content on hover.',
        preview: 'card-hover',
        stack: ['React', 'Tailwind CSS'],
        code: `import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function HoverCard() {
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl bg-slate-900 text-white shadow-2xl">
      <Image src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop" width={600} height={400} alt="Background" className="h-80 w-full object-cover opacity-50 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-20" />
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <div className="translate-y-8 transition-transform duration-300 group-hover:translate-y-0">
          <h3 className="text-2xl font-bold">Creative Workshop</h3>
          <p className="mt-2 text-sm text-slate-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">Join our immersive design sprint and master new techniques.</p>
          <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-400 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100">Explore <ChevronRight className="h-4 w-4" /></button>
        </div>
      </div>
    </div>
  );
}`
      }
    ]
  },
  {
    id: 'popups',
    title: 'Popups & Modals',
    description: 'Dialogs, promo banners, and modal overlays.',
    variants: [
      {
        id: 'popup-promo',
        title: 'Promotional Offer',
        description: 'A centered modal designed to convert with a special offer code.',
        preview: 'popup-promo',
        stack: ['React', 'Tailwind CSS'],
        code: `import { Sparkles } from "lucide-react";

export function PromoPopup() {
  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl animate-in zoom-in-95 duration-300">
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-8 text-center text-white">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
          <Sparkles className="h-8 w-8" />
        </div>
        <h2 className="mt-4 text-2xl font-bold">Special Offer!</h2>
        <p className="mt-2 text-indigo-100">Get 50% off your first 3 months on any Pro plan.</p>
      </div>
      <div className="p-6 text-center">
        <p className="text-sm font-medium text-slate-500">Use code <span className="rounded bg-slate-100 px-2 py-1 font-bold text-slate-900">PRO50</span> at checkout.</p>
        <div className="mt-6 flex gap-3">
          <button className="w-full rounded-lg bg-slate-100 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-200">No thanks</button>
          <button className="w-full rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500">Claim Offer</button>
        </div>
      </div>
    </div>
  );
}`
      },
      {
        id: 'popup-dialog',
        title: 'Action Confirmation',
        description: 'A standard destructive action confirmation modal.',
        preview: 'popup-dialog',
        stack: ['React', 'Tailwind CSS'],
        code: `export function DialogPopup() {
  return (
    <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl border border-slate-200">
      <h3 className="text-lg font-bold text-slate-900">Delete Project?</h3>
      <p className="mt-2 text-sm text-slate-600">Are you sure you want to delete this project? This action cannot be undone and all data will be permanently lost.</p>
      <div className="mt-6 flex justify-end gap-3">
        <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Cancel</button>
        <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500">Delete</button>
      </div>
    </div>
  );
}`
      }
    ]
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'Full-screen compositions built from multiple components.',
    variants: [
      {
        id: 'landing-saas',
        title: 'SaaS Launch Page',
        description: 'A hero and feature section combined into a seamless landing experience.',
        preview: 'landing-saas',
        stack: ['Next.js', 'Tailwind CSS'],
        code: `import { Zap } from "lucide-react";

export function SaasLanding() {
  return (
    <div className="w-full bg-slate-50 pb-20">
      <section className="bg-slate-950 px-5 py-24 text-center text-white">
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">The new standard for modern teams.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">Build, deploy, and scale your applications faster than ever with our comprehensive toolset.</p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200">Start building free</button>
          <button className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Read docs</button>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-5 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Everything you need</h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            { t: 'Global Edge', d: 'Deploy globally in milliseconds with our edge network.' },
            { t: 'Serverless Functions', d: 'Run code without thinking about servers or capacity.' },
            { t: 'Built-in Analytics', d: 'Understand your users with privacy-first insights.' }
          ].map(f => (
            <div key={f.t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center"><Zap className="h-5 w-5" /></div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}`
      }
    ]
  }
] satisfies LibraryCategory[];
