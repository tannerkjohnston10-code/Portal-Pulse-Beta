import Link from "next/link";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { StatusBadge } from "@/components/ui/status-badge";
import type { Player } from "@/types/portal";

export function PlayerTable({ players }: { players: Player[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10 bg-slate-950/70">
      <table className="w-full min-w-[920px] border-collapse text-left text-sm">
        <thead className="bg-white/5 text-xs uppercase tracking-wide text-slate-400">
          <tr>
            <th className="p-4">Player</th>
            <th className="p-4">Sport</th>
            <th className="p-4">Position</th>
            <th className="p-4">Previous School</th>
            <th className="p-4">Status</th>
            <th className="p-4">Probability</th>
            <th className="p-4">Confidence</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id} className="border-t border-white/10 hover:bg-white/[0.03]">
              <td className="p-4">
                <Link href={`/players/${player.id}`} className="font-black text-white hover:text-cyan-200">{player.name}</Link>
                <p className="text-xs font-semibold text-yellow-100">Mock data</p>
              </td>
              <td className="p-4 text-slate-300">{player.sport}</td>
              <td className="p-4 text-slate-300">{player.position}</td>
              <td className="p-4 text-slate-300">{player.previousSchool}</td>
              <td className="p-4"><StatusBadge status={player.currentStatus} /></td>
              <td className="p-4 font-black text-white">{player.commitmentProbability}%</td>
              <td className="p-4"><ConfidenceBadge level={player.confidence} score={player.confidenceScore} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
