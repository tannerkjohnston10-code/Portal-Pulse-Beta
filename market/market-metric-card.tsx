import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import type { MarketMetric } from "@/platform/market/exchange/market-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function MarketMetricCard({ metric }: { metric: MarketMetric }) {
  const Icon = metric.direction === "up" ? ArrowUpRight : metric.direction === "down" ? ArrowDownRight : ArrowRight;
  const tone = metric.direction === "up" ? "text-emerald-300" : metric.direction === "down" ? "text-rose-300" : "text-slate-300";

  return (
    <article className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{metric.label}</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-3xl font-black text-white">{metric.value}</span>
            <span className={`inline-flex items-center gap-1 text-sm font-black ${tone}`}>
              <Icon size={16} aria-hidden />
              {metric.value - metric.previousValue > 0 ? "+" : ""}
              {metric.value - metric.previousValue}
            </span>
          </div>
        </div>
        <ConfidenceBadge level={metric.confidence} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-400">{metric.explanation}</p>
      <p className="mt-3 text-xs font-bold text-slate-500">{metric.evidenceCount} evidence · {metric.sourceCount} sources · Mock</p>
    </article>
  );
}

