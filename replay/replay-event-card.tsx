import type { ReplayEvent } from "@/platform/history/snapshots/history-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function ReplayEventCard({ event }: { event: ReplayEvent }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-cyan-200">{event.eventDate.slice(0, 10)}</p>
          <h3 className="mt-2 text-lg font-black text-white">{event.title}</h3>
        </div>
        <ConfidenceBadge level={event.confidenceAtTime} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{event.summary}</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <InfoBlock label="Known then" value={event.whatWasKnownThen} />
        <InfoBlock label="Known now" value={event.whatIsKnownNow} />
        <InfoBlock label="Predicted then" value={event.predictedThen} />
        <InfoBlock label="Actual later" value={event.actualLater} />
      </div>
      <p className="mt-3 text-xs font-bold text-slate-500">{event.sourceCountAtTime} mock sources at time · Mock replay</p>
    </article>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-slate-950/60 p-3">
      <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-sm leading-6 text-slate-300">{value}</p>
    </div>
  );
}

