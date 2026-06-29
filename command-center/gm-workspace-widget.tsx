import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import type { GMCommandCenterWidget } from "@/platform/gm-workspace/dashboard/gm-workspace-types";

export function GMWorkspaceWidget({ widget }: { widget: GMCommandCenterWidget }) {
  return (
    <DashboardWidget title="GM Workspace" subtitle="Executive roster strategy" icon={BriefcaseBusiness} span={4}>
      <div className="grid gap-4">
        <div className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-100">Roster Health Score™</p>
          <p className="mt-2 text-4xl font-black text-white">{widget.rosterHealthScore}</p>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{widget.confidence} confidence · Mock executive model</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Executive priorities</p>
          <ul className="mt-2 grid gap-2 text-sm font-semibold leading-5 text-slate-300">
            {widget.executivePriorities.map((priority) => <li key={priority}>{priority}</li>)}
          </ul>
        </div>
        <div className="rounded-md border border-amber-300/20 bg-amber-300/10 p-3 text-xs font-bold leading-5 text-amber-50">
          Top transfer opportunity: {widget.topTransferOpportunity}
        </div>
        <Link href={widget.linkHref} className="inline-flex min-h-10 items-center justify-center rounded-md border border-cyan-300/20 bg-cyan-300/10 px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/15">
          Open GM Workspace
        </Link>
      </div>
    </DashboardWidget>
  );
}
