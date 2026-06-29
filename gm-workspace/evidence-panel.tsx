import type { GMDashboardData } from "@/platform/gm-workspace/dashboard/gm-workspace-types";

export function EvidencePanel({ dashboard }: { dashboard: GMDashboardData }) {
  return (
    <div className="rounded-md border border-emerald-300/20 bg-emerald-300/10 p-4">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-100">Evidence Summary</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-emerald-50">{dashboard.evidenceSummary}</p>
    </div>
  );
}
