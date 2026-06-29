import type { ReactNode } from "react";
import type { RealtimeDashboardSnapshot } from "@/platform/realtime/core/realtime-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

function statusClass(status: string) {
  if (status.includes("completed") || status.includes("healthy") || status.includes("published")) {
    return "border-emerald-300/25 bg-emerald-300/10 text-emerald-100";
  }

  if (status.includes("review") || status.includes("queued")) {
    return "border-amber-300/25 bg-amber-300/10 text-amber-100";
  }

  if (status.includes("failed") || status.includes("blocked")) {
    return "border-rose-300/25 bg-rose-300/10 text-rose-100";
  }

  return "border-slate-300/20 bg-slate-300/10 text-slate-100";
}

function Shell({ title, eyebrow, children }: { title: string; eyebrow?: string; children: ReactNode }) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-black/20">
      {eyebrow ? <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">{eyebrow}</p> : null}
      <h2 className="mt-2 text-lg font-black text-white">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function RealtimeDashboard({ snapshot }: { snapshot: RealtimeDashboardSnapshot }) {
  return (
    <div className="grid gap-6">
      <section className="grid gap-4 md:grid-cols-4">
        {[
          ["Pipeline Health", snapshot.status.pipelineHealth],
          ["Review Queue", `${snapshot.status.reviewQueueSize} items`],
          ["Avg Confidence", `${snapshot.status.averageConfidence}%`],
          ["Event Volume", `${snapshot.status.eventVolumeLastHour}/hr`]
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
            <p className="mt-2 text-2xl font-black text-white">{value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Shell eyebrow="Source Intake" title="Compliant Source Registry">
          <div className="grid gap-3">
            {snapshot.sources.map((source) => (
              <article key={source.id} className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-black text-white">{source.name}</h3>
                    <p className="mt-1 text-xs text-slate-500">{source.sourceType.replaceAll("_", " ")} · every {source.pollingIntervalMinutes} min</p>
                  </div>
                  <span className={`rounded-full border px-2.5 py-1 text-xs font-black uppercase tracking-[0.12em] ${statusClass(source.complianceStatus)}`}>
                    {source.complianceStatus.replaceAll("_", " ")}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
                  <span>Reliability {source.reliabilityScore}</span>
                  <span>Sports {source.sportIds.join(", ")}</span>
                  <span>{source.enabled ? "Enabled" : "Disabled"}</span>
                </div>
              </article>
            ))}
          </div>
        </Shell>

        <Shell eyebrow="Pipeline Flow" title="Real-Time Stage Status">
          <div className="grid gap-2">
            {snapshot.pipelineStages.map((stage, index) => (
              <div key={stage.stage} className="grid gap-3 rounded-md border border-white/10 bg-white/[0.03] p-3 md:grid-cols-[2rem_0.55fr_1fr] md:items-center">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-xs font-black text-cyan-100">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-black text-white">{stage.stage.replaceAll("_", " ")}</p>
                  <span className={`mt-2 inline-flex rounded-full border px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] ${statusClass(stage.status)}`}>
                    {stage.status.replaceAll("_", " ")}
                  </span>
                </div>
                <p className="text-sm leading-6 text-slate-400">{stage.details}</p>
              </div>
            ))}
          </div>
        </Shell>
      </section>

      <Shell eyebrow="Claim Candidate Stream" title="Reviewable Intelligence Candidates">
        <div className="grid gap-4 lg:grid-cols-3">
          {snapshot.claimCandidates.map((candidate) => (
            <article key={candidate.id} className="rounded-md border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{candidate.claimType.replaceAll("_", " ")}</p>
                  <h3 className="mt-2 text-base font-black text-white">{candidate.affectedAthlete ?? candidate.affectedProgram}</h3>
                </div>
                <ConfidenceBadge level={candidate.confidence} score={candidate.confidenceScore} />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">{candidate.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                <span>{candidate.affectedSport}</span>
                <span>{candidate.sourceIds.length} source(s)</span>
                <span>{candidate.evidenceIds.length} evidence item(s)</span>
                <span>{candidate.status.replaceAll("_", " ")}</span>
              </div>
            </article>
          ))}
        </div>
      </Shell>

      <section className="grid gap-6 xl:grid-cols-2">
        <Shell eyebrow="Event Bus" title="Recent Pipeline Events">
          <div className="grid gap-3">
            {snapshot.events.map((event) => (
              <div key={event.id} className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.03] p-3">
                <div>
                  <p className="text-sm font-black text-white">{event.eventName}</p>
                  <p className="text-xs text-slate-500">{event.entityLabel} · {event.sourceCount} source(s)</p>
                </div>
                <span className={`rounded-full border px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] ${statusClass(event.status)}`}>
                  {event.status.replaceAll("_", " ")}
                </span>
              </div>
            ))}
          </div>
        </Shell>

        <Shell eyebrow="Admin Review" title="Review Queue Summary">
          <div className="grid gap-3">
            {snapshot.reviewQueue.map((item) => (
              <article key={item.id} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-black text-white">{item.reason.replaceAll("_", " ")}</p>
                  <span className={`rounded-full border px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] ${statusClass(item.priority)}`}>{item.priority}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.summary}</p>
              </article>
            ))}
          </div>
        </Shell>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <Shell title="Conflicts Detected" eyebrow="Trust Gate">
          <div className="grid gap-3">
            {snapshot.conflicts.map((conflict) => (
              <article key={conflict.id} className="rounded-md border border-rose-300/20 bg-rose-300/10 p-3">
                <p className="text-sm font-black text-rose-50">{conflict.conflictType.replaceAll("_", " ")}</p>
                <p className="mt-2 text-sm leading-6 text-rose-100/80">{conflict.summary}</p>
              </article>
            ))}
          </div>
        </Shell>

        <Shell title="Alert Queue" eyebrow="No Delivery Yet">
          <div className="grid gap-3">
            {snapshot.alerts.map((alert) => (
              <article key={alert.id} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                <p className="text-sm font-black text-white">{alert.title}</p>
                <p className="mt-1 text-xs text-slate-500">{alert.alertType.replaceAll("_", " ")} · {alert.destination.replaceAll("_", " ")}</p>
              </article>
            ))}
          </div>
        </Shell>

        <Shell title="Monitoring" eyebrow="Operations">
          <div className="grid gap-3 text-sm text-slate-300">
            <div className="flex justify-between"><span>Freshness</span><strong>{snapshot.status.sourceFreshnessMinutes} min</strong></div>
            <div className="flex justify-between"><span>Latency</span><strong>{snapshot.status.processingLatencyMs} ms</strong></div>
            <div className="flex justify-between"><span>Duplicate Rate</span><strong>{Math.round(snapshot.status.duplicateRate * 100)}%</strong></div>
            <div className="flex justify-between"><span>Conflict Rate</span><strong>{Math.round(snapshot.status.conflictRate * 100)}%</strong></div>
            <div className="flex justify-between"><span>Failed Jobs</span><strong>{snapshot.status.failedJobs}</strong></div>
          </div>
        </Shell>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <Shell eyebrow="Knowledge Graph" title="Update Proposals">
          <div className="grid gap-3">
            {snapshot.knowledgeGraphProposals.map((proposal) => (
              <article key={proposal.id} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                <p className="text-sm font-black text-white">{proposal.id}</p>
                <p className="mt-2 text-sm text-slate-400">Nodes: {proposal.proposedNodes.join(", ")}</p>
                <p className="mt-1 text-xs text-amber-100">Core approval required. Auto-publish blocked.</p>
              </article>
            ))}
          </div>
        </Shell>

        <Shell eyebrow="AI Network" title="Agent Notifications">
          <div className="grid gap-3">
            {snapshot.agentNotifications.map((agent) => (
              <article key={agent.agentName} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-black text-white">{agent.agentName}</p>
                  <span className="text-xs font-black uppercase tracking-[0.12em] text-cyan-200">{agent.status.replaceAll("_", " ")}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">{agent.responsibility}</p>
              </article>
            ))}
          </div>
        </Shell>
      </section>

      <Shell eyebrow="Dashboard Distribution" title="Prepared Refresh Targets">
        <div className="flex flex-wrap gap-2">
          {snapshot.distributionTargets.map((target) => (
            <span key={target} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-cyan-100">
              {target.replaceAll("_", " ")}
            </span>
          ))}
        </div>
      </Shell>
    </div>
  );
}
