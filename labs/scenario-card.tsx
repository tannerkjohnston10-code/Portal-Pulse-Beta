import type { LabScenario } from "@/platform/labs/core/labs-types";
import { ConfidenceSummary } from "@/components/labs/confidence-summary";

export function ScenarioCard({ scenario }: { scenario: LabScenario }) {
  return (
    <article className="rounded-lg border border-white/10 bg-slate-900/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">{scenario.label}</p>
          <h3 className="mt-2 text-lg font-black text-white">{scenario.name}</h3>
        </div>
        <span className="rounded-full border border-slate-500/30 bg-slate-500/10 px-3 py-1 text-xs font-black uppercase tracking-wide text-slate-300">Mock</span>
      </div>
      <p className="mt-3 text-sm font-semibold leading-6 text-slate-300">{scenario.summary}</p>
      <div className="mt-4">
        <ConfidenceSummary confidence={scenario.confidence} />
      </div>
      <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Outputs</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {scenario.outputs.map((output) => <li key={output}>{output}</li>)}
          </ul>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Assumptions</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {scenario.assumptions.map((assumption) => <li key={assumption}>{assumption}</li>)}
          </ul>
        </div>
      </div>
    </article>
  );
}
