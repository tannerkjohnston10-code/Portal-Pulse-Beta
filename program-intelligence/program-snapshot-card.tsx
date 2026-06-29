import type { ProgramIntelligenceModule, ProgramSnapshot } from "@/platform/program-intelligence/core/program-intelligence-types";
import { ProgramModuleShell } from "@/components/program-intelligence/program-module-shell";

export function ProgramSnapshotCard({ module }: { module: ProgramIntelligenceModule<ProgramSnapshot> }) {
  return (
    <ProgramModuleShell {...module}>
      <div className="grid gap-3 text-sm leading-6 text-slate-300">
        <p>{module.data.rosterSummary}</p>
        <p>{module.data.portalActivitySummary}</p>
        <p>{module.data.recruitingSnapshot}</p>
        <p className="text-slate-400">{module.data.historicalTrend}</p>
      </div>
    </ProgramModuleShell>
  );
}
