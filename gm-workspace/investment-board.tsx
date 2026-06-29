import type { InvestmentBoardItem } from "@/platform/gm-workspace/dashboard/gm-workspace-types";
import { GMCard } from "@/components/gm-workspace/gm-card";

export function InvestmentBoard({ items }: { items: InvestmentBoardItem[] }) {
  return (
    <GMCard eyebrow="Asset Management" title="Roster Investment Board">
      <div className="grid gap-3">
        {items.map((item) => (
          <div key={item.id} className="grid gap-3 rounded-md border border-white/10 bg-slate-950/70 p-4 md:grid-cols-[1fr_0.8fr_0.5fr] md:items-center">
            <div>
              <p className="text-sm font-black text-white">{item.title}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{item.assetType.replaceAll("_", " ")}</p>
            </div>
            <p className="text-sm font-semibold text-slate-300">{item.expectedValue}</p>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-200">{item.risk} risk</p>
          </div>
        ))}
      </div>
    </GMCard>
  );
}
