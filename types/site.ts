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
