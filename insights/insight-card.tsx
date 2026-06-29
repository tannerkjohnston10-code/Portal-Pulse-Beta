import { ArrowUpRight, Eye, ShieldCheck } from "lucide-react";
import type { AIInsight } from "@/types/insights";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { InsightTypeBadge } from "@/components/insights/insight-type-badge";

export function InsightCard({ insight, compact = false }: { insight: AIInsight; compact?: boolean }) {
  return (
    <article className="rounded-lg border border-white/10 bg-slate-950/72 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-cyan-300/25 hover:bg-slate-900/85">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <InsightTypeBadge category={insight.category} />
          <ConfidenceBadge level={insight.confidenceLevel} score={insight.confidenceScore} />
        </div>
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-slate-500">
          <ShieldCheck size={14} aria-hidden />
          {insight.sourceCount} mock sources
        </div>
      </div>

      <h3 className="mt-4 text-lg font-black leading-6 text-white">{insight.title}</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-300">{insight.summary}</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <Metric label="Importance" value={insight.importanceScore.toString()} />
        <Metric label="Evidence" value={insight.evidenceCount.toString()} />
        <Metric label="Contradictions" value={insight.contradictingClaimIds.length.toString()} />
      </div>

      {!compact && (
        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          <Explain title="Why this matters" body={insight.whyThisMatters} />
          <Explain title="What to watch next" body={insight.whatToWatchNext} />
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3">
        <span className="text-xs font-bold text-slate-500">Generated {insight.generatedAt}</span>
        <button className="inline-flex min-h-9 items-center gap-2 rounded-md border border-white/10 px-3 text-xs font-black text-slate-300 transition hover:bg-white/10 hover:text-white" type="button">
          <Eye size={14} aria-hidden />
          Why we believe this
          <ArrowUpRight size={14} aria-hidden />
        </button>
      </div>
    </article>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-white/5 p-3">
      <p className="text-[0.65rem] font-black uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-xl font-black text-white">{value}</p>
    </div>
  );
}

function Explain({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.04] p-3">
      <p className="text-xs font-black uppercase tracking-wide text-cyan-300">{title}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-300">{body}</p>
    </div>
  );
}
