import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Activity, Radio, ShieldCheck, TrendingUp, Users } from "lucide-react";
import type { CommandCenterSnapshot } from "@/types/command-center";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { TrustNotice } from "@/components/ui/trust-notice";

export function CommandCenterLayout({ snapshot, children }: { snapshot: CommandCenterSnapshot; children: ReactNode }) {
  return (
    <div className="mx-auto grid max-w-[1600px] gap-5 px-4 py-5 sm:px-6 lg:px-8">
      <MockDataNotice />
      <section className="overflow-hidden rounded-lg border border-white/10 bg-slate-950/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="grid gap-5 p-5 lg:grid-cols-[1fr_28rem]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Mission Control</p>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-5xl">College athletics intelligence in one living dashboard.</h2>
            <p className="mt-4 max-w-3xl text-sm font-semibold leading-7 text-slate-300">
              Track what happened, what changed, why it matters, how confident we are, and what deserves the next click. Every module is prepared for source-backed claims, timestamps, and confidence scoring.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <SnapshotMetric icon={Radio} label="Breaking updates" value={snapshot.breakingUpdates.toString()} />
            <SnapshotMetric icon={TrendingUp} label="Market movers" value={snapshot.marketMovers.toString()} />
            <SnapshotMetric icon={Users} label="Teams tracked" value={snapshot.teamsTracked.toString()} />
            <SnapshotMetric icon={ShieldCheck} label="Avg confidence" value={`${snapshot.confidenceAverage}%`} />
          </div>
        </div>
        <div className="border-t border-white/10 bg-white/[0.03] px-5 py-3">
          <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-wide text-slate-400">
            <span className="inline-flex items-center gap-2 text-emerald-300"><Activity size={14} aria-hidden /> Mock live mode</span>
            <span>Polling, SSE, and WebSocket hooks reserved</span>
            <span>Generated {snapshot.generatedAt}</span>
          </div>
        </div>
      </section>
      <TrustNotice />
      {children}
    </div>
  );
}

function SnapshotMetric({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</span>
        <Icon size={16} className="text-cyan-300" aria-hidden />
      </div>
      <p className="mt-3 text-3xl font-black text-white">{value}</p>
    </div>
  );
}
