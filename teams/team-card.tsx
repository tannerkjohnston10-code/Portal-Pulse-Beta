import { PortalGradeBadge } from "@/components/ui/portal-grade-badge";
import { cardStyles } from "@/lib/design-tokens";
import type { TeamRanking } from "@/types/portal";

export function TeamCard({ ranking }: { ranking: TeamRanking }) {
  return (
    <article className={`${cardStyles} p-5`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-3xl font-black text-white">#{ranking.rank}</p>
          <h2 className="mt-2 text-lg font-black text-white">{ranking.team}</h2>
          <p className="text-sm font-semibold text-slate-400">{ranking.conference}</p>
        </div>
        <PortalGradeBadge grade={ranking.portalGrade} />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 text-center">
        <MiniStat label="Commits" value={ranking.commits.toString()} />
        <MiniStat label="Losses" value={ranking.losses.toString()} />
        <MiniStat label="Impact" value={ranking.projectedImpactScore.toString()} />
      </div>
    </article>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-white/5 p-3">
      <p className="font-black text-white">{value}</p>
      <p className="text-xs font-bold text-slate-500">{label}</p>
    </div>
  );
}
