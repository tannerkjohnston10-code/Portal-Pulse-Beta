import type { ExecutiveCouncilRecommendation } from "@/platform/gm-workspace/dashboard/gm-workspace-types";

export function ExecutiveRecommendationCard({ recommendation }: { recommendation: ExecutiveCouncilRecommendation }) {
  return (
    <article className="rounded-md border border-white/10 bg-slate-950/70 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-black text-cyan-100">{recommendation.agentName}</p>
        <span className="rounded-md border border-white/10 px-2 py-1 text-[10px] font-black uppercase text-slate-300">{recommendation.confidence}</span>
      </div>
      <h3 className="mt-2 text-base font-black text-white">{recommendation.focusArea}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{recommendation.recommendation}</p>
      <details className="mt-3">
        <summary className="cursor-pointer text-xs font-black uppercase tracking-[0.14em] text-cyan-200">Explain This™</summary>
        <p className="mt-2 text-xs leading-5 text-slate-500">{recommendation.whyItMatters} Evidence: {recommendation.evidencePlaceholder}</p>
      </details>
    </article>
  );
}
