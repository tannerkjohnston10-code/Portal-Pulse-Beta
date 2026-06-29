import type { PositionNeed } from "@/platform/roster/core/roster-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function PositionNeedCard({ need }: { need: PositionNeed }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">{need.urgency}</p>
          <h3 className="mt-2 text-base font-black text-white">{need.position}</h3>
        </div>
        <ConfidenceBadge level={need.confidence} />
      </div>
      <p className="mt-3 text-2xl font-black text-white">{need.projectedImpact}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{need.recommendedAction}</p>
      <p className="mt-3 text-xs font-bold text-slate-500">Depth {need.currentDepth} · Targets {need.transferTargetsPlaceholder} · {need.scholarshipAvailability}</p>
    </article>
  );
}

