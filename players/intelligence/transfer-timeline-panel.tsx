import { FilterBar } from "@/components/ui/filter-bar";
import { IntelligenceCard } from "@/components/ui/intelligence-card";
import { Timeline } from "@/components/ui/timeline";
import { TimelineEvent } from "@/components/ui/timeline-event";
import { formatDateTime } from "@/lib/format";
import type { TimelineEvent as PortalTimelineEvent } from "@/types/portal";

const filters = ["Recruitment", "Roster", "Portal", "Offers", "Visits", "NIL", "Predictions", "Sources"];

export function TransferTimelinePanel({ timeline, fallbackUpdatedAt }: { timeline: PortalTimelineEvent[]; fallbackUpdatedAt: string }) {
  const events = timeline.length
    ? timeline
    : [
        {
          id: "mock-recruitment",
          subjectId: "mock",
          subjectType: "player" as const,
          title: "Recruitment placeholder",
          detail: "Future verified recruitment events will appear here with source counts.",
          timestamp: fallbackUpdatedAt,
          confidence: "unknown" as const,
          isMock: true as const
        },
        {
          id: "mock-source-update",
          subjectId: "mock",
          subjectType: "player" as const,
          title: "Source update placeholder",
          detail: "Every timeline event will cite supporting claims and sources.",
          timestamp: fallbackUpdatedAt,
          confidence: "medium" as const,
          isMock: true as const
        }
      ];

  return (
    <IntelligenceCard title="Transfer Timeline" subtitle="Filterable event stream with confidence and source counts">
      <FilterBar filters={filters} />
      <div className="mt-5">
        <Timeline>
          {events.map((event) => (
            <TimelineEvent key={event.id} title={event.title} detail={`${event.detail} · Source count placeholder`} timestamp={formatDateTime(event.timestamp)} confidence={event.confidence} />
          ))}
        </Timeline>
      </div>
    </IntelligenceCard>
  );
}
