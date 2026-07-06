import { Github, Linkedin, Mail } from 'lucide-react';
import { AnimatedPattern } from '@/components/ui/animated-pattern';
import { ButtonLink } from '@/components/ui/button';
import { siteConfig } from '@/data/site';

const contactLinks = [
  {
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/chandraSekharBangam',
    href: siteConfig.github,
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'Chandra Sekhar B',
    href: siteConfig.linkedin,
    icon: Linkedin,
  },
];

export function ContactDetails() {
  return (
    <aside className="relative overflow-hidden rounded-lg border border-white/10 bg-ink-950 p-6 text-white shadow-[0_24px_70px_rgb(5_7_13_/_22%)]">
      <AnimatedPattern />
      <div className="relative z-10">
      <p className="text-sm font-semibold text-brand-cyan">Contact information</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight">Share the current site and the outcome you want.</h2>
      <p className="mt-4 text-sm leading-7 text-ink-300">
        Include the current repository or website, project type, industry, required features, preferred stack, timeline, and any launch constraints that matter. Scope and implementation details are discussed after the requirements are reviewed.
      </p>
      <div className="mt-6 space-y-3">
        {contactLinks.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.href}
              className="focus-ring flex gap-3 rounded-lg border border-white/12 bg-white/5 p-3 transition hover:border-brand-cyan hover:bg-white/10"
              href={link.href}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              target={link.href.startsWith('http') ? '_blank' : undefined}
            >
              <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-cyan" />
              <span>
                <span className="block text-sm font-semibold">{link.label}</span>
                <span className="block break-words text-sm text-ink-300">{link.value}</span>
              </span>
            </a>
          );
        })}
      </div>
      <ButtonLink className="mt-6 w-full" href={`mailto:${siteConfig.email}`} variant="secondary">
        Email requirements directly
      </ButtonLink>
      </div>
    </aside>
  );
}
