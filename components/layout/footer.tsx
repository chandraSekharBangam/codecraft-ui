import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { footerGroups, siteConfig, socialLinks } from '@/data/site';

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink-950 text-white">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Link aria-label={`${siteConfig.name} home`} className="focus-ring inline-flex rounded-md" href="/">
              <Image alt="CodeCraft UI" className="h-auto w-[190px]" height={80} src="/CodeCraftUILogo.png" width={405} />
            </Link>
            <p className="mt-5 max-w-xl text-sm leading-7 text-ink-300">{siteConfig.description}</p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.label as keyof typeof socialIcons];

                return (
                  <a
                    key={link.href}
                    aria-label={link.label}
                    className="focus-ring flex size-10 items-center justify-center rounded-lg border border-white/12 text-ink-300 transition hover:border-brand-cyan hover:text-white"
                    href={link.href}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                  >
                    <Icon aria-hidden="true" className="size-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold text-white">{group.title}</h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => {
                    const external = link.href.startsWith('http') || link.href.startsWith('mailto:');

                    return (
                      <li key={link.href}>
                        {external ? (
                          <a
                            className="focus-ring rounded text-sm text-ink-300 transition hover:text-white"
                            href={link.href}
                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link className="focus-ring rounded text-sm text-ink-300 transition hover:text-white" href={link.href}>
                            {link.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-ink-300 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {year} {siteConfig.name}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
