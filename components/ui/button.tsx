import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { LoaderCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border-transparent bg-ink-950 text-white hover:bg-ink-800 active:bg-ink-900 shadow-[0_10px_30px_rgb(5_7_13_/_18%)]',
  secondary:
    'border-transparent bg-brand-cyan text-ink-950 hover:bg-brand-amber active:bg-brand-coral',
  outline: 'border-line bg-white text-ink-900 hover:border-ink-950 hover:bg-ink-100 active:bg-ink-200',
  ghost: 'border-transparent bg-transparent text-ink-700 hover:bg-ink-100 active:bg-ink-200',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
};

function buttonClassName(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn(
    'focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border font-semibold transition duration-200 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-55',
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClassName(variant, size, className)}
      disabled={disabled || loading}
      type={type}
      {...props}
    >
      {loading ? <LoaderCircle aria-hidden="true" className="size-4 animate-spin" /> : null}
      <span>{children}</span>
    </button>
  );
}

interface ButtonLinkProps extends PropsWithChildren {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
  ariaLabel?: AnchorHTMLAttributes<HTMLAnchorElement>['aria-label'];
}

export function ButtonLink({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  external = false,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = buttonClassName(variant, size, className);

  if (external || href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <a
        aria-label={ariaLabel}
        className={classes}
        href={href}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        target={href.startsWith('http') ? '_blank' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link aria-label={ariaLabel} className={classes} href={href}>
      {children}
    </Link>
  );
}
