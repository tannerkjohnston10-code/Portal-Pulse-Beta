import Link from "next/link";
import { Radar } from "lucide-react";
import type { SentinelDashboardSnapshot } from "@/platform/athena/agents/sentinel/types/sentinel-types";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import { TrustFooter } from "@/components/command-center/trust-footer";
import { WidgetToolbar } from "@/components/command-center/widget-toolbar";

export function SentinelIntakeWidget({ snapshot }: { snapshot: SentinelDashboardSnapshot }) {
  return (
    <DashboardWidget title="Sentinel Intake" subtitle="Mock information intake, dedupe, conflict, and priority routing." icon={Radar} span={4} toolbar={<WidgetToolbar />}>
      <div className="grid grid-cols-2 gap-3">
        {[
          ["Recent intake", snapshot.newSourceItems],
          ["Conflicts", snapshot.conflictsDetected],
          ["Duplicates", snapshot.duplicatesRemoved],
          ["Core queue", snapshot.awaitingCoreReview]
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
            <p className="mt-1 text-2xl font-black text-white">{value}</p>
          </div>
        ))}
      </div>
      {snapshot.priorityAlerts[0] && (
        <div className="mt-3 rounded-lg border border-amber-300/20 bg-amber-300/10 p-3">
          <p className="text-xs font-black uppercase tracking-wide text-amber-200">Priority alert</p>
          <h3 className="mt-2 text-sm font-black text-white">{snapshot.priorityAlerts[0].sourceItem.title}</h3>
          <p className="mt-1 text-xs font-semibold leading-5 text-amber-50/80">
            {snapshot.priorityAlerts[0].priority.priorityLabel} · score {snapshot.priorityAlerts[0].priority.priorityScore} · {snapshot.priorityAlerts[0].claimCandidate.routeTo.replaceAll("_", " ")}
          </p>
        </div>
      )}
      <Link href="/athena" className="mt-4 inline-flex min-h-10 items-center justify-center rounded-md border border-cyan-300/25 bg-cyan-300/10 px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/15">
        View Intake Queue
      </Link>
      <TrustFooter confidence="medium" sourceCount={snapshot.newSourceItems} lastUpdated={snapshot.latestVerifiedIntakeTimestamp} note="Mock intake only" />
    </DashboardWidget>
  );
}

