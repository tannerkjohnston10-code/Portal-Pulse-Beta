import { History, Rewind } from "lucide-react";
import { DateSelectorPlaceholder } from "@/components/replay/date-selector-placeholder";
import { PredictionAccuracyCard } from "@/components/replay/prediction-accuracy-card";
import { ReplayEventCard } from "@/components/replay/replay-event-card";
import { SnapshotComparisonCard } from "@/components/replay/snapshot-comparison-card";
import { TimelineScrubber } from "@/components/replay/timeline-scrubber";
import { PageFrame } from "@/components/layout/page-frame";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { PortalPulsePlatform } from "@/platform";

export default function ReplayPage() {
  const dashboard = PortalPulsePlatform.history.replayDashboard();
  const finding = dashboard.apolloFinding;

  return (
    <PageFrame
      eyebrow="Apollo"
      title="Historical replay for what Portal Pulse knew, when it knew it, and what changed."
      description="Apollo preserves historical snapshots without rewriting them. Replay distinguishes known then, known now, predicted then, and what happened later."
    >
      <div className="grid gap-6">
        <MockDataNotice />

        <section className="grid gap-4 lg:grid-cols-[1fr_22rem]">
          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <div className="flex items-start gap-3">
              <Rewind className="mt-1 text-cyan-200" size={22} aria-hidden />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Replay dashboard</p>
                <h2 className="mt-2 text-2xl font-black text-white">{finding.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{finding.summary}</p>
              </div>
            </div>
          </div>
          <DateSelectorPlaceholder />
        </section>

        <TimelineScrubber events={dashboard.playerReplay.events} />

        <section className="grid gap-4 md:grid-cols-4">
          {[
            ["Player snapshots", dashboard.playerReplay.snapshots.length],
            ["Team snapshots", dashboard.teamReplay.snapshots.length],
            ["Prediction records", dashboard.accuracy.results.length],
            ["Mock accuracy", `${dashboard.accuracy.mockAccuracyRate}%`]
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{label}</p>
              <p className="mt-2 text-3xl font-black text-white">{value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <SnapshotComparisonCard comparison={dashboard.comparison} />
          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <History className="text-cyan-200" size={22} aria-hidden />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">What actually happened later</p>
            <h2 className="mt-2 text-xl font-black text-white">Placeholder outcome comparison</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">No real outcome exists in mock mode. Future Apollo will compare verified outcomes against archived predictions without rewriting old snapshots.</p>
          </div>
        </section>

        <section>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Player movement over time</p>
          <div className="grid gap-4">
            {dashboard.playerReplay.events.map((event) => <ReplayEventCard key={event.id} event={event} />)}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Team ranking movement</p>
            <h2 className="mt-2 text-xl font-black text-white">{dashboard.rankingHistory.movementSummary}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">Ranking snapshots are preserved as historical records, not overwritten summaries.</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Confidence movement</p>
            <h2 className="mt-2 text-xl font-black text-white">{finding.thisWeekVsLastWeek}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">Confidence at time remains attached to each snapshot.</p>
          </div>
        </section>

        <section>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-amber-200">Prediction movement and accuracy</p>
          <div className="grid gap-4 lg:grid-cols-2">
            {dashboard.accuracy.results.map((result) => <PredictionAccuracyCard key={result.id} result={result} />)}
          </div>
        </section>
      </div>
    </PageFrame>
  );
}

