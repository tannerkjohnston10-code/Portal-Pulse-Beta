import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import type { MarketMover } from "@/platform/market/exchange/market-types";
import { Sparkline } from "@/components/command-center/sparkline";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function MarketMoverCard({ mover }: { mover: MarketMover }) {
  const Icon = mover.direction === "up" ? ArrowUpRight : mover.direction === "down" ? ArrowDownRight : ArrowRight;
  const tone = mover.direction === "up" ? "text-emerald-300" : mover.direction === "down" ? "text-rose-300" : "text-slate-300";

  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/30 hover:bg-cyan-300/5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">{mover.context}</p>
          <h3 className="mt-2 text-base font-black text-white">{mover.label}</h3>
        </div>
        <ConfidenceBadge level={mover.confidence} />
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <span className={`inline-flex items-center gap-1 text-2xl font-black ${tone}`}>
          <Icon size={19} aria-hidden />
          {mover.delta > 0 ? "+" : ""}
          {mover.delta}
        </span>
        <Sparkline values={mover.sparkline} tone={mover.direction === "down" ? "red" : "green"} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-400">{mover.explanation}</p>
      <p className="mt-3 text-xs font-bold text-slate-500">{mover.evidenceCount} evidence · {mover.sourceCount} sources · Mock</p>
    </article>
  );
}

