import type { MarketCommentary } from "@/platform/market/exchange/market-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function MarketCommentaryCard({ commentary }: { commentary: MarketCommentary }) {
  return (
    <article className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Mercury commentary</p>
          <h3 className="mt-2 text-xl font-black text-white">{commentary.summary}</h3>
        </div>
        <ConfidenceBadge level={commentary.confidence} />
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-md border border-white/10 bg-white/[0.04] p-3">
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">What changed</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-200">{commentary.whatChanged}</p>
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.04] p-3">
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">What to watch</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-200">{commentary.whatToWatch}</p>
        </div>
      </div>
      <p className="mt-3 text-xs font-bold text-slate-500">{commentary.evidence.length} evidence links · Core submitted · Mock</p>
    </article>
  );
}

