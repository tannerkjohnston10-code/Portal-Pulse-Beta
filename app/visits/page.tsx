import { PageFrame } from "@/components/layout/page-frame";
import { VisitCard } from "@/components/visits/visit-card";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { SectionHeader } from "@/components/ui/section-header";
import { visitService } from "@/server/services/visit-service";

export default async function VisitsPage() {
  const visits = await visitService.getVisits();
  const upcomingVisits = visits.filter((visit) => visit.status === "upcoming");
  const completedVisits = visits.filter((visit) => visit.status === "completed");

  return (
    <PageFrame
      eyebrow="Visits tracker"
      title="Visit Intelligence Board"
      description="Official, unofficial, in-home, virtual, and unknown visit labels with player, team, date, confidence score, and source placeholders."
    >
      <div className="grid gap-8">
        <MockDataNotice />
        <section>
          <SectionHeader title="Upcoming Visits" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {upcomingVisits.map((visit) => (
              <VisitCard key={visit.id} visit={visit} />
            ))}
          </div>
        </section>
        <section>
          <SectionHeader title="Completed Visits" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {completedVisits.map((visit) => (
              <VisitCard key={visit.id} visit={visit} />
            ))}
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
