import Link from "next/link";
import { History } from "lucide-react";
import type { ApolloFinding } from "@/platform/history/snapshots/history-types";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import { TrustFooter } from "@/components/command-center/trust-footer";
import { WidgetToolbar } from "@/components/command-center/widget-toolbar";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function ApolloReplayWidget({ finding }: { finding: ApolloFinding }) {
  return (
    <DashboardWidget title="Apollo Replay" subtitle="Historical intelligence, not rewritten history." icon={History} span={4} toolbar={<WidgetToolbar />}>
      <div className="rounded-lg border border-cyan-300/15 bg-cyan-300/10 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Biggest historical mover</p>
            <h3 className="mt-2 text-lg font-black text-white">{finding.biggestHistoricalMover}</h3>
          </div>
          <ConfidenceBadge level={finding.confidence} />
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300">{finding.thisWeekVsLastWeek}</p>
      </div>
      <div className="mt-3 rounded-md border border-white/10 bg-white/[0.03] p-3 text-xs font-bold leading-5 text-slate-300">
        Accuracy snapshot: {finding.predictionAccuracySnapshot}
      </div>
      <Link href="/replay" className="mt-4 inline-flex min-h-10 items-center justify-center rounded-md border border-cyan-300/25 bg-cyan-300/10 px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/15">
        Open Replay
      </Link>
      <TrustFooter confidence={finding.confidence} sourceCount={finding.sourceCount} lastUpdated="2026-06-28T18:00:00.000Z" note="Historical replay is mock" />
    </DashboardWidget>
  );
}

