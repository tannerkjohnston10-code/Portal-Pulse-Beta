import type { DepthChartPosition } from "@/platform/roster/core/roster-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function PositionGroupCard({ position }: { position: DepthChartPosition }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-cyan-200">{position.group}</p>
          <h3 className="mt-2 text-base font-black text-white">{position.projectedStarter}</h3>
        </div>
        <ConfidenceBadge level={position.confidence} />
      </div>
      <p className="mt-3 text-xs font-bold text-slate-500">Backups: {position.backups.join(", ")}</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <span className="rounded-md border border-white/10 bg-white/[0.04] p-2 text-xs font-black text-slate-300">Competition: {position.competitionLevel}</span>
        <span className="rounded-md border border-white/10 bg-white/[0.04] p-2 text-xs font-black text-slate-300">Need: {position.transferNeed}</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-400">{position.risk}</p>
    </article>
  );
}

