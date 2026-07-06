import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { LoaderCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border-ink-950 bg-ink-950 text-white shadow-[0_16px_36px_rgb(5_7_13_/_18%)] hover:-translate-y-0.5 hover:bg-brand-blue hover:border-brand-blue active:translate-y-0 active:bg-ink-900',
  secondary:
    'border-transparent bg-brand-cyan text-ink-950 shadow-[0_16px_34px_rgb(32_200_243_/_18%)] hover:-translate-y-0.5 hover:bg-brand-blue hover:text-white hover:shadow-[0_20px_42px_rgb(37_103_230_/_28%)] active:translate-y-0',
  outline:
    'border-line bg-white/90 text-ink-900 shadow-[0_8px_24px_rgb(5_7_13_/_6%)] hover:-translate-y-0.5 hover:border-brand-blue hover:bg-ink-50 active:translate-y-0 active:bg-ink-100',
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
      <span className="inline-flex items-center justify-center gap-2">{children}</span>
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
