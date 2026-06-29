import type { StrategyRecommendation } from "@/platform/roster/core/roster-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function StrategyRecommendationCard({ strategy }: { strategy: StrategyRecommendation }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">{strategy.simulationStatus}</p>
          <h3 className="mt-2 text-base font-black text-white">{strategy.title}</h3>
        </div>
        <ConfidenceBadge level={strategy.confidence} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-400">{strategy.summary}</p>
      <p className="mt-3 text-xs font-bold text-slate-500">Signals: {strategy.supportingRosterSignals.join(", ")} · Mock</p>
    </article>
  );
}

