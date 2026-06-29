import type { ConferenceMarket } from "@/platform/market/exchange/market-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function ConferenceMarketCard({ market }: { market: ConferenceMarket }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">Conference market</p>
          <h3 className="mt-2 text-lg font-black text-white">{market.conference}</h3>
        </div>
        <ConfidenceBadge level={market.confidence} />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-md border border-white/10 bg-white/[0.03] p-2">
          <p className="text-lg font-black text-white">{market.netGains}</p>
          <p className="text-xs font-bold text-slate-500">In</p>
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.03] p-2">
          <p className="text-lg font-black text-white">{market.netLosses}</p>
          <p className="text-xs font-bold text-slate-500">Out</p>
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.03] p-2">
          <p className="text-lg font-black text-white">{market.averageMomentum}</p>
          <p className="text-xs font-bold text-slate-500">Momentum</p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-400">{market.regionalActivity} {market.historicalComparison}</p>
      <p className="mt-3 text-xs font-bold text-slate-500">Top schools: {market.topSchools.join(", ")} · Mock</p>
    </article>
  );
}

