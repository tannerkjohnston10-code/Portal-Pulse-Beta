import type { BetaMetricItem, BetaMetricsSnapshot } from "@/platform/admin/beta/beta-metrics-service";

function statusClass(status: BetaMetricItem["status"]) {
  if (status === "healthy") return "border-emerald-300/25 bg-emerald-300/10 text-emerald-100";
  if (status === "review") return "border-amber-300/25 bg-amber-300/10 text-amber-100";
  if (status === "blocked") return "border-rose-300/25 bg-rose-300/10 text-rose-100";
  return "border-cyan-300/20 bg-cyan-300/10 text-cyan-100";
}

function MetricCard({ metric }: { metric: BetaMetricItem }) {
  return (
    <article className="rounded-lg border border-white/10 bg-slate-950/70 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{metric.label}</p>
          <p className="mt-2 text-2xl font-black text-white">{metric.value}</p>
        </div>
        <span className={`rounded-full border px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] ${statusClass(metric.status)}`}>
          {metric.status}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-400">{metric.detail}</p>
    </article>
  );
}

export function BetaMetricsDashboard({ snapshot }: { snapshot: BetaMetricsSnapshot }) {
  const primaryMetrics = [
    snapshot.brokenRoutes,
    snapshot.consoleErrors,
    snapshot.loadingPerformance,
    snapshot.pageCounts,
    snapshot.componentCounts,
    snapshot.searchMetrics,
    snapshot.pipelineHealth,
    snapshot.knowledgeGraphHealth,
    snapshot.aiStatus
  ];

  return (
    <div className="grid gap-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {primaryMetrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}
      </section>
      <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Mock Analytics</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {snapshot.mockAnalytics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}
        </div>
      </section>
    </div>
  );
}
