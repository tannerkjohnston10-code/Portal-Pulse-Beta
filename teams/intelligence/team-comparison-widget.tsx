import { Swords } from "lucide-react";
import type { TeamComparisonItem } from "@/types/team-intelligence";
import { TeamPanel } from "@/components/teams/intelligence/team-panel";

export function TeamComparisonWidget({ comparisons }: { comparisons: TeamComparisonItem[] }) {
  return (
    <TeamPanel title="Team Comparison" subtitle="Reusable compare-mode shell for roster quality, transfer class, score, needs, momentum, NIL, and returning production." icon={Swords}>
      <div className="grid gap-3">
        {comparisons.map((item) => (
          <div key={item.metric} className="grid gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-3 sm:grid-cols-[1fr_7rem_7rem_5rem] sm:items-center">
            <p className="font-black text-white">{item.metric}</p>
            <Value label="Team" value={item.teamValue} active={item.leader === "team"} />
            <Value label="Peer" value={item.peerValue} active={item.leader === "peer"} />
            <span className="text-xs font-black uppercase tracking-wide text-slate-500">{item.leader}</span>
          </div>
        ))}
      </div>
    </TeamPanel>
  );
}

function Value({ label, value, active }: { label: string; value: string; active: boolean }) {
  return (
    <div className={`rounded-md px-3 py-2 ${active ? "bg-emerald-300/12 text-emerald-200" : "bg-white/5 text-slate-300"}`}>
      <p className="text-[0.65rem] font-black uppercase tracking-wide opacity-70">{label}</p>
      <p className="text-sm font-black">{value}</p>
    </div>
  );
}
