import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { companyMission, companyVision } from '@/data/content';

export function MissionVisionSection() {
  const VisionIcon = companyVision.icon;
  const MissionIcon = companyMission.icon;

  return (
    <section className="bg-ink-50 py-16 sm:py-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="flex min-h-[290px] flex-col border-line/80 p-8 shadow-[0_16px_46px_rgb(5_7_13_/_8%)] sm:p-10">
            <div className="mb-6 flex size-12 items-center justify-center rounded-lg border border-brand-cyan/30 bg-brand-cyan/20 text-brand-cyan">
              <VisionIcon aria-hidden="true" className="size-6" />
            </div>
            <h3 className="text-2xl font-semibold text-ink-950">{companyVision.title}</h3>
            <p className="mt-4 text-base leading-7 text-ink-600">
              {companyVision.description}
            </p>
          </Card>
          
          <Card className="flex min-h-[290px] flex-col border-line/80 p-8 shadow-[0_16px_46px_rgb(5_7_13_/_8%)] sm:p-10">
            <div className="mb-6 flex size-12 items-center justify-center rounded-lg border border-brand-blue/30 bg-brand-blue/10 text-brand-blue">
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
