import { IconGrid } from '@/components/sections/icon-grid';
import { certifications } from '@/data/content';

export function CertificationsSection() {
  return (
    <IconGrid
      description="Our processes and output are aligned with modern web standards, ensuring your application is accessible, performant, and visible."
      eyebrow="Standards & Certifications"
      items={certifications}
      title="Committed to web excellence."
    />
  );
}
