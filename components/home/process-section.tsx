import { ProcessList } from '@/components/sections/process-list';
import { processSteps } from '@/data/content';

export function ProcessSection() {
  return (
    <ProcessList
      description="The migration is structured so every step leaves the project easier to understand, extend, and deploy."
      eyebrow="Workflow"
      steps={processSteps}
      title="A practical path from demo app to production application."
    />
  );
}
