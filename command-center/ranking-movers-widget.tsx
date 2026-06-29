import { Trophy } from "lucide-react";
import type { AnyRankingItem } from "@/types/rankings";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import { TrustFooter } from "@/components/command-center/trust-footer";
import { RankingCard, getTitle } from "@/components/rankings/ranking-card";
import { RankChangeIndicator } from "@/components/rankings/rank-change-indicator";
import { WidgetToolbar } from "@/components/command-center/widget-toolbar";

export function RankingMoversWidget({
  movers
}: {
  movers: {
    topRisingPlayers: AnyRankingItem[];
    topRisingTeams: AnyRankingItem[];
    biggestRankChanges: AnyRankingItem[];
    conferenceMovers: AnyRankingItem[];
    nilMarketMovers: AnyRankingItem[];
    isMock: true;
  };
}) {
  const top = movers.biggestRankChanges[0] ?? movers.topRisingPlayers[0];
  const rows = [
    ["Rising Players", movers.topRisingPlayers],
    ["Rising Teams", movers.topRisingTeams],
    ["Conference Movers", movers.conferenceMovers],
    ["NIL Movers", movers.nilMarketMovers]
  ] as const;

  return (
    <DashboardWidget title="Ranking Movers" subtitle="Command Center hooks for source-aware ranking movement." icon={Trophy} span={4} toolbar={<WidgetToolbar />}>
      {top && <RankingCard item={top} compact />}
      <div className="mt-4 grid gap-3">
        {rows.map(([label, items]) => (
          <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
            <div className="mt-2 grid gap-2">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-black text-white">{getTitle(item)}</span>
                  <RankChangeIndicator movement={item.movement} change={item.rankChange} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <TrustFooter confidence="medium" sourceCount={top?.sourceCount ?? 0} lastUpdated={top?.lastUpdated ?? "2026-06-28T12:45:00.000Z"} note="Ranking movers use shared ranking services" />
    </DashboardWidget>
  );
}
