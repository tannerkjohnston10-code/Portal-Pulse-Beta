import Link from "next/link";
import { Sparkles, Volume2 } from "lucide-react";
import type { AthenaDailyBriefing } from "@/platform/athena/briefings/briefing-types";
import type { AgentFinding } from "@/platform/athena/types/athena-types";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import { TrustFooter } from "@/components/command-center/trust-footer";
import { WidgetToolbar } from "@/components/command-center/widget-toolbar";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function AthenaNetworkWidget({
  finding,
  onlineAgents,
  briefing
}: {
  finding?: AgentFinding;
  onlineAgents: number;
  briefing: AthenaDailyBriefing;
}) {
  return (
    <DashboardWidget title="Athena Network" subtitle="Mock AI analysts proposing findings for Intelligence Core review." icon={Sparkles} span={4} toolbar={<WidgetToolbar />}>
      <div className="rounded-lg border border-cyan-300/15 bg-cyan-300/10 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Today&apos;s AI briefing</p>
            <h3 className="mt-2 text-lg font-black text-white">{briefing.title}</h3>
          </div>
          <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-xs font-black uppercase tracking-wide text-emerald-200">
            {onlineAgents} online
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300">{briefing.headlineSummary}</p>
      </div>
      <div className="mt-3 grid gap-2">
        {briefing.items.slice(0, 3).map((item) => (
          <div key={item.id} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-black text-white">{item.title}</p>
              <ConfidenceBadge level={item.confidence} />
            </div>
            <p className="mt-1 text-xs font-semibold leading-5 text-slate-400">{item.summary}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-bold text-slate-400">
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">{briefing.confidenceAverage}% avg confidence</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">{briefing.sourceCount} mock sources</span>
        <button disabled className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-slate-500">
          <Volume2 size={13} aria-hidden />
          Audio placeholder
        </button>
      </div>
      {finding && (
        <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.03] p-3">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-black uppercase tracking-wide text-slate-400">Top mock finding</span>
            <ConfidenceBadge level={finding.proposedConfidence} />
          </div>
          <p className="mt-2 text-sm font-bold leading-6 text-white">{finding.summary}</p>
        </div>
      )}
      <Link href="/athena" className="mt-4 inline-flex min-h-10 items-center justify-center rounded-md border border-cyan-300/25 bg-cyan-300/10 px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/15">
        Open Athena
      </Link>
      <TrustFooter confidence="medium" confidenceScore={briefing.confidenceAverage} sourceCount={briefing.sourceCount} lastUpdated={briefing.lastUpdated} note="Core-gated briefing" />
    </DashboardWidget>
  );
}
