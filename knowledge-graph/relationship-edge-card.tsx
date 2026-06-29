import type { GraphRelationship } from "@/platform/knowledge-graph/core/graph-types";
import { RelationshipStrengthBadge } from "@/components/knowledge-graph/relationship-strength-badge";

export function RelationshipEdgeCard({ relationship }: { relationship: GraphRelationship }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-black text-white">{relationship.relationshipType.replaceAll("_", " ")}</h3>
        <RelationshipStrengthBadge relationship={relationship} />
      </div>
      <p className="mt-2 text-xs font-bold text-slate-500">{relationship.fromEntityId} -> {relationship.toEntityId}</p>
      <p className="mt-2 text-xs font-bold text-slate-400">{relationship.confidenceScore}% confidence · {relationship.evidenceIds.length} evidence · {relationship.status.replaceAll("_", " ")}</p>
    </article>
  );
}

