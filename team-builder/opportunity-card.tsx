import type { RosterOpportunity } from "@/platform/roster/core/roster-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function OpportunityCard({ opportunity }: { opportunity: RosterOpportunity }) {
  return (
    <article className="rounded-lg border border-amber-300/20 bg-amber-300/10 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-amber-200">{opportunity.urgency}</p>
          <h3 className="mt-2 text-base font-black text-white">{opportunity.title}</h3>
        </div>
        <ConfidenceBadge level={opportunity.confidence} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{opportunity.recommendedAction}</p>
      <p className="mt-3 text-xs font-bold text-slate-500">Impact {opportunity.impact} · {opportunity.relatedPosition} · {opportunity.evidencePlaceholder}</p>
    </article>
  );
}

