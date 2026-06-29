import type { GMDashboardData } from "@/platform/gm-workspace/dashboard/gm-workspace-types";
import { GMCard } from "@/components/gm-workspace/gm-card";

export function ScholarshipIQCard({ scholarship }: { scholarship: GMDashboardData["scholarshipIQ"] }) {
  return (
    <GMCard eyebrow="Scholarship IQ" title={`${scholarship.usedScholarships}/${scholarship.scholarshipLimitPlaceholder} Mock Scholarships Used`}>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{scholarship.scholarshipLimitLabel} · {scholarship.scholarshipModel}</p>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-md border border-white/10 bg-slate-950/70 p-3">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Projected openings</p>
          <p className="mt-2 text-2xl font-black text-white">{scholarship.projectedOpenings}</p>
        </div>
        <div className="rounded-md border border-white/10 bg-slate-950/70 p-3">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Overloaded</p>
          <p className="mt-2 text-sm font-bold text-white">{scholarship.overloadedPositions.join(", ")}</p>
        </div>
        <div className="rounded-md border border-white/10 bg-slate-950/70 p-3">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Future shortages</p>
          <p className="mt-2 text-sm font-bold text-white">{scholarship.futureShortages.join(", ")}</p>
        </div>
      </div>
      <ul className="mt-4 grid gap-2 text-sm font-semibold leading-5 text-slate-300">
        {scholarship.recommendedActions.map((action) => <li key={action}>Mock recommendation: {action}</li>)}
      </ul>
    </GMCard>
  );
}
