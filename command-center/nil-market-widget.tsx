import { CircleDollarSign } from "lucide-react";
import type { NILMovementItem } from "@/types/command-center";
import { NILStatusBadge } from "@/components/ui/nil-status-badge";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import { TrustFooter } from "@/components/command-center/trust-footer";
import { WidgetToolbar } from "@/components/command-center/widget-toolbar";

export function NILMarketWidget({ movements }: { movements: NILMovementItem[] }) {
  return (
    <DashboardWidget title="NIL Market Watch" subtitle="Reported, estimated, rumored, and unknown NIL movement labels." icon={CircleDollarSign} span={4} toolbar={<WidgetToolbar />}>
      <div className="grid gap-3">
        {movements.map((movement) => (
          <article key={movement.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-black text-white">{movement.playerName}</h3>
                <p className="mt-1 text-xs font-semibold text-slate-500">{movement.movementLabel}</p>
              </div>
              <NILStatusBadge status={movement.status} />
            </div>
            <div className="mt-3 grid gap-2 rounded-md bg-white/5 p-3 text-xs font-bold text-slate-300">
              <div className="flex justify-between gap-3"><span>Estimated range</span><span className="text-right text-white">{movement.estimatedRange}</span></div>
              <div className="flex justify-between gap-3"><span>Collective activity</span><span className="text-right text-white">{movement.collectiveActivity}</span></div>
              <div className="flex justify-between gap-3"><span>Market movement</span><span className="text-right capitalize text-white">{movement.marketMovement}</span></div>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <ConfidenceBadge level={movement.confidence} />
              <span className="text-xs font-bold text-slate-500">{movement.sourceLabel}</span>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-3 rounded-md border border-rose-300/20 bg-rose-300/10 p-3 text-xs font-bold leading-5 text-rose-100">NIL values are sensitive and must remain labeled by status and confidence. These values are fictional mock placeholders.</p>
      <TrustFooter confidence="medium" sourceCount={movements.reduce((sum, item) => sum + item.sourceCount, 0)} lastUpdated="2026-06-28T12:00:00.000Z" />
    </DashboardWidget>
  );
}
