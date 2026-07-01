import { ProcessList } from '@/components/sections/process-list';
import { timeline } from '@/data/content';

export function TimelineSection() {
  return (
    <ProcessList
      description="The project is being moved in clear stages so future work can continue from recorded progress instead of restarting."
      eyebrow="Timeline"
      steps={timeline}
      title="From Vite demo to Next.js production site."
    />
  );
}
