import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { companyMission, companyVision } from '@/data/content';

export function MissionVisionSection() {
  const VisionIcon = companyVision.icon;
  const MissionIcon = companyMission.icon;

  return (
    <section className="py-16 sm:py-20 bg-ink-50">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="flex flex-col p-8 sm:p-10 border-0 shadow-sm">
            <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-ink-950 text-brand-amber">
              <VisionIcon aria-hidden="true" className="size-6" />
            </div>
            <h3 className="text-2xl font-semibold text-ink-950">{companyVision.title}</h3>
            <p className="mt-4 text-base leading-7 text-ink-600">
              {companyVision.description}
            </p>
          </Card>
          
          <Card className="flex flex-col p-8 sm:p-10 border-0 shadow-sm">
            <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-ink-950 text-brand-coral">
              <MissionIcon aria-hidden="true" className="size-6" />
            </div>
            <h3 className="text-2xl font-semibold text-ink-950">{companyMission.title}</h3>
            <p className="mt-4 text-base leading-7 text-ink-600">
              {companyMission.description}
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
