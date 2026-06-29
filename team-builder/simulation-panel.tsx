import type { RosterSimulation } from "@/platform/roster/core/roster-types";
import { BeforeAfterRosterView } from "@/components/team-builder/before-after-roster-view";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function SimulationPanel({ simulations }: { simulations: RosterSimulation[] }) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Simulation panel</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">All scenarios are mock, simulated, projected, and assumption-based.</p>
      <div className="mt-5 grid gap-4">
        {simulations.map((simulation) => (
          <article key={simulation.id} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-wide text-slate-500">{simulation.simulationType.replaceAll("_", " ")}</p>
                <h3 className="mt-2 text-base font-black text-white">{simulation.title}</h3>
              </div>
              <ConfidenceBadge level={simulation.confidence} />
            </div>
            <div className="mt-4"><BeforeAfterRosterView beforeState={simulation.beforeState} afterState={simulation.afterState} /></div>
            <p className="mt-3 text-sm leading-6 text-slate-400">Impact {simulation.projectedImpact}. Risk: {simulation.risk}</p>
            <p className="mt-3 text-xs font-bold text-slate-500">{simulation.disclaimer} Assumptions: {simulation.assumptions.join("; ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

