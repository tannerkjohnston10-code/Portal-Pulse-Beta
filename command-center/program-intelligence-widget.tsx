import Link from "next/link";
import { Building2 } from "lucide-react";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import type { ProgramCommandCenterWidget } from "@/platform/program-intelligence/core/program-intelligence-types";

export function ProgramIntelligenceWidget({ widget }: { widget: ProgramCommandCenterWidget }) {
  return (
    <DashboardWidget title="Program Intelligence" subtitle="Unified program workspace" icon={Building2} span={4}>
      <div className="grid gap-4">
        <div className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3 text-xs font-bold leading-5 text-cyan-50">
          {widget.disclaimer}
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Recently viewed</p>
          <div className="mt-2 grid gap-2">
            {widget.recentlyViewedPrograms.map((program) => (
              <div key={program.programId} className="rounded-md border border-white/10 bg-slate-950/70 p-3">
                <p className="text-sm font-black text-white">{program.schoolName}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500">{program.sport} · {program.conference}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Notable mock changes</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm font-semibold leading-5 text-slate-300">
            {widget.notableChanges.map((change) => <li key={change}>{change}</li>)}
          </ul>
        </div>
        <Link href={widget.linkHref} className="inline-flex min-h-10 items-center justify-center rounded-md border border-cyan-300/20 bg-cyan-300/10 px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/15">
          Open Program Workspace
        </Link>
      </div>
    </DashboardWidget>
  );
}
