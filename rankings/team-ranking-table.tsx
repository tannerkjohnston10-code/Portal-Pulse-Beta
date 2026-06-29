import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import { PortalGradeBadge } from "@/components/ui/portal-grade-badge";
import type { TeamRanking } from "@/types/portal";

export function TeamRankingTable({ rankings }: { rankings: TeamRanking[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10 bg-slate-950/70">
      <table className="w-full min-w-[820px] border-collapse text-left text-sm">
        <thead className="bg-white/5 text-xs uppercase tracking-wide text-slate-400">
          <tr>
            <th className="p-4">Rank</th>
            <th className="p-4">Team</th>
            <th className="p-4">Movement</th>
            <th className="p-4">Commits</th>
            <th className="p-4">Losses</th>
            <th className="p-4">Net Impact</th>
            <th className="p-4">Grade</th>
            <th className="p-4">Impact</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((team) => (
            <tr key={team.id} className="border-t border-white/10 hover:bg-white/[0.03]">
              <td className="p-4 text-lg font-black text-white">#{team.rank}</td>
              <td className="p-4">
                <p className="font-black text-white">{team.team}</p>
                <p className="text-xs font-semibold text-slate-500">{team.sport} · {team.conference} · Mock</p>
              </td>
              <td className="p-4">{renderMovement(team.previousRank - team.rank)}</td>
              <td className="p-4 text-slate-300">{team.commits}</td>
              <td className="p-4 text-slate-300">{team.losses}</td>
              <td className="p-4 font-black text-emerald-200">+{team.netImpact}</td>
              <td className="p-4"><PortalGradeBadge grade={team.portalGrade} /></td>
              <td className="p-4 font-black text-white">{team.projectedImpactScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderMovement(delta: number) {
  if (delta > 0) {
    return <span className="inline-flex items-center gap-1 font-black text-emerald-300"><ArrowUp size={15} />{delta}</span>;
  }

  if (delta < 0) {
    return <span className="inline-flex items-center gap-1 font-black text-rose-300"><ArrowDown size={15} />{Math.abs(delta)}</span>;
  }

  return <span className="inline-flex items-center gap-1 font-black text-slate-400"><ArrowRight size={15} />0</span>;
}
