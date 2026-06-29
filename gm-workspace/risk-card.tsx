import type { ExecutivePriority } from "@/platform/gm-workspace/dashboard/gm-workspace-types";

export function RiskCard({ item }: { item: ExecutivePriority }) {
  return (
    <article className="rounded-md border border-red-300/20 bg-red-300/10 p-4">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-red-100">{item.priorityLevel} risk · {item.classification}</p>
      <h3 className="mt-2 text-lg font-black text-white">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-red-50">{item.summary}</p>
      <p className="mt-3 text-xs font-bold text-red-100">{item.confidence} confidence · {item.evidencePlaceholder}</p>
    </article>
  );
}
