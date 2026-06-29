import type { ScholarshipIQ } from "@/platform/roster/core/roster-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function ScholarshipTracker({ scholarship }: { scholarship: ScholarshipIQ }) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Scholarship IQ</p>
          <h2 className="mt-2 text-2xl font-black text-white">{scholarship.usedScholarships}/{scholarship.totalScholarshipsPlaceholder}</h2>
          <p className="mt-1 text-xs font-bold text-slate-500">{scholarship.scholarshipLimitLabel} · {scholarship.scholarshipModel}</p>
        </div>
        <ConfidenceBadge level={scholarship.confidence} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-400">{scholarship.projectedOpenings} projected openings. Mock or projected values only.</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">Class distribution</p>
          <p className="mt-2 text-sm font-semibold text-slate-300">{Object.entries(scholarship.classYearDistribution).map(([k, v]) => `${k}: ${v}`).join(" · ")}</p>
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">Position distribution</p>
          <p className="mt-2 text-sm font-semibold text-slate-300">{Object.entries(scholarship.positionalDistribution).map(([k, v]) => `${k}: ${v}`).join(" · ")}</p>
        </div>
      </div>
      <p className="mt-4 text-xs font-bold text-slate-500">Alerts: {scholarship.riskAlerts.join(" ")}</p>
    </section>
  );
}
