import { BarChart3 } from "lucide-react";
import type { ConferenceComparisonItem } from "@/types/team-intelligence";
import { TeamPanel } from "@/components/teams/intelligence/team-panel";

export function ConferenceComparisonWidget({ comparisons }: { comparisons: ConferenceComparisonItem[] }) {
  return (
    <TeamPanel title="Conference Comparison" subtitle="Compare portal additions, losses, roster score, team score, strength, momentum, and recruiting balance." icon={BarChart3}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left">
          <thead>
            <tr className="border-b border-white/10 text-xs font-black uppercase tracking-wide text-slate-500">
              <th className="py-3 pr-4">Team</th>
              <th className="py-3 pr-4">Add</th>
              <th className="py-3 pr-4">Loss</th>
              <th className="py-3 pr-4">Roster</th>
              <th className="py-3 pr-4">Score</th>
              <th className="py-3 pr-4">Strength</th>
              <th className="py-3 pr-4">Momentum</th>
              <th className="py-3">Balance</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((item) => (
              <tr key={item.team} className="border-b border-white/5 text-sm font-bold text-slate-300">
                <td className="py-3 pr-4 font-black text-white">{item.team}</td>
                <td className="py-3 pr-4">{item.portalAdditions}</td>
                <td className="py-3 pr-4">{item.portalLosses}</td>
                <td className="py-3 pr-4">{item.rosterScore}</td>
                <td className="py-3 pr-4">{item.teamScore}</td>
                <td className="py-3 pr-4">{item.positionalStrength}</td>
                <td className="py-3 pr-4">{item.momentum}</td>
                <td className="py-3">{item.recruitingBalance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TeamPanel>
  );
}
