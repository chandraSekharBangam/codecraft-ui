'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { siteConfig } from '@/data/site';

function readField(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === 'string' ? value.trim() : '';
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = readField(formData, 'name');
    const email = readField(formData, 'email');
    const phone = readField(formData, 'phone');
    const company = readField(formData, 'company');
    const website = readField(formData, 'website');
    const projectType = readField(formData, 'projectType');
    const industry = readField(formData, 'industry');
    const budgetRange = readField(formData, 'budgetRange');
    const requiredFeatures = readField(formData, 'requiredFeatures');
    const techStack = readField(formData, 'techStack');
    const timeline = readField(formData, 'timeline');
    const expectedLaunchDate = readField(formData, 'expectedLaunchDate');
    const additionalNotes = readField(formData, 'additionalNotes');

    const body = [
      'New CodeCraft UI project request',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Company: ${company || 'Not provided'}`,
      `Website: ${website || 'Not provided'}`,
      `Project type: ${projectType}`,
      `Industry: ${industry}`,
      `Budget range: ${budgetRange || 'Prefer to discuss'}`,
      `Preferred tech stack: ${techStack || 'Open to recommendation'}`,
      `Timeline: ${timeline}`,
      `Expected launch date: ${expectedLaunchDate || 'Not provided'}`,
      '',
      'Required features:',
      requiredFeatures,
      '',
      'Additional notes:',
      additionalNotes || 'Not provided',
    ].join('\n');

    const mailto = `mailto:${siteConfig.email}?${new URLSearchParams({
      subject: `CodeCraft UI project request from ${name || 'Website visitor'}`,
      body,
    }).toString()}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <form className="rounded-lg border border-line bg-white p-6 shadow-[var(--shadow-premium)]" onSubmit={handleSubmit}>
      <div className="mb-6">
        <p className="text-sm font-semibold text-brand-blue">Project requirements</p>
        <h2 className="mt-2 text-2xl font-semibold text-ink-950">Share enough detail to scope the work properly.</h2>
        <p className="mt-3 text-sm leading-7 text-ink-600">
          After reviewing the brief, project scope, timeline, and implementation approach can be discussed directly.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink-900">
          Name
          <Input autoComplete="name" className="mt-2" name="name" placeholder="Your name" required />
        </label>
        <label className="block text-sm font-semibold text-ink-900">
          Email
          <Input autoComplete="email" className="mt-2" name="email" placeholder="you@example.com" required type="email" />
        </label>
        <label className="block text-sm font-semibold text-ink-900">
          Phone <span className="font-medium text-ink-500">(optional)</span>
          <Input autoComplete="tel" className="mt-2" name="phone" placeholder="+91 98765 43210" type="tel" />
        </label>
        <label className="block text-sm font-semibold text-ink-900">
          Company <span className="font-medium text-ink-500">(optional)</span>
          <Input autoComplete="organization" className="mt-2" name="company" placeholder="Company or brand name" />
        </label>
        <label className="block text-sm font-semibold text-ink-900 sm:col-span-2">
          Current website or reference <span className="font-medium text-ink-500">(optional)</span>
          <Input autoComplete="url" className="mt-2" name="website" placeholder="https://example.com" type="url" />
        </label>
        <label className="block text-sm font-semibold text-ink-900">
          Project type
          <Select className="mt-2" defaultValue="" name="projectType" required>
            <option disabled value="">
              Select one
            </option>
            <option value="SaaS application">SaaS application</option>
            <option value="Business website">Business website</option>
            <option value="Corporate website">Corporate website</option>
            <option value="Startup website">Startup website</option>
            <option value="Portfolio website">Portfolio website</option>
            <option value="Landing page">Landing page</option>
            <option value="Dashboard UI">Dashboard UI</option>
            <option value="Ecommerce website">Ecommerce website</option>
            <option value="Modern web application">Modern web application</option>
            <option value="Next.js migration">Next.js migration</option>
            <option value="Custom website design">Custom website design</option>
          </Select>
        </label>
        <label className="block text-sm font-semibold text-ink-900">
          Industry
          <Input className="mt-2" name="industry" placeholder="SaaS, finance, education, ecommerce..." required />
        </label>
        <label className="block text-sm font-semibold text-ink-900">
          Budget range <span className="font-medium text-ink-500">(optional)</span>
          <Input className="mt-2" name="budgetRange" placeholder="Flexible / prefer to discuss" />
        </label>
        <label className="block text-sm font-semibold text-ink-900">
          Preferred tech stack <span className="font-medium text-ink-500">(optional)</span>
          <Input className="mt-2" name="techStack" placeholder="Next.js, TypeScript, Tailwind CSS..." />
        </label>
        <label className="block text-sm font-semibold text-ink-900">
          Timeline
          <Select className="mt-2" defaultValue="" name="timeline" required>
            <option disabled value="">
              Select one
            </option>
            <option value="This week">This week</option>
            <option value="This month">This month</option>
            <option value="1-2 months">1-2 months</option>
            <option value="Flexible">Flexible</option>
            <option value="Need recommendation">Need recommendation</option>
          </Select>
        </label>
        <label className="block text-sm font-semibold text-ink-900">
          Expected launch date <span className="font-medium text-ink-500">(optional)</span>
          <Input className="mt-2" name="expectedLaunchDate" type="date" />
        </label>
      </div>
      <label className="mt-4 block text-sm font-semibold text-ink-900">
        Required features
        <Textarea
          className="mt-2"
          name="requiredFeatures"
          placeholder="List pages, forms, dashboards, ecommerce flows, animations, CMS needs, integrations, or other must-have features."
          required
        />
      </label>
      <label className="mt-4 block text-sm font-semibold text-ink-900">
        Additional notes <span className="font-medium text-ink-500">(optional)</span>
        <Textarea
          className="mt-2"
          name="additionalNotes"
          placeholder="Share the current project state, visual references, competitors, content readiness, or launch constraints."
        />
      </label>
      <Button className="mt-6 w-full sm:w-auto" type="submit">
        <Send aria-hidden="true" className="size-4" />
        Prepare project email
      </Button>
      {submitted ? (
        <p className="mt-4 rounded-lg bg-ink-100 p-3 text-sm text-ink-700">
          Your email app should now be open with the project details filled in.
        </p>
      ) : null}
    </form>
  );
}
