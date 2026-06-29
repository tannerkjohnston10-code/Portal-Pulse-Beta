import type { ProgramIntelligenceModule } from "@/platform/program-intelligence/core/program-intelligence-types";
import type { TeamDepthChartGroup } from "@/types/team-intelligence";
import { ProgramModuleShell } from "@/components/program-intelligence/program-module-shell";

export function DepthChartCard({ module }: { module: ProgramIntelligenceModule<TeamDepthChartGroup[]> }) {
  return (
    <ProgramModuleShell {...module}>
      <div className="grid gap-3">
        {module.data.flatMap((group) => group.positions.slice(0, 3)).map((position) => (
          <div key={position.position} className="rounded-md border border-white/10 bg-slate-900/70 p-3">
            <p className="font-black text-white">{position.position}</p>
            <p className="mt-1 text-sm text-slate-400">{position.projectedStarter} · {position.competitionLevel} · {position.rosterConfidence}% confidence</p>
          </div>
        ))}
      </div>
    </ProgramModuleShell>
  );
}
