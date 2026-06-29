import { AlertTriangle, Search, ShieldCheck, SlidersHorizontal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageFrame } from "@/components/layout/page-frame";
import { InsightCard } from "@/components/insights/insight-card";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { TrustNotice } from "@/components/ui/trust-notice";
import { insightService } from "@/server/services/insight-service";

const categories = [
  "Breaking",
  "Trending",
  "Rising",
  "Falling",
  "Risk",
  "Opportunity",
  "Conflict",
  "Prediction Shift",
  "Roster Impact",
  "NIL Movement",
  "Conference Movement",
  "Watchlist Alert"
];

export default async function InsightsPage() {
  const [insights, engineResult] = await Promise.all([insightService.getInsightFeed(), insightService.getEngineResult()]);

  return (
    <PageFrame
      eyebrow="AI Insights Engine"
      title="Explainable College Athletics Intelligence"
      description="A mock source-aware insight feed that explains what changed, why it matters, who is affected, how confident Portal Pulse is, and what to watch next."
    >
      <div className="grid gap-6">
        <MockDataNotice />
        <TrustNotice />

        <section className="rounded-lg border border-white/10 bg-slate-950/72 p-4">
          <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="flex min-h-11 items-center gap-2 rounded-md border border-white/10 bg-slate-950 px-3 text-slate-400" htmlFor="insight-search">
              <Search size={16} aria-hidden />
              <input id="insight-search" className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-white outline-none placeholder:text-slate-500" placeholder="Search mock insights, players, teams, conferences..." />
            </label>
            <div className="flex flex-wrap gap-2">
              <FilterButton label="Confidence" />
              <FilterButton label="Subject" />
              <FilterButton label="Sources" />
            </div>
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => (
              <button key={category} className="min-h-9 shrink-0 rounded-full border border-white/10 bg-white/5 px-3 text-xs font-black uppercase tracking-wide text-slate-300 transition hover:bg-white/10" type="button">
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <Metric label="Approved mock insights" value={insights.length.toString()} icon={ShieldCheck} />
          <Metric label="Review-gated candidates" value={engineResult.reviewQueue.length.toString()} icon={AlertTriangle} />
          <Metric label="Generated at" value="12:20 PM" icon={SlidersHorizontal} />
        </section>

        <section className="grid gap-4">
          {insights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </section>

        <section className="rounded-lg border border-yellow-300/20 bg-yellow-300/10 p-5">
          <h2 className="text-lg font-black text-yellow-100">Admin Review Routing</h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-yellow-50/80">
            Low-confidence insights, weak evidence, source conflicts, NIL-sensitive items, high-impact claims, and possible duplicates are routed away from the approved feed. This page shows the review architecture with fictional mock candidates only.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {engineResult.reviewQueue.map((insight) => (
              <InsightCard key={insight.id} insight={insight} compact />
            ))}
          </div>
        </section>
      </div>
    </PageFrame>
  );
}

function FilterButton({ label }: { label: string }) {
  return (
    <button className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 text-sm font-bold text-slate-300 transition hover:bg-white/10" type="button">
      <SlidersHorizontal size={15} aria-hidden />
      {label}
    </button>
  );
}

function Metric({ label, value, icon: Icon }: { label: string; value: string; icon: LucideIcon }) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/72 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
        <Icon size={17} className="text-cyan-300" aria-hidden />
      </div>
      <p className="mt-3 text-3xl font-black text-white">{value}</p>
    </div>
  );
}
