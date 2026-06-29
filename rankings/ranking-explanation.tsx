import { Info } from "lucide-react";
import type { AnyRankingItem } from "@/types/rankings";

export function RankingExplanation({ item }: { item: AnyRankingItem }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.04] p-3">
      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-cyan-300">
        <Info size={14} aria-hidden />
        Why this ranking exists
      </div>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-300">{item.explanation}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {item.factors.map((factor) => (
          <span key={factor.label} className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-bold text-slate-300">
            {factor.label}: {factor.value}
          </span>
        ))}
      </div>
    </div>
  );
}
