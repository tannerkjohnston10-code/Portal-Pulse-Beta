import type { PositionMarket } from "@/platform/market/exchange/market-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function PositionMarketCard({ market }: { market: PositionMarket }) {
  return (
    <article className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">{market.sport}</p>
          <h3 className="mt-2 text-xl font-black text-white">{market.position}</h3>
        </div>
        <ConfidenceBadge level={market.confidence} />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {[
          ["Activity", market.activityScore],
          ["Scarcity", market.scarcityScore],
          ["Demand", market.demandScore],
          ["Movement", market.movementScore]
        ].map(([label, value]) => (
          <div key={label} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
            <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
            <p className="mt-1 text-2xl font-black text-white">{value}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">{market.explanation}</p>
    </article>
  );
}

