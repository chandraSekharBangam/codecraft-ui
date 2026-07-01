'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/types/site';
import { cn } from '@/lib/utils';

interface AccordionProps {
  items: FaqItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openItem, setOpenItem] = useState<string>(items[0]?.question ?? '');

  return (
    <div className={cn('divide-y divide-line rounded-lg border border-line bg-white', className)}>
      {items.map((item) => {
        const isOpen = openItem === item.question;
        const contentId = `faq-${item.question.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

        return (
          <div key={item.question}>
            <button
              aria-controls={contentId}
              aria-expanded={isOpen}
              className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-ink-950"
              type="button"
              onClick={() => setOpenItem(isOpen ? '' : item.question)}
            >
              <span>{item.question}</span>
              <ChevronDown aria-hidden="true" className={cn('size-5 shrink-0 transition', isOpen && 'rotate-180')} />
            </button>
            <div id={contentId} hidden={!isOpen}>
              <p className="px-5 pb-5 text-sm leading-7 text-ink-600">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
