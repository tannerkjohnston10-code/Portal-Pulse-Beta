import type { InsightCategory } from "@/types/insights";

const categoryStyles: Record<InsightCategory, string> = {
  breaking: "border-cyan-300/30 bg-cyan-300/12 text-cyan-200",
  trending: "border-blue-300/30 bg-blue-300/12 text-blue-200",
  rising: "border-emerald-300/30 bg-emerald-300/12 text-emerald-200",
  falling: "border-rose-300/30 bg-rose-300/12 text-rose-200",
  risk: "border-orange-300/30 bg-orange-300/12 text-orange-200",
  opportunity: "border-lime-300/30 bg-lime-300/12 text-lime-200",
  conflict: "border-fuchsia-300/30 bg-fuchsia-300/12 text-fuchsia-200",
  prediction_shift: "border-violet-300/30 bg-violet-300/12 text-violet-200",
  roster_impact: "border-yellow-300/30 bg-yellow-300/12 text-yellow-100",
  nil_movement: "border-emerald-300/30 bg-emerald-300/12 text-emerald-200",
  conference_movement: "border-sky-300/30 bg-sky-300/12 text-sky-200",
  watchlist_alert: "border-white/20 bg-white/10 text-white"
};

export function InsightTypeBadge({ category }: { category: InsightCategory }) {
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-black uppercase tracking-wide ${categoryStyles[category]}`}>{category.replace("_", " ")}</span>;
}
