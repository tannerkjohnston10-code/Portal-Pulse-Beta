import type { GMDashboardData } from "@/platform/gm-workspace/dashboard/gm-workspace-types";

export function OrganizationSnapshot({ dashboard }: { dashboard: GMDashboardData }) {
  const stats = [
    { label: "Roster Health", value: `${dashboard.rosterHealth.overallScore}` },
    { label: "Scholarships", value: `${dashboard.scholarshipIQ.usedScholarships}/${dashboard.scholarshipIQ.scholarshipLimitPlaceholder}` },
    { label: "Roster DNA", value: `${dashboard.rosterDNA.score}` },
    { label: "Evidence", value: `${dashboard.executiveBrief.evidenceCount}` }
  ];

  return (
    <section className="overflow-hidden rounded-lg border border-white/10 bg-slate-950/70">
      <div className="border-b border-white/10 bg-white/[0.03] p-5">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">GM Workspace</p>
        <div className="mt-3 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white md:text-5xl">{dashboard.programName}</h1>
            <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-slate-400">
              Executive decision-support for roster construction, scholarships, transfer strategy, recruiting allocation, and organizational planning. Mock data only.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Watch Program", "Share", "Compare", "Export Placeholder"].map((action) => (
              <button key={action} className="min-h-10 rounded-md border border-white/10 px-4 text-sm font-black text-slate-200 transition hover:bg-white/10">
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-px bg-white/10 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-slate-950 p-5">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{stat.label}</p>
            <p className="mt-2 text-3xl font-black text-white">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
