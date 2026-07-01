import { ArrowRight, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';
import type { ComponentExample } from '@/types/site';

interface HeroPreviewProps {
  example: ComponentExample;
}

export function HeroPreview({ example }: HeroPreviewProps) {
  if (example.id === 'education-hero') {
    return <EducationPreview />;
  }

  if (example.id === 'contact-hero') {
    return <ConsultationPreview />;
  }

  return <SaasPreview />;
}

function SaasPreview() {
  return (
    <div className="rounded-lg bg-ink-950 p-6 text-white">
      <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan">
        <Sparkles aria-hidden="true" className="size-4" />
        Production UI system
      </p>
      <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <h3 className="text-3xl font-semibold leading-tight">Ship premium interfaces faster.</h3>
          <p className="mt-4 text-sm leading-7 text-ink-300">
            Reusable sections, typed content, and launch-ready SEO for modern SaaS teams.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/contact" size="sm" variant="secondary">
              Start a project
            </ButtonLink>
            <ButtonLink className="border-white/20 bg-transparent text-white hover:bg-white/10" href="/pricing" size="sm" variant="outline">
              View pricing
            </ButtonLink>
          </div>
        </div>
        <div className="rounded-lg border border-white/12 bg-white/8 p-4">
          <div className="h-28 rounded-md bg-white" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            <span className="h-12 rounded-md bg-brand-cyan" />
            <span className="h-12 rounded-md bg-brand-amber" />
            <span className="h-12 rounded-md bg-brand-coral" />
          </div>
        </div>
      </div>
    </div>
  );
}

function EducationPreview() {
  const stats = [
    { value: '10K+', label: 'Learners' },
    { value: '100+', label: 'Workshops' },
    { value: '25+', label: 'Colleges' },
  ];

  return (
    <div className="rounded-lg border border-line bg-white p-6">
      <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
        <GraduationCap aria-hidden="true" className="size-4" />
        Technical learning programs
      </p>
      <h3 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-ink-950">
        Empowering college students through practical technical learning.
      </h3>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-600">
        Hands-on workshops, mentor-led programs, and placement-focused learning paths for modern careers.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-line bg-ink-100 p-4">
            <p className="text-2xl font-semibold text-ink-950">{stat.value}</p>
            <p className="mt-1 text-sm text-ink-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConsultationPreview() {
  return (
    <div className="rounded-lg bg-ink-950 p-6 text-white">
      <p className="text-sm font-semibold text-brand-amber">Frontend strategy call</p>
      <h3 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight">
        Turn a scattered UI into a production-ready web experience.
      </h3>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-300">
        Align architecture, content, SEO, and visuals before the build becomes expensive to change.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {['Brand system', 'App Router', 'Launch QA'].map((item) => (
          <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/12 px-3 py-1 text-xs font-semibold text-ink-300">
            <ShieldCheck aria-hidden="true" className="size-3.5 text-brand-cyan" />
            {item}
          </span>
        ))}
      </div>
      <ButtonLink className="mt-7" href="/contact" variant="secondary">
        Book the conversation
        <ArrowRight aria-hidden="true" className="size-4" />
      </ButtonLink>
    </div>
  );
}
