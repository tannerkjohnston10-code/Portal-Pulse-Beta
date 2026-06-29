import type { ExecutiveBrief } from "@/platform/gm-workspace/dashboard/gm-workspace-types";
import { GMCard } from "@/components/gm-workspace/gm-card";

export function ExecutiveBriefCard({ brief }: { brief: ExecutiveBrief }) {
  const sections: Array<{ label: string; items: ExecutiveBrief["topPriorities"] }> = [
    { label: "Top priorities", items: brief.topPriorities },
    { label: "Critical risks", items: brief.criticalRisks },
    { label: "Emerging opportunities", items: brief.emergingOpportunities }
  ];

  return (
    <GMCard eyebrow="Executive Brief" title={brief.headline}>
      <div className="grid gap-4 lg:grid-cols-3">
        {sections.map((section) => (
          <div key={section.label} className="rounded-md border border-white/10 bg-slate-950/70 p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{section.label}</p>
            <div className="mt-3 grid gap-3">
              {section.items.map((item) => (
                <div key={item.id}>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-black text-white">{item.title}</p>
                    <span className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 text-[10px] font-black uppercase text-cyan-100">{item.confidence}</span>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{item.summary}</p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-600">{item.classification} · {item.evidencePlaceholder}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-md border border-amber-300/20 bg-amber-300/10 p-4 text-sm font-semibold leading-6 text-amber-50">
        {brief.aiExecutiveSummary}
      </div>
    </GMCard>
  );
}
