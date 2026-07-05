import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterGroup {
  title: string;
  links: NavItem[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
  detail: string;
}

export interface IconContent {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  eyebrow: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export interface ComponentExample {
  id: string;
  title: string;
  description: string;
  tech: string[];
  code: string;
}

export type ComponentPreviewId =
  | 'header-studio'
  | 'header-product'
  | 'hero-saas'
  | 'hero-agency'
  | 'about-learning-program'
  | 'about-image-program'
  | 'about-skills-program'
  | 'features-grid'
  | 'features-split'
  | 'scope-options'
  | 'scope-discussion'
  | 'cta-consultation'
  | 'cta-launch'
  | 'cta-registration-card'
  | 'cta-career-application'
  | 'faq-simple'
  | 'faq-learning-program'
  | 'faq-mentor-program'
  | 'contact-brief'
  | 'timeline-product-evolution';

export interface LibraryVariant {
  id: string;
  title: string;
  description: string;
  preview: ComponentPreviewId;
  code: string;
  stack: string[];
}

export interface LibraryCategory {
  id: string;
  title: string;
  description: string;
  variants: LibraryVariant[];
}

export interface HighlightedLibraryVariant extends LibraryVariant {
  highlightedCode: string;
}

export interface HighlightedLibraryCategory extends Omit<LibraryCategory, 'variants'> {
  variants: HighlightedLibraryVariant[];
}
