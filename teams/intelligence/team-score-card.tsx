import { Gauge } from "lucide-react";
import type { TeamScore } from "@/types/team-intelligence";
import { Sparkline } from "@/components/command-center/sparkline";
import { TeamPanel } from "@/components/teams/intelligence/team-panel";

export function TeamScoreCard({ score }: { score: TeamScore }) {
  return (
    <TeamPanel title="Portal Pulse Team Score™" subtitle="Placeholder proprietary score for roster health, portal class strength, balance, and momentum." icon={Gauge}>
      <div className="grid gap-5 lg:grid-cols-[14rem_1fr]">
        <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5 text-center">
          <p className="text-6xl font-black text-white">{score.overall}</p>
          <p className="mt-2 text-xs font-black uppercase tracking-wide text-cyan-200">Overall</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Mini label="Week" value={`+${score.weeklyTrend}`} />
            <Mini label="Month" value={`+${score.monthlyTrend}`} />
          </div>
        </div>
        <div>
          <Sparkline values={score.history} tone="green" />
          <div className="mt-5 grid gap-2">
            {score.factors.map((factor) => (
              <div key={factor.label}>
                <div className="mb-1 flex justify-between text-xs font-bold text-slate-400">
                  <span>{factor.label}</span>
                  <span>{factor.score}</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-cyan-300" style={{ width: `${factor.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TeamPanel>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-white/10 p-2">
      <p className="text-[0.65rem] font-black uppercase text-cyan-100/70">{label}</p>
      <p className="text-sm font-black text-white">{value}</p>
    </div>
  );
}
