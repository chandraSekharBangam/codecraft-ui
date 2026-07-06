'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  label: string;
}

export function Tabs({ tabs, label }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[activeIndex];

  return (
    <div>
      <div aria-label={label} className="inline-flex rounded-lg border border-line bg-ink-50 p-1 shadow-[0_8px_24px_rgb(5_7_13_/_6%)]" role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            aria-selected={activeIndex === index}
            className={cn(
              'focus-ring h-9 rounded-md px-4 text-sm font-semibold text-ink-600 transition',
              activeIndex === index && 'bg-ink-950 text-white shadow-[0_8px_20px_rgb(5_7_13_/_16%)]',
            )}
            role="tab"
            type="button"
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-5" role="tabpanel">
        {activeTab?.content}
      </div>
    </div>
  );
}
