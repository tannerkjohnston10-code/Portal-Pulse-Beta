import type { LabScenario } from "@/platform/labs/core/labs-types";

export function SimulationTimeline({ scenarios }: { scenarios: LabScenario[] }) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Simulation Timeline</p>
      <div className="mt-4 grid gap-3">
        {scenarios.map((scenario) => (
          <div key={scenario.id} className="rounded-md border border-white/10 bg-slate-900/80 p-3">
            <div className="flex items-center justify-between gap-3">
              <p className="font-bold text-white">{scenario.name}</p>
              <span className="text-xs font-semibold text-slate-500">{new Date(scenario.lastUpdated).toLocaleDateString()}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-400">{scenario.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
