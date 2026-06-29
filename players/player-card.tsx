import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { SourceLine } from "@/components/ui/source-line";
import { StatusBadge } from "@/components/ui/status-badge";
import { cardStyles } from "@/lib/design-tokens";
import type { Player } from "@/types/portal";

export function PlayerCard({ player }: { player: Player }) {
  return (
    <article className={`${cardStyles} p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/30`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-black text-white">{player.name}</h3>
          <p className="mt-1 text-sm font-semibold text-slate-400">
            {player.position} · {player.previousSchool}
          </p>
        </div>
        <StatusBadge status={player.currentStatus} />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <ConfidenceBadge level={player.confidence} score={player.confidenceScore} />
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-bold text-slate-300">
          Mock record
        </span>
      </div>
      <div className="mt-4">
        <p className="text-xs font-black uppercase tracking-wide text-slate-500">Interested teams</p>
        <p className="mt-1 text-sm font-semibold text-slate-300">{player.interestedTeams.map((team) => team.team).join(", ")}</p>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <SourceLine source={player.source} />
        <Link href={`/players/${player.id}`} className="inline-flex shrink-0 items-center gap-1 text-sm font-black text-cyan-200 hover:text-white">
          View Profile
          <ArrowUpRight size={15} aria-hidden />
        </Link>
      </div>
    </article>
  );
}
