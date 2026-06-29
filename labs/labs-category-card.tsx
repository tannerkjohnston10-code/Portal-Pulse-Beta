import type { LabSimulationCategory } from "@/platform/labs/core/labs-types";

export function LabsCategoryCard({ category }: { category: LabSimulationCategory }) {
  const statusLabel = category.status.replace("_", " ");

  return (
    <article className="rounded-lg border border-white/10 bg-slate-900/80 p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/30">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-black text-white">{category.title}</h3>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-wide text-slate-300">{statusLabel}</span>
      </div>
      <p className="mt-3 text-sm font-semibold leading-6 text-slate-300">{category.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {category.labels.map((label) => (
          <span key={label} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-[11px] font-black uppercase tracking-wide text-cyan-100">
            {label}
          </span>
        ))}
      </div>
      <p className="mt-4 text-xs font-semibold leading-5 text-slate-500">Related: {category.relatedSystems.join(", ")}</p>
    </article>
  );
}
