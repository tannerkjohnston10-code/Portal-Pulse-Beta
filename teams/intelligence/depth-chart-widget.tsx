import { GitBranch } from "lucide-react";
import type { TeamDepthChartGroup } from "@/types/team-intelligence";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { TeamPanel } from "@/components/teams/intelligence/team-panel";

export function DepthChartWidget({ depthChart }: { depthChart: TeamDepthChartGroup[] }) {
  return (
    <TeamPanel title="Depth Chart Intelligence" subtitle="Projected starters, competition levels, transfers, and AI confidence." icon={GitBranch}>
      <div className="grid gap-4">
        {depthChart.map((group) => (
          <div key={group.phase} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">{group.phase.replace("_", " ")}</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {group.positions.map((position) => (
                <article key={`${group.phase}-${position.position}`} className="rounded-md border border-white/10 bg-slate-950/70 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-black text-white">{position.position}</h3>
                      <p className="mt-1 text-sm font-semibold text-slate-300">{position.projectedStarter}</p>
                    </div>
                    <ConfidenceBadge level={position.aiConfidence} score={position.rosterConfidence} />
                  </div>
                  <div className="mt-3 grid gap-1 text-xs font-bold text-slate-400">
                    <span>Competition: {position.competitionLevel}</span>
                    <span>Experience: {position.experience}</span>
                    <span>Transfers added: {position.transferAdditions}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </TeamPanel>
  );
}
