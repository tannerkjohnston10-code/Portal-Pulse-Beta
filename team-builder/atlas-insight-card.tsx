import type { AtlasInsight } from "@/platform/roster/core/roster-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function AtlasInsightCard({ insight }: { insight: AtlasInsight }) {
  return (
    <article className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-black text-white">{insight.title}</h3>
        <ConfidenceBadge level={insight.confidence} />
      </div>
      <p className="mt-3 text-xs font-bold text-slate-500">{insight.evidenceCount} evidence · {insight.affectedPositions.join(", ")} · {insight.simulationStatus} · {insight.intelligenceCoreApproval}</p>
    </article>
  );
}

