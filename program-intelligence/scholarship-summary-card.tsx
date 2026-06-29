import type { ProgramIntelligenceModule, ProgramScholarshipPlanning } from "@/platform/program-intelligence/core/program-intelligence-types";
import { ProgramModuleShell } from "@/components/program-intelligence/program-module-shell";

export function ScholarshipSummaryCard({ module }: { module: ProgramIntelligenceModule<ProgramScholarshipPlanning> }) {
  return (
    <ProgramModuleShell {...module}>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-md border border-white/10 bg-slate-900/70 p-3">Used <strong className="text-white">{module.data.used}</strong></div>
        <div className="rounded-md border border-white/10 bg-slate-900/70 p-3">Open <strong className="text-white">{module.data.open}</strong></div>
        <div className="rounded-md border border-white/10 bg-slate-900/70 p-3">Projected <strong className="text-white">{module.data.projectedOpenings}</strong></div>
      </div>
      <p className="mt-3 text-sm font-bold text-amber-100">{module.data.riskLabel}</p>
    </ProgramModuleShell>
  );
}
