import type { GMDashboardData } from "@/platform/gm-workspace/dashboard/gm-workspace-types";

export function ConfidencePanel({ dashboard }: { dashboard: GMDashboardData }) {
  return (
    <div className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-4">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-100">Confidence Summary</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-cyan-50">{dashboard.confidenceSummary}</p>
      <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Last updated: {new Date(dashboard.lastUpdated).toLocaleString()}</p>
    </div>
  );
}
