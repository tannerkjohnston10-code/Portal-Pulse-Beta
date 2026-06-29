import type { ProgramConferencePosition, ProgramIntelligenceModule } from "@/platform/program-intelligence/core/program-intelligence-types";
import { ProgramModuleShell } from "@/components/program-intelligence/program-module-shell";

export function ConferenceOverviewCard({ module }: { module: ProgramIntelligenceModule<ProgramConferencePosition> }) {
  return (
    <ProgramModuleShell {...module}>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-white/10 bg-slate-900/70 p-3">Conference Rank <strong className="text-white">#{module.data.conferenceRank}</strong></div>
        <div className="rounded-md border border-white/10 bg-slate-900/70 p-3">National Rank <strong className="text-white">#{module.data.nationalRank}</strong></div>
      </div>
      <p className="mt-3 text-sm text-slate-300">{module.data.peerComparison}</p>
    </ProgramModuleShell>
  );
}
