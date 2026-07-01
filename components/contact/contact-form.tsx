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
    const projectType = readField(formData, 'projectType');
    const timeline = readField(formData, 'timeline');
    const message = readField(formData, 'message');

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${projectType}`,
      `Timeline: ${timeline}`,
      '',
      message,
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
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink-900">
          Name
          <Input className="mt-2" name="name" placeholder="Your name" required />
        </label>
        <label className="block text-sm font-semibold text-ink-900">
          Email
          <Input className="mt-2" name="email" placeholder="you@example.com" required type="email" />
        </label>
        <label className="block text-sm font-semibold text-ink-900">
          Project type
          <Select className="mt-2" defaultValue="" name="projectType" required>
            <option disabled value="">
              Select one
            </option>
            <option value="Next.js migration">Next.js migration</option>
            <option value="Landing page redesign">Landing page redesign</option>
            <option value="Component system">Component system</option>
            <option value="Production QA">Production QA</option>
          </Select>
        </label>
        <label className="block text-sm font-semibold text-ink-900">
          Timeline
          <Select className="mt-2" defaultValue="" name="timeline" required>
            <option disabled value="">
              Select one
            </option>
            <option value="This week">This week</option>
            <option value="This month">This month</option>
            <option value="Flexible">Flexible</option>
          </Select>
        </label>
      </div>
      <label className="mt-4 block text-sm font-semibold text-ink-900">
        Message
        <Textarea
          className="mt-2"
          name="message"
          placeholder="Share the current project state, the pages involved, and the launch goal."
          required
        />
      </label>
      <Button className="mt-6 w-full sm:w-auto" type="submit">
        <Send aria-hidden="true" className="size-4" />
        Prepare email
      </Button>
      {submitted ? (
        <p className="mt-4 rounded-lg bg-ink-100 p-3 text-sm text-ink-700">
          Your email app should now be open with the project details filled in.
        </p>
      ) : null}
    </form>
  );
}
