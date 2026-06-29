import { TrendingUp } from "lucide-react";
import type { TeamMomentum } from "@/types/team-intelligence";
import { Sparkline } from "@/components/command-center/sparkline";
import { MovementBadge } from "@/components/ui/movement-badge";
import { TeamPanel } from "@/components/teams/intelligence/team-panel";

export function MomentumWidget({ momentum }: { momentum: TeamMomentum }) {
  const metrics: Array<[string, number]> = [
    ["Weekly", momentum.weeklyMomentum],
    ["Monthly", momentum.monthlyMomentum],
    ["Commitments", momentum.commitmentMomentum],
    ["Visits", momentum.visitMomentum],
    ["Predictions", momentum.predictionMomentum],
    ["Sources", momentum.sourceActivityScore]
  ];

  return (
    <TeamPanel title="Team Momentum Engine" subtitle="Momentum across commitments, visits, predictions, activity, and sources." icon={TrendingUp}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-5xl font-black text-white">{momentum.portalActivityScore}</p>
          <p className="mt-1 text-xs font-black uppercase tracking-wide text-slate-500">Portal Activity Score</p>
        </div>
        <MovementBadge movement={momentum.movement} value={`${momentum.monthlyMomentum} monthly`} />
      </div>
      <div className="mt-5">
        <Sparkline values={momentum.sparkline} tone="green" />
      </div>
      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        {metrics.map(([label, value]) => (
          <div key={label} className="rounded-md bg-white/[0.04] p-3">
            <div className="mb-1 flex justify-between text-xs font-bold text-slate-400">
              <span>{label}</span>
              <span>{value}</span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div className="h-full rounded-full bg-emerald-300" style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </TeamPanel>
  );
}
