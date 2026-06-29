import { Clock } from "lucide-react";
import type { TeamTimelineEvent } from "@/types/team-intelligence";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { TeamPanel } from "@/components/teams/intelligence/team-panel";

export function TeamTimelineWidget({ events }: { events: TeamTimelineEvent[] }) {
  return (
    <TeamPanel title="Team Timeline" subtitle="Significant source-backed roster, portal, coaching, NIL, ranking, and prediction events." icon={Clock}>
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        {["All", "Portal", "Commitments", "Coaching", "NIL", "Rankings", "Predictions"].map((filter) => (
          <button key={filter} className="min-h-9 shrink-0 rounded-full border border-white/10 bg-white/5 px-3 text-xs font-black uppercase tracking-wide text-slate-300" type="button">
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-3">
        {events.map((event) => (
          <article key={event.id} className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 md:grid-cols-[9rem_1fr_auto] md:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-wide text-slate-500">{event.date}</p>
              <p className="mt-1 text-xs font-bold capitalize text-cyan-300">{event.eventType.replace("_", " ")}</p>
            </div>
            <div>
              <p className="text-sm font-semibold leading-6 text-slate-200">{event.summary}</p>
              <p className="mt-2 text-xs font-bold text-slate-500">Related: {event.relatedPlayers.join(", ") || "None"}</p>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end">
              <ConfidenceBadge level={event.confidence} />
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-black text-slate-300">{event.sourceCount} sources</span>
            </div>
          </article>
        ))}
      </div>
    </TeamPanel>
  );
}
