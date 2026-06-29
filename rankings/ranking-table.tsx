import type { AnyRankingItem } from "@/types/rankings";
import { RankChangeIndicator } from "@/components/rankings/rank-change-indicator";
import { RankingConfidenceBadge } from "@/components/rankings/ranking-confidence-badge";
import { RankingScoreBadge } from "@/components/rankings/ranking-score-badge";
import { getSubtitle, getTitle } from "@/components/rankings/ranking-card";

export function RankingTable({ items }: { items: AnyRankingItem[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10 bg-slate-950/70">
      <table className="w-full min-w-[900px] border-collapse text-left text-sm">
        <thead className="bg-white/5 text-xs uppercase tracking-wide text-slate-400">
          <tr>
            <th className="p-4">Rank</th>
            <th className="p-4">Entity</th>
            <th className="p-4">Movement</th>
            <th className="p-4">Score</th>
            <th className="p-4">Confidence</th>
            <th className="p-4">Sources</th>
            <th className="p-4">Explanation</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-t border-white/10 hover:bg-white/[0.03]">
              <td className="p-4 text-lg font-black text-white">#{item.rank}</td>
              <td className="p-4">
                <p className="font-black text-white">{getTitle(item)}</p>
                <p className="text-xs font-semibold text-slate-500">{getSubtitle(item)} · Mock</p>
              </td>
              <td className="p-4"><RankChangeIndicator movement={item.movement} change={item.rankChange} /></td>
              <td className="p-4"><RankingScoreBadge score={item.score} /></td>
              <td className="p-4"><RankingConfidenceBadge score={item.confidenceScore} /></td>
              <td className="p-4 font-bold text-slate-300">{item.sourceCount}</td>
              <td className="max-w-sm p-4 text-xs font-semibold leading-5 text-slate-400">{item.explanation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
