import Link from "next/link";
import { Activity, ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { MarketMover, MarketSnapshot, ConferenceMarket, MarketCommentary } from "@/platform/market/exchange/market-types";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import { TrustFooter } from "@/components/command-center/trust-footer";
import { WidgetToolbar } from "@/components/command-center/widget-toolbar";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function MercuryMarketWidget({
  market,
  topMovers,
  conferences,
  commentary
}: {
  market: MarketSnapshot;
  topMovers: MarketMover[];
  conferences: ConferenceMarket[];
  commentary: MarketCommentary;
}) {
  return (
    <DashboardWidget title="Mercury TMX" subtitle="Transfer Market Exchange signals." icon={Activity} span={4} toolbar={<WidgetToolbar />}>
      <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Today's market</p>
            <h3 className="mt-2 text-2xl font-black text-white">Heat Index {market.heatIndex}</h3>
          </div>
          <ConfidenceBadge level={market.confidence} />
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300">{commentary.whatChanged}</p>
      </div>

      <div className="mt-3 grid gap-2">
        {topMovers.map((mover) => (
          <div key={mover.id} className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.03] p-3">
            <div>
              <p className="text-sm font-black text-white">{mover.label}</p>
              <p className="text-xs font-bold text-slate-500">{mover.context}</p>
            </div>
            <span className={`inline-flex items-center gap-1 text-sm font-black ${mover.delta >= 0 ? "text-emerald-300" : "text-rose-300"}`}>
              {mover.delta >= 0 ? <ArrowUpRight size={15} aria-hidden /> : <ArrowDownRight size={15} aria-hidden />}
              {mover.delta > 0 ? "+" : ""}
              {mover.delta}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-md border border-white/10 bg-white/[0.03] p-3 text-xs font-bold leading-5 text-slate-300">
        Trending conferences: {conferences.map((conference) => conference.conference).join(", ")}
      </div>

      <Link href="/market" className="mt-4 inline-flex min-h-10 items-center justify-center rounded-md border border-emerald-300/25 bg-emerald-300/10 px-4 text-sm font-black text-emerald-100 transition hover:bg-emerald-300/15">
        Open TMX
      </Link>
      <TrustFooter confidence={market.confidence} sourceCount={market.sourceCount} lastUpdated={market.lastUpdated} note="TMX data is mock" />
    </DashboardWidget>
  );
}
