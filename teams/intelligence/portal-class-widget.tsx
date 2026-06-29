import { MapPinned } from "lucide-react";
import type { TeamPortalClass } from "@/types/team-intelligence";
import { TeamPanel } from "@/components/teams/intelligence/team-panel";

export function PortalClassWidget({ portalClass }: { portalClass: TeamPortalClass }) {
  return (
    <TeamPanel title="Portal Class Dashboard" subtitle="Transfer class strength, balance, geography, and peer comparison." icon={MapPinned}>
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="grid gap-3 sm:grid-cols-2">
          <Metric label="Commits" value={portalClass.totalCommits.toString()} />
          <Metric label="Avg Rating" value={portalClass.averageTransferRating.toString()} />
          <Metric label="Avg PP Score" value={portalClass.averagePortalPulseScore.toString()} />
          <Metric label="National" value={`#${portalClass.nationalComparisonRank}`} />
        </div>
        <div className="rounded-lg border border-white/10 bg-[#091827] p-4">
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">Geographic Map Placeholder</p>
          <div className="mt-3 grid min-h-40 place-items-center rounded-md border border-dashed border-cyan-300/25 bg-cyan-300/5 text-center">
            <p className="max-w-xs text-sm font-bold leading-6 text-cyan-100">{portalClass.geographicMapLabel}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {portalClass.positionsFilled.map((position) => (
          <span key={position} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-black text-slate-300">
            {position}
          </span>
        ))}
      </div>
    </TeamPanel>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-black text-white">{value}</p>
    </div>
  );
}
