import type { GraphRelationship } from "@/platform/knowledge-graph/core/graph-types";

export function RelationshipStrengthBadge({ relationship }: { relationship: GraphRelationship }) {
  const label = relationship.status === "disputed" ? "Conflicting" : relationship.isInferred ? "Inferred" : relationship.strengthScore >= 75 ? "Strong" : relationship.strengthScore >= 55 ? "Moderate" : "Weak";
  const tone = label === "Strong" ? "border-emerald-400/30 bg-emerald-400/12 text-emerald-300" : label === "Conflicting" ? "border-fuchsia-400/30 bg-fuchsia-400/12 text-fuchsia-200" : label === "Inferred" ? "border-amber-300/30 bg-amber-300/12 text-amber-200" : "border-slate-500/30 bg-slate-500/12 text-slate-300";
  return <span className={`rounded-full border px-2.5 py-1 text-xs font-black uppercase tracking-wide ${tone}`}>{label}</span>;
}

