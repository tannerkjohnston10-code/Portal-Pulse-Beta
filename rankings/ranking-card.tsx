import type { AnyRankingItem } from "@/types/rankings";
import { RankChangeIndicator } from "@/components/rankings/rank-change-indicator";
import { RankingConfidenceBadge } from "@/components/rankings/ranking-confidence-badge";
import { RankingExplanation } from "@/components/rankings/ranking-explanation";
import { RankingHistoryMiniChart } from "@/components/rankings/ranking-history-mini-chart";
import { RankingScoreBadge } from "@/components/rankings/ranking-score-badge";

export function RankingCard({ item, compact = false }: { item: AnyRankingItem; compact?: boolean }) {
  const title = getTitle(item);
  const subtitle = getSubtitle(item);

  return (
    <article className="rounded-lg border border-white/10 bg-slate-950/72 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-cyan-300/25 hover:bg-slate-900/85">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="text-3xl font-black text-white">#{item.rank}</div>
          <div>
            <h3 className="text-lg font-black text-white">{title}</h3>
            <p className="mt-1 text-xs font-bold text-slate-500">{subtitle}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <RankChangeIndicator movement={item.movement} change={item.rankChange} />
          <RankingScoreBadge score={item.score} />
          <RankingConfidenceBadge score={item.confidenceScore} />
        </div>
      </div>
      {!compact && (
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_10rem]">
          <RankingExplanation item={item} />
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-3">
            <p className="text-xs font-black uppercase tracking-wide text-slate-500">Rank history</p>
            <div className="mt-3">
              <RankingHistoryMiniChart values={item.history} />
            </div>
          </div>
        </div>
      )}
      <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-400">
        <span className="rounded-full bg-white/5 px-2.5 py-1">{item.sourceCount} mock sources</span>
        <span className="rounded-full bg-white/5 px-2.5 py-1">Updated {item.lastUpdated}</span>
        <span className="rounded-full bg-white/5 px-2.5 py-1 capitalize">{item.rankingType.replace("_", " ")}</span>
      </div>
    </article>
  );
}

export function getTitle(item: AnyRankingItem) {
  if (item.rankingType === "players") return item.playerName;
  if (item.rankingType === "teams") return item.teamName;
  if (item.rankingType === "conferences") return item.conference;
  if (item.rankingType === "positions") return item.position;
  if (item.rankingType === "nil") return item.schoolOrTeam;
  if (item.rankingType === "momentum") return item.entityName;
  if (item.rankingType === "roster_strength") return item.teamName;
  return item.teamName;
}

export function getSubtitle(item: AnyRankingItem) {
  if (item.rankingType === "players") return `${item.position} · ${item.sport} · ${item.previousSchool} · ${item.currentStatus}`;
  if (item.rankingType === "teams") return `${item.conference} · ${item.commits} commits · ${item.losses} losses`;
  if (item.rankingType === "conferences") return `${item.transfersIn} in · ${item.transfersOut} out · ${item.mostActivePosition}`;
  if (item.rankingType === "positions") return `${item.playerVolume} players · ${item.elitePlayerCount} elite · ${item.marketScarcityLabel}`;
  if (item.rankingType === "nil") return `${item.estimatedMarketStrengthLabel} · ${item.nilStatus} · ${item.disclaimer}`;
  if (item.rankingType === "momentum") return `${item.entityType} · ${item.momentumCategory} · +${item.weeklyChange} weekly`;
  if (item.rankingType === "roster_strength") return `${item.conference} · roster strength ${item.rosterStrengthScore}`;
  return `${item.conference} · ${item.totalCommits} commits`;
}
