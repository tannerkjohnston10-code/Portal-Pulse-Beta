import { AlertTriangle, BookOpen, BrainCircuit, CheckCircle2, ClipboardList, History, MapPinned, MessageSquareText, Radio, Radar, ShieldCheck, Sparkles, TrendingUp, Volume2 } from "lucide-react";
import { AgentCard } from "@/components/athena/agent-card";
import { AgentFindingCard } from "@/components/athena/agent-finding-card";
import { PageFrame } from "@/components/layout/page-frame";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { PortalPulsePlatform } from "@/platform";

export default function AthenaPage() {
  const agents = PortalPulsePlatform.athena.agents();
  const status = PortalPulsePlatform.athena.networkStatus();
  const cioStatus = PortalPulsePlatform.athena.cioStatus();
  const findings = PortalPulsePlatform.athena.latestFindings();
  const briefing = PortalPulsePlatform.athena.briefing();
  const verifiedIntelligence = PortalPulsePlatform.athena.latestVerifiedMockIntelligence();
  const atlasFinding = PortalPulsePlatform.athena.atlas.getFinding();
  const oracleMover = PortalPulsePlatform.athena.oracle.getTopPredictionMover();
  const sentinelSnapshot = PortalPulsePlatform.athena.sentinel.getDashboardSnapshot();
  const mercuryFinding = PortalPulsePlatform.athena.mercury.getFinding();
  const librarianFinding = PortalPulsePlatform.athena.librarian.proposeRelationships();
  const cartographerFinding = PortalPulsePlatform.athena.cartographer.getFinding();
  const apolloFinding = PortalPulsePlatform.athena.apollo.getFinding();
  const suggestedQuestions = [
    "What changed overnight?",
    "Which teams are gaining portal momentum?",
    "Explain the biggest prediction mover.",
    "Which players should I watch today?",
    "Where is confidence low?"
  ];

  return (
    <PageFrame
      eyebrow="Athena Intelligence Network"
      title="AI analysts for source-backed college athletics intelligence."
      description="Athena is the future agent network for Portal Pulse. Agents may observe signals and propose findings, but the Intelligence Core verifies evidence, scores confidence, checks conflicts, and decides what can surface."
    >
      <div className="grid gap-6">
        <MockDataNotice />

        <section className="grid gap-4 lg:grid-cols-4">
          <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5 lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
                <Sparkles size={20} aria-hidden />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Network status</p>
                <h2 className="text-2xl font-black text-white">{status.status.replace("_", " ")}</h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              {status.onlineAgents} agents online, {status.standbyAgents} on standby, {status.reviewOnlyAgents} review-only. Athena status: {cioStatus.status.replaceAll("_", " ")}. Core approval is required for every surfaced output.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <Radio className="text-emerald-300" size={22} aria-hidden />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-slate-400">Daily briefing</p>
            <h3 className="mt-2 text-xl font-black text-white">{briefing.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{briefing.confidenceAverage}% avg confidence · {briefing.sourceCount} mock sources</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <ShieldCheck className="text-cyan-200" size={22} aria-hidden />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-slate-400">Constitution rule</p>
            <h3 className="mt-2 text-xl font-black text-white">No direct publish</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">Agents propose. Intelligence Core decides.</p>
          </div>
        </section>

        <section className="rounded-lg border border-amber-300/20 bg-slate-950/70 p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-200">Atlas roster analyst</p>
              <h2 className="mt-2 text-2xl font-black text-white">{atlasFinding.title}</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">{atlasFinding.summary} Atlas simulations are mock, projected, assumption-based, and submitted to the Intelligence Core.</p>
            </div>
            <ClipboardList className="text-amber-200" size={26} aria-hidden />
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-500">
            <span>{atlasFinding.biggestTeamNeed.position}: {atlasFinding.biggestTeamNeed.urgency}</span>
            <span>Stability {atlasFinding.rosterStabilityScore}</span>
            <span>{atlasFinding.suggestedSimulation.title}</span>
            <span>Core review pending</span>
            <span>Mock</span>
          </div>
        </section>

        <section className="rounded-lg border border-emerald-300/20 bg-slate-950/70 p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Mercury transfer market analyst</p>
              <h2 className="mt-2 text-2xl font-black text-white">{mercuryFinding.title}</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">{mercuryFinding.summary} Mercury explains market movement and submits commentary to the Intelligence Core.</p>
            </div>
            <TrendingUp className="text-emerald-300" size={26} aria-hidden />
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-500">
            <span>Heat index {mercuryFinding.heatIndex}</span>
            <span>{mercuryFinding.topMovers.join(", ")}</span>
            <span>{mercuryFinding.trendingConferences.join(", ")}</span>
            <span>Mock</span>
          </div>
        </section>

        <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Daily briefing</p>
              <h2 className="mt-2 text-2xl font-black text-white">{briefing.headlineSummary}</h2>
              <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-400">{briefing.confidenceSummary} Every item below is fictional mock data and references Core-gated evidence placeholders.</p>
            </div>
            <button disabled className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 text-sm font-black text-slate-400">
              <Volume2 size={16} aria-hidden />
              {briefing.audioButtonLabel}
            </button>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {briefing.items.map((item) => (
              <article key={item.id} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs font-black uppercase tracking-wide text-slate-500">{item.section.replaceAll("_", " ")}</p>
                  <ConfidenceBadge level={item.confidence} />
                </div>
                <h3 className="mt-3 text-base font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold text-slate-500">
                  <span>{item.evidenceCount} evidence</span>
                  <span>{item.sourceCount} sources</span>
                  <span>Mock</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-5">
            <CheckCircle2 className="text-emerald-300" size={22} aria-hidden />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Core approval status</p>
            <h2 className="mt-2 text-2xl font-black text-white">Verification gate active</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">Athena proposals are evaluated, safety-checked, and routed through Intelligence Core decisions before surfacing.</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5 lg:col-span-2">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Latest verified mock intelligence</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {verifiedIntelligence.slice(0, 4).map((item) => (
                <article key={item.id} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-black text-white">{item.title}</h3>
                    <ConfidenceBadge level={item.confidence} />
                  </div>
                  <p className="mt-2 text-xs font-semibold leading-5 text-slate-400">{item.summary}</p>
                  <p className="mt-2 text-xs font-bold text-slate-500">{item.evidenceCount} evidence · {item.sourceCount} sources · Core approved mock</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-cyan-300/20 bg-slate-950/70 p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Oracle prediction specialist</p>
              <h2 className="mt-2 text-2xl font-black text-white">{oracleMover.predictedOutcome}</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">Oracle prepares projection intelligence only. This mock output is routed through the Intelligence Core and cannot be treated as a reported outcome.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-right">
              <TrendingUp className="ml-auto text-emerald-300" size={20} aria-hidden />
              <p className="mt-2 text-3xl font-black text-white">{oracleMover.probability}%</p>
              <p className="text-xs font-black uppercase tracking-wide text-slate-500">mock projection</p>
            </div>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {oracleMover.topSupportingReasons.slice(0, 3).map((reason) => (
              <div key={reason} className="rounded-md border border-emerald-400/15 bg-emerald-400/10 p-3 text-sm font-bold leading-6 text-emerald-50">{reason}</div>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Apollo historical analyst</p>
              <h2 className="mt-2 text-2xl font-black text-white">{apolloFinding.title}</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">{apolloFinding.summary} Apollo preserves historical snapshots and submits replay findings to the Intelligence Core.</p>
            </div>
            <History className="text-cyan-200" size={26} aria-hidden />
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-500">
            <span>{apolloFinding.biggestHistoricalMover}</span>
            <span>{apolloFinding.predictionAccuracySnapshot}</span>
            <span>Mock</span>
          </div>
        </section>

        <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Cartographer spatial analyst</p>
              <h2 className="mt-2 text-2xl font-black text-white">{cartographerFinding.title}</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">{cartographerFinding.summary} Cartographer visualizes graph-backed relationships and submits geographic intelligence to the Core.</p>
            </div>
            <MapPinned className="text-cyan-200" size={26} aria-hidden />
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-500">
            <span>{cartographerFinding.hottestTransferRegion}</span>
            <span>{cartographerFinding.mostActiveConference}</span>
            <span>{cartographerFinding.strongestRecruitingPipeline}</span>
            <span>Mock</span>
          </div>
        </section>

        <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Librarian knowledge graph analyst</p>
              <h2 className="mt-2 text-2xl font-black text-white">{librarianFinding.title}</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">{librarianFinding.summary} Librarian proposes relationships, but the Intelligence Core determines publication readiness.</p>
            </div>
            <BookOpen className="text-cyan-200" size={26} aria-hidden />
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-500">
            <span>{librarianFinding.proposedRelationshipIds.length} proposed relationships</span>
            <span>{librarianFinding.weakRelationshipIds.length} weak/conflicting</span>
            <span>Core submitted</span>
            <span>Mock</span>
          </div>
        </section>

        <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Sentinel intake coordinator</p>
              <h2 className="mt-2 text-2xl font-black text-white">Public information pipeline control</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                Sentinel monitors approved mock source items, validates compliance, detects duplicates and conflicts, scores priority, creates claim candidates, and routes them toward the Intelligence Core or admin review. Sentinel never publishes directly.
              </p>
            </div>
            <Radar className="text-cyan-200" size={26} aria-hidden />
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-4 xl:grid-cols-7">
            {[
              ["Items monitored", sentinelSnapshot.itemsMonitored],
              ["New items", sentinelSnapshot.newSourceItems],
              ["Candidates", sentinelSnapshot.claimCandidates],
              ["Conflicts", sentinelSnapshot.conflictsDetected],
              ["Duplicates", sentinelSnapshot.duplicatesRemoved],
              ["Core review", sentinelSnapshot.awaitingCoreReview],
              ["Admin review", sentinelSnapshot.awaitingAdminReview]
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
                <p className="mt-1 text-2xl font-black text-white">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {sentinelSnapshot.recentRecords.map((record) => (
              <article key={record.id} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-black text-white">{record.sourceItem.title}</h3>
                  {record.conflict.conflictDetected && <AlertTriangle className="shrink-0 text-amber-200" size={16} aria-hidden />}
                </div>
                <p className="mt-2 text-xs font-semibold leading-5 text-slate-400">{record.sourceItem.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold text-slate-500">
                  <span>{record.priority.priorityLabel} · {record.priority.priorityScore}</span>
                  <span>{record.claimCandidate.routeTo.replaceAll("_", " ")}</span>
                  <span>Mock</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Ask Athena</p>
              <h2 className="mt-2 text-2xl font-black text-white">Conversational intelligence placeholder</h2>
            </div>
            <BrainCircuit className="text-cyan-200" size={24} aria-hidden />
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="athena-input">Ask Athena placeholder</label>
            <input
              id="athena-input"
              disabled
              placeholder="Ask Athena about portal movement, team needs, confidence, or sources..."
              className="min-h-12 flex-1 rounded-md border border-white/10 bg-slate-950 px-4 text-sm text-slate-300 placeholder:text-slate-500"
            />
            <button disabled className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 text-sm font-black text-slate-400">
              <MessageSquareText size={16} aria-hidden />
              Coming soon
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {suggestedQuestions.map((question) => (
              <button key={question} disabled className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-slate-400">
                {question}
              </button>
            ))}
          </div>
          <p className="mt-4 text-xs font-bold text-slate-500">Evidence-first reminder: Athena will answer only from approved intelligence, citations, confidence labels, and conflict status when conversational AI is enabled.</p>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Agent network</p>
              <h2 className="mt-2 text-2xl font-black text-white">Specialized analysts</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Latest mock findings</p>
            <h2 className="mt-2 text-2xl font-black text-white">Proposals awaiting Core judgment</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {findings.map((finding) => (
              <AgentFindingCard key={finding.id} finding={finding} />
            ))}
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
