import type { ExecutivePriority } from "@/platform/gm-workspace/dashboard/gm-workspace-types";

export function OpportunityCard({ item }: { item: ExecutivePriority }) {
  return (
    <article className="rounded-md border border-emerald-300/20 bg-emerald-300/10 p-4">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-100">{item.priorityLevel} opportunity · {item.classification}</p>
      <h3 className="mt-2 text-lg font-black text-white">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-emerald-50">{item.summary}</p>
      <p className="mt-3 text-xs font-bold text-emerald-100">{item.confidence} confidence · {item.evidencePlaceholder}</p>
    </article>
  );
}
