import type { ProgramEvidenceSummary, ProgramIntelligenceModule } from "@/platform/program-intelligence/core/program-intelligence-types";
import { ProgramModuleShell } from "@/components/program-intelligence/program-module-shell";

export function EvidencePanel({ module }: { module: ProgramIntelligenceModule<ProgramEvidenceSummary> }) {
  return (
    <ProgramModuleShell {...module}>
      <div className="grid gap-3 sm:grid-cols-5">
        {[["Verified", module.data.verifiedItems], ["Analysis", module.data.analyticalItems], ["History", module.data.historicalItems], ["Predictions", module.data.predictionItems], ["Simulations", module.data.simulationItems]].map(([label, value]) => (
          <div key={label} className="rounded-md border border-white/10 bg-slate-900/70 p-3">
            <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
            <p className="mt-2 text-xl font-black text-white">{value}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs font-semibold leading-5 text-amber-100">{module.data.disclaimer}</p>
    </ProgramModuleShell>
  );
}
