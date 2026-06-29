import type { GMTransferPortfolioItem } from "@/platform/gm-workspace/dashboard/gm-workspace-types";
import { GMCard } from "@/components/gm-workspace/gm-card";

const statusLabels: Record<GMTransferPortfolioItem["portfolioStatus"], string> = {
  high_priority: "High Priority",
  development_target: "Development Target",
  immediate_contributor: "Immediate Contributor",
  future_fit: "Future Fit",
  monitoring: "Monitoring",
  committed_elsewhere_placeholder: "Committed Elsewhere Placeholder"
};

export function TransferPortfolio({ portfolio }: { portfolio: GMTransferPortfolioItem[] }) {
  return (
    <GMCard eyebrow="Transfer Portfolio" title="Strategic Transfer Board">
      <div className="grid gap-4 lg:grid-cols-3">
        {portfolio.map((item) => (
          <article key={item.id} className="rounded-md border border-white/10 bg-slate-950/70 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-base font-black text-white">{item.playerName}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{item.position} · {statusLabels[item.portfolioStatus]}</p>
              </div>
              <span className="rounded-md border border-emerald-300/20 bg-emerald-300/10 px-2 py-1 text-sm font-black text-emerald-100">{item.transferFitScore}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.programNeed}</p>
            <p className="mt-2 text-xs leading-5 text-slate-500">{item.rosterImpact}</p>
            <p className="mt-3 text-[10px] font-black uppercase tracking-[0.14em] text-cyan-200">{item.confidence} confidence · Mock evidence</p>
          </article>
        ))}
      </div>
    </GMCard>
  );
}
