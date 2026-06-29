import type { ProgramIntelligenceModule } from "@/platform/program-intelligence/core/program-intelligence-types";
import type { TeamTimelineEvent } from "@/types/team-intelligence";
import { ProgramModuleShell } from "@/components/program-intelligence/program-module-shell";

export function TimelinePreview({ module }: { module: ProgramIntelligenceModule<TeamTimelineEvent[]> }) {
  return (
    <ProgramModuleShell {...module}>
      <div className="grid gap-3">
        {module.data.slice(0, 4).map((event) => (
          <div key={event.id} className="rounded-md border border-white/10 bg-slate-900/70 p-3">
            <p className="text-xs font-bold text-slate-500">{event.date} · {event.eventType}</p>
            <p className="mt-1 text-sm font-semibold text-slate-200">{event.summary}</p>
          </div>
        ))}
      </div>
    </ProgramModuleShell>
  );
}
