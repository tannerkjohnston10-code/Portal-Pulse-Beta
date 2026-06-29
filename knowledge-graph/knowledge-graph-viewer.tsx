import type { GraphNetwork } from "@/platform/knowledge-graph/core/graph-types";
import { EntityNodeCard } from "@/components/knowledge-graph/entity-node-card";
import { GraphLegend } from "@/components/knowledge-graph/graph-legend";
import { MiniRelationshipMap } from "@/components/knowledge-graph/mini-relationship-map";
import { RelationshipEdgeCard } from "@/components/knowledge-graph/relationship-edge-card";

export function KnowledgeGraphViewer({ network }: { network: GraphNetwork }) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Graph viewer</p>
          <h2 className="mt-2 text-2xl font-black text-white">{network.title}</h2>
        </div>
        <GraphLegend />
      </div>
      <div className="mt-5 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <MiniRelationshipMap network={network} />
        <div className="grid gap-3">
          {network.entities.slice(0, 4).map((entity) => <EntityNodeCard key={entity.id} entity={entity} />)}
        </div>
      </div>
      <div className="mt-5 grid gap-3 lg:grid-cols-2">
        {network.relationships.slice(0, 4).map((relationship) => <RelationshipEdgeCard key={relationship.id} relationship={relationship} />)}
      </div>
    </section>
  );
}

