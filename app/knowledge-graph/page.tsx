import { BookOpen, Network, ShieldCheck } from "lucide-react";
import { KnowledgeGraphViewer } from "@/components/knowledge-graph/knowledge-graph-viewer";
import { NetworkSummaryCard } from "@/components/knowledge-graph/network-summary-card";
import { RelationshipEdgeCard } from "@/components/knowledge-graph/relationship-edge-card";
import { PageFrame } from "@/components/layout/page-frame";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { PortalPulsePlatform } from "@/platform";

export default function KnowledgeGraphPage() {
  const overview = PortalPulsePlatform.knowledgeGraph.overview();
  const playerNetwork = PortalPulsePlatform.knowledgeGraph.findPlayerNetwork("graph-player-alpha");
  const teamNetwork = PortalPulsePlatform.knowledgeGraph.findTeamNetwork("graph-team-state");
  const coachNetwork = PortalPulsePlatform.knowledgeGraph.findCoachNetwork("graph-coach-river");
  const strongest = PortalPulsePlatform.knowledgeGraph.findStrongestRelationships("graph-player-alpha");
  const weak = PortalPulsePlatform.knowledgeGraph.findWeakOrConflictingRelationships("graph-player-alpha");
  const librarianFinding = PortalPulsePlatform.athena.librarian.proposeRelationships();

  return (
    <PageFrame
      eyebrow="Knowledge Graph"
      title="Relationship intelligence for college athletics."
      description="The Portal Pulse Knowledge Graph connects players, teams, schools, coaches, claims, sources, predictions, visits, and timelines. Mock and inferred relationships are clearly labeled and must be Core-gated."
    >
      <div className="grid gap-6">
        <MockDataNotice />
        <section className="grid gap-4 md:grid-cols-4">
          {[
            ["Entities", overview.entityCount],
            ["Relationships", overview.relationshipCount],
            ["Inferred", overview.inferredCount],
            ["Conflicting", overview.conflictingCount]
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{label}</p>
              <p className="mt-2 text-3xl font-black text-white">{value}</p>
            </div>
          ))}
        </section>

        <KnowledgeGraphViewer network={playerNetwork} />

        <section className="grid gap-4 lg:grid-cols-3">
          <NetworkSummaryCard network={playerNetwork} />
          <NetworkSummaryCard network={teamNetwork} />
          <NetworkSummaryCard network={coachNetwork} />
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <div className="flex items-center gap-3">
              <Network className="text-emerald-300" size={20} aria-hidden />
              <h2 className="text-xl font-black text-white">Strongest relationships</h2>
            </div>
            <div className="mt-4 grid gap-3">
              {strongest.slice(0, 4).map((item) => <RelationshipEdgeCard key={item.relationship.id} relationship={item.relationship} />)}
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-amber-200" size={20} aria-hidden />
              <h2 className="text-xl font-black text-white">Weak or conflicting relationships</h2>
            </div>
            <div className="mt-4 grid gap-3">
              {weak.slice(0, 4).map((item) => <RelationshipEdgeCard key={item.relationship.id} relationship={item.relationship} />)}
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5">
          <div className="flex items-start gap-3">
            <BookOpen className="mt-1 text-cyan-100" size={22} aria-hidden />
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Librarian finding</p>
              <h2 className="mt-2 text-2xl font-black text-white">{librarianFinding.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{librarianFinding.summary}</p>
              <p className="mt-3 text-xs font-bold text-slate-400">{librarianFinding.proposedRelationshipIds.length} proposed · {librarianFinding.weakRelationshipIds.length} weak/conflicting · submitted to Core</p>
            </div>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}

