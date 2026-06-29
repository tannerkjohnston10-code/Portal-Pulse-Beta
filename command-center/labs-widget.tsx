import Link from "next/link";
import { FlaskConical } from "lucide-react";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import type { LabCommandCenterWidget } from "@/platform/labs/core/labs-types";

export function LabsWidget({ widget }: { widget: LabCommandCenterWidget }) {
  return (
    <DashboardWidget title="Portal Pulse Labs" subtitle="Simulation-only workspace" icon={FlaskConical} span={4}>
      <div className="grid gap-4">
        <div className="rounded-md border border-amber-300/20 bg-amber-300/10 p-3 text-xs font-bold leading-5 text-amber-100">
          {widget.disclaimer}
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Recent simulations</p>
          <div className="mt-2 grid gap-2">
            {widget.recentSimulations.map((simulation) => (
              <div key={simulation.id} className="rounded-md border border-white/10 bg-slate-950/70 p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-bold text-white">{simulation.name}</p>
                  <span className="text-xs font-black text-cyan-200">{simulation.confidence}%</span>
                </div>
                <p className="mt-1 text-xs leading-5 text-slate-500">{simulation.label} · Mock data</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Suggested scenarios</p>
          <ul className="mt-2 grid gap-2 text-sm font-semibold leading-5 text-slate-300">
            {widget.suggestedScenarios.map((scenario) => <li key={scenario.id}>{scenario.title}</li>)}
          </ul>
        </div>
        <Link href="/labs" className="inline-flex min-h-10 items-center justify-center rounded-md border border-cyan-300/20 bg-cyan-300/10 px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/15">
          Open Labs
        </Link>
      </div>
    </DashboardWidget>
  );
}
