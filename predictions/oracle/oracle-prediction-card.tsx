import { AlertTriangle, BrainCircuit, TrendingUp } from "lucide-react";
import type { OraclePredictionFinding } from "@/platform/athena/agents/oracle/oracle-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { cardStyles } from "@/lib/design-tokens";

export function OraclePredictionCard({ finding }: { finding: OraclePredictionFinding }) {
  return (
    <article className={`${cardStyles} p-5`}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Oracle projection</p>
          <h2 className="mt-2 text-2xl font-black text-white">{finding.predictedOutcome}</h2>
          <p className="mt-2 text-sm font-semibold text-slate-400">Projection only. Not a fact, report, or commitment.</p>
        </div>
        <ConfidenceBadge level={finding.confidence} />
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <TrendingUp className="text-emerald-300" size={18} aria-hidden />
          <p className="mt-3 text-xs font-black uppercase tracking-wide text-slate-500">Probability</p>
          <p className="mt-1 text-3xl font-black text-white">{finding.probability}%</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <AlertTriangle className="text-amber-200" size={18} aria-hidden />
          <p className="mt-3 text-xs font-black uppercase tracking-wide text-slate-500">Uncertainty</p>
          <p className="mt-1 text-3xl font-black capitalize text-white">{finding.uncertaintyLevel}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <BrainCircuit className="text-cyan-200" size={18} aria-hidden />
          <p className="mt-3 text-xs font-black uppercase tracking-wide text-slate-500">Core recommendation</p>
          <p className="mt-1 text-sm font-black uppercase tracking-wide text-white">{finding.recommendationToIntelligenceCore.replaceAll("_", " ")}</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-6 text-slate-300">{finding.explanation}</p>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-emerald-200">Supporting reasons</h3>
          <ul className="mt-3 grid gap-2">
            {finding.topSupportingReasons.map((reason) => (
              <li key={reason} className="rounded-md border border-emerald-400/15 bg-emerald-400/10 p-3 text-sm font-semibold text-emerald-50">{reason}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-amber-200">Risk factors</h3>
          <ul className="mt-3 grid gap-2">
            {finding.topRiskFactors.map((risk) => (
              <li key={risk.id} className="rounded-md border border-amber-300/15 bg-amber-300/10 p-3 text-sm font-semibold text-amber-50">{risk.label}: {risk.explanation}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-slate-400">
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">{finding.sourceCount} mock sources</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">{finding.evidenceCount} evidence refs</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">Core: {finding.coreDecision.decision.replaceAll("_", " ")}</span>
      </div>
    </article>
  );
}

