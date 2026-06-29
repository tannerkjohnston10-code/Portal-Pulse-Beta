import type { ProgramIntelligenceModule } from "@/platform/program-intelligence/core/program-intelligence-types";
import type { RecruitingPipeline } from "@/types/team-intelligence";
import { ProgramModuleShell } from "@/components/program-intelligence/program-module-shell";

export function RecruitingOverviewCard({ module }: { module: ProgramIntelligenceModule<RecruitingPipeline> }) {
  return (
    <ProgramModuleShell {...module}>
      <div className="grid gap-3 text-sm font-semibold leading-6 text-slate-300">
        <p>Recruiting rank: {module.data.recruitingClassRank}</p>
        <p>Transfer class rank: {module.data.transferClassRank}</p>
        <p>State pipeline: {module.data.statePipeline.join(", ")}</p>
      </div>
    </ProgramModuleShell>
  );
}
