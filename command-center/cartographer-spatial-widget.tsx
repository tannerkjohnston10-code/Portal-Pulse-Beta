import Link from "next/link";
import { MapPinned } from "lucide-react";
import type { CartographerFinding } from "@/platform/maps/core/map-types";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import { TrustFooter } from "@/components/command-center/trust-footer";
import { WidgetToolbar } from "@/components/command-center/widget-toolbar";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function CartographerSpatialWidget({ finding }: { finding: CartographerFinding }) {
  return (
    <DashboardWidget title="Cartographer" subtitle="Mock spatial intelligence from graph-backed relationships." icon={MapPinned} span={4} toolbar={<WidgetToolbar />}>
      <div className="rounded-lg border border-cyan-300/15 bg-cyan-300/10 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Hottest transfer region</p>
            <h3 className="mt-2 text-lg font-black text-white">{finding.hottestTransferRegion}</h3>
          </div>
          <ConfidenceBadge level={finding.confidence} />
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300">{finding.geographicTrendSummary}</p>
      </div>
      <div className="mt-3 grid gap-2 text-xs font-bold text-slate-300">
        <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">Most active conference: {finding.mostActiveConference}</div>
        <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">Strongest pipeline: {finding.strongestRecruitingPipeline}</div>
      </div>
      <Link href="/maps" className="mt-4 inline-flex min-h-10 items-center justify-center rounded-md border border-cyan-300/25 bg-cyan-300/10 px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/15">
        Open Maps
      </Link>
      <TrustFooter confidence={finding.confidence} sourceCount={finding.sourceCount} lastUpdated="2026-06-28T17:30:00.000Z" note="Spatial intelligence is mock" />
    </DashboardWidget>
  );
}

