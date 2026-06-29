import { notFound } from "next/navigation";
import { MarketMetricCard } from "@/components/market/market-metric-card";
import { PositionMarketCard } from "@/components/market/position-market-card";
import { PageFrame } from "@/components/layout/page-frame";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { PortalPulsePlatform } from "@/platform";

export default async function PositionMarketPage({ params }: { params: Promise<{ position: string }> }) {
  const { position } = await params;
  const positions = PortalPulsePlatform.market.trends.getPositionMarkets();
  const market = positions.find((item) => item.id.endsWith(position) || item.position.toLowerCase().replaceAll(" ", "-") === position);

  if (!market) {
    notFound();
  }

  const dashboard = PortalPulsePlatform.market.dashboard();

  return (
    <PageFrame
      eyebrow="Position Market"
      title={`${market.position} market intelligence`}
      description="Position markets explain activity, scarcity, demand, movement, and confidence using fictional mock data only."
    >
      <div className="grid gap-6">
        <MockDataNotice />
        <PositionMarketCard market={market} />
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboard.metrics.map((metric) => <MarketMetricCard key={metric.id} metric={metric} />)}
        </section>
        <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Future position market modules</p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {["Player supply", "Team demand", "Historical scarcity"].map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                <p className="text-sm font-black text-white">{item}</p>
                <p className="mt-1 text-xs font-bold text-slate-500">Mock placeholder · Core-gated future intelligence</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageFrame>
  );
}

