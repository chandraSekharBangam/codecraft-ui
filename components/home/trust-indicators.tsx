import { LogoCloud } from '@/components/sections/logo-cloud';
import { trustIndicators } from '@/data/content';

export function TrustIndicators() {
  return (
    <LogoCloud
      title="Trusted technologies powering our systems"
      items={trustIndicators}
    />
  );
}
