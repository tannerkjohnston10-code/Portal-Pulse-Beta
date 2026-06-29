import type { ProgramHistoricalReplayPreview, ProgramIntelligenceModule } from "@/platform/program-intelligence/core/program-intelligence-types";
import { ProgramModuleShell } from "@/components/program-intelligence/program-module-shell";

export function HistoricalReplayPreview({ module }: { module: ProgramIntelligenceModule<ProgramHistoricalReplayPreview> }) {
  return (
    <ProgramModuleShell {...module}>
      <p className="font-bold text-white">{module.data.snapshotLabel}</p>
      <p className="mt-2 text-sm text-slate-300">{module.data.trend}</p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-400">
        {module.data.whatChanged.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </ProgramModuleShell>
  );
}
