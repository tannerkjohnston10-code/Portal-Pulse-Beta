import Link from "next/link";
import { ClipboardList } from "lucide-react";
import type { AtlasFinding } from "@/platform/roster/core/roster-types";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import { TrustFooter } from "@/components/command-center/trust-footer";
import { WidgetToolbar } from "@/components/command-center/widget-toolbar";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function AtlasRosterWidget({ finding }: { finding: AtlasFinding }) {
  return (
    <DashboardWidget title="Atlas Roster" subtitle="Roster opportunity and simulation signals." icon={ClipboardList} span={4} toolbar={<WidgetToolbar />}>
      <div className="rounded-lg border border-amber-300/20 bg-amber-300/10 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-200">Top roster opportunity</p>
            <h3 className="mt-2 text-lg font-black text-white">{finding.topRosterOpportunity.title}</h3>
          </div>
          <ConfidenceBadge level={finding.confidence} />
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300">{finding.topRosterOpportunity.recommendedAction}</p>
      </div>
      <div className="mt-3 grid gap-2">
        <div className="rounded-md border border-white/10 bg-white/[0.03] p-3 text-xs font-bold text-slate-300">Biggest need: {finding.biggestTeamNeed.position} · {finding.biggestTeamNeed.urgency}</div>
        <div className="rounded-md border border-white/10 bg-white/[0.03] p-3 text-xs font-bold text-slate-300">Roster stability score: {finding.rosterStabilityScore}</div>
        <div className="rounded-md border border-white/10 bg-white/[0.03] p-3 text-xs font-bold text-slate-300">Suggested simulation: {finding.suggestedSimulation.title}</div>
      </div>
      <Link href="/team-builder" className="mt-4 inline-flex min-h-10 items-center justify-center rounded-md border border-amber-300/25 bg-amber-300/10 px-4 text-sm font-black text-amber-100 transition hover:bg-amber-300/15">
        Open Team Builder
      </Link>
      <TrustFooter confidence={finding.confidence} sourceCount={finding.evidenceCount} lastUpdated="2026-06-28T19:00:00.000Z" note="Atlas data is mock/simulated" />
    </DashboardWidget>
  );
}
