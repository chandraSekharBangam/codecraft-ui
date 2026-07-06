'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { navItems, siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';

function isActivePath(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/92 text-white shadow-[0_14px_40px_rgb(5_7_13_/_20%)] backdrop-blur-xl">
      <div className="h-1 bg-[linear-gradient(90deg,var(--color-brand-blue),var(--color-brand-cyan))]" />
      <Container>
        <div className="flex h-[4.75rem] items-center justify-between gap-4">
          <Link aria-label={`${siteConfig.name} home`} className="focus-ring rounded-md" href="/" onClick={() => setMenuOpen(false)}>
            <Image
              priority
              alt="CodeCraft UI"
              className="h-auto w-[170px] drop-shadow-[0_10px_24px_rgb(0_0_0_/_35%)] sm:w-[202px]"
              height={80}
              src="/CodeCraftUILogo.png"
              width={405}
            />
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'focus-ring rounded-lg px-3 py-2 text-sm font-semibold text-ink-300 transition hover:bg-white/10 hover:text-white',
                    active && 'bg-white/10 text-white shadow-[inset_0_0_0_1px_rgb(255_255_255_/_8%)]',
                  )}
                  href={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              aria-label="GitHub"
              className="focus-ring rounded-lg p-2 text-ink-300 transition hover:bg-white/10 hover:text-white"
              href={siteConfig.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github aria-hidden="true" className="size-5" />
            </a>
            <a
              aria-label="LinkedIn"
              className="focus-ring rounded-lg p-2 text-ink-300 transition hover:bg-white/10 hover:text-white"
              href={siteConfig.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Linkedin aria-hidden="true" className="size-5" />
            </a>
            <ButtonLink className="border-white bg-white !text-ink-950 hover:border-brand-cyan hover:bg-brand-cyan" href="/contact" size="sm" variant="outline">
              Start a project
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="focus-ring rounded-lg border border-white/15 bg-white/5 p-2 text-white lg:hidden"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>

        <div
          className={cn(
            'grid transition-[grid-template-rows] duration-200 lg:hidden',
            menuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
          )}
          id="mobile-navigation"
        >
          <nav aria-label="Mobile navigation" className="overflow-hidden">
            <div className="space-y-1 border-t border-white/10 py-4">
              {navItems.map((item) => {
                const active = isActivePath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'focus-ring block rounded-lg px-3 py-3 text-sm font-semibold text-ink-300 transition hover:bg-white/10 hover:text-white',
                      active && 'bg-white/10 text-white',
                    )}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="grid grid-cols-3 gap-2 pt-3">
                <a
                  aria-label="GitHub"
                  className="focus-ring flex h-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-ink-300"
                  href={siteConfig.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github aria-hidden="true" className="size-5" />
                </a>
                <a
                  aria-label="LinkedIn"
                  className="focus-ring flex h-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-ink-300"
                  href={siteConfig.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Linkedin aria-hidden="true" className="size-5" />
                </a>
                <a
                  aria-label="Email"
                  className="focus-ring flex h-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-ink-300"
                  href={`mailto:${siteConfig.email}`}
                >
                  <Mail aria-hidden="true" className="size-5" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
