import { Activity, BarChart3, Flame, Radio, TrendingUp } from "lucide-react";
import Link from "next/link";
import { ConferenceMarketCard } from "@/components/market/conference-market-card";
import { MarketCommentaryCard } from "@/components/market/market-commentary-card";
import { MarketMetricCard } from "@/components/market/market-metric-card";
import { MarketMoverCard } from "@/components/market/market-mover-card";
import { MarketTimelineCard } from "@/components/market/market-timeline-card";
import { PositionMarketCard } from "@/components/market/position-market-card";
import { PageFrame } from "@/components/layout/page-frame";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { PortalPulsePlatform } from "@/platform";

export default function MarketPage() {
  const dashboard = PortalPulsePlatform.market.dashboard();
  const signalStrength = PortalPulsePlatform.market.signals.getSignalStrength();
  const liquidity = PortalPulsePlatform.market.liquidity.getInterestVolume();
  const heat = PortalPulsePlatform.market.trends.getHeatIndex();

  return (
    <PageFrame
      eyebrow="Transfer Market Exchange"
      title="TMX tracks movement, attention, momentum, demand, and confidence across the portal."
      description="Mercury explains the transfer market through source-aware mock signals. TMX is an analytical metaphor only and never treats athletes as financial assets."
    >
      <div className="grid gap-6">
        <MockDataNotice />

        <section className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Market summary</p>
                <h2 className="mt-2 text-3xl font-black text-white">{dashboard.snapshot.title}</h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
                  Heat index {dashboard.snapshot.heatIndex}, portal activity {dashboard.snapshot.portalActivityIndex}, transfer velocity {dashboard.snapshot.transferVelocity}. All values are fictional mock indicators.
                </p>
              </div>
              <ConfidenceBadge level={dashboard.snapshot.confidence} />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-4">
              {[
                ["Heat", dashboard.snapshot.heatIndex],
                ["Activity", dashboard.snapshot.portalActivityIndex],
                ["Velocity", dashboard.snapshot.transferVelocity],
                ["Confidence", dashboard.snapshot.marketConfidence]
              ].map(([label, value]) => (
                <div key={label} className="rounded-md border border-white/10 bg-white/[0.04] p-3">
                  <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
                  <p className="mt-1 text-2xl font-black text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <Flame className="text-amber-200" size={22} aria-hidden />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Heat index</p>
            <h3 className="mt-2 text-3xl font-black text-white">{heat.score}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{heat.explanation}</p>
          </div>

          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <Radio className="text-emerald-300" size={22} aria-hidden />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Signal strength</p>
            <h3 className="mt-2 text-3xl font-black text-white">{signalStrength.score}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{signalStrength.sourceCount} sources · {signalStrength.evidenceCount} evidence · Mock</p>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboard.metrics.map((metric) => <MarketMetricCard key={metric.id} metric={metric} />)}
        </section>

        <MarketCommentaryCard commentary={dashboard.commentary[0]} />

        <section className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Trending players</p>
            <div className="mt-4 grid gap-3">
              {dashboard.trendingPlayers.map((mover) => (
                <div key={mover.id} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-sm font-black text-white">{mover.label}</p>
                  <p className="mt-1 text-xs font-bold text-slate-500">{mover.context} · {mover.delta > 0 ? "+" : ""}{mover.delta} · Mock</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Trending teams</p>
            <div className="mt-4 grid gap-3">
              {dashboard.trendingTeams.map((mover) => (
                <div key={mover.id} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-sm font-black text-white">{mover.label}</p>
                  <p className="mt-1 text-xs font-bold text-slate-500">{mover.context} · {mover.delta > 0 ? "+" : ""}{mover.delta} · Mock</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Prediction movers</p>
            <div className="mt-4 grid gap-3">
              {dashboard.predictionMovers.map((mover) => (
                <div key={mover.id} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-sm font-black text-white">{mover.label}</p>
                  <p className="mt-1 text-xs font-bold text-slate-500">Projection only · {mover.delta > 0 ? "+" : ""}{mover.delta} · Mock</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <TrendingUp className="text-cyan-200" size={18} aria-hidden />
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Today's movers</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {dashboard.movers.map((mover) => <MarketMoverCard key={mover.id} mover={mover} />)}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Market movers board</p>
            <div className="mt-4 grid gap-3">
              {[
                ["Biggest riser", dashboard.movers.find((mover) => mover.category === "biggest_riser")?.label],
                ["Biggest faller", dashboard.movers.find((mover) => mover.category === "biggest_faller")?.label],
                ["Most active school", dashboard.movers.find((mover) => mover.category === "active_school")?.label],
                ["Most competitive", dashboard.movers.find((mover) => mover.category === "prediction_change")?.label],
                ["Most active conference", dashboard.movers.find((mover) => mover.category === "active_conference")?.label],
                ["Highest confidence change", dashboard.movers.find((mover) => mover.category === "confidence_change")?.label ?? "Mock review pending"],
                ["Most watched player", dashboard.watchlist[0]?.label],
                ["Fastest prediction change", dashboard.predictionMovers[0]?.label]
              ].map(([label, value]) => (
                <div key={label} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
                  <p className="mt-1 text-sm font-black text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <BarChart3 className="text-cyan-200" size={18} aria-hidden />
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Conference activity</p>
            </div>
            <div className="grid gap-4">
              {dashboard.conferences.map((market) => <ConferenceMarketCard key={market.id} market={market} />)}
            </div>
          </div>
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Activity className="text-cyan-200" size={18} aria-hidden />
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Position markets</p>
            </div>
            <div className="grid gap-4">
              {dashboard.positions.map((market) => (
                <Link key={market.id} href={`/market/positions/${market.id.replace("mock-position-", "")}`} className="block">
                  <PositionMarketCard market={market} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Interest leaders</p>
            <p className="mt-2 text-3xl font-black text-white">{liquidity.score}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">{liquidity.explanation}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Source activity</p>
            <p className="mt-2 text-3xl font-black text-white">{dashboard.snapshot.sourceActivity}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Mock Sentinel-style intake volume feeding Mercury market analysis.</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Watchlist activity</p>
            <p className="mt-2 text-3xl font-black text-white">{dashboard.watchlist.length}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">{PortalPulsePlatform.market.watchlists.getWatchlistActivity().summary}</p>
          </div>
        </section>

        <section>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Market timeline</p>
          <div className="grid gap-4">
            {dashboard.timeline.map((event) => <MarketTimelineCard key={event.id} event={event} />)}
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
