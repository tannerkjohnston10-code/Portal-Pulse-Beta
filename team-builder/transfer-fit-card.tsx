import type { TransferFit } from "@/platform/roster/core/roster-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function TransferFitCard({ fit }: { fit: TransferFit }) {
  const factors = [
    ["Need", fit.rosterNeedFit],
    ["Playing time", fit.playingTimeFit],
    ["Scheme", fit.schemeFitPlaceholder],
    ["Eligibility", fit.eligibilityFit],
    ["Experience", fit.experienceFit],
    ["Geography", fit.geographicFit]
  ];

  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">{fit.position}</p>
          <h3 className="mt-2 text-base font-black text-white">{fit.playerName}</h3>
        </div>
        <ConfidenceBadge level={fit.confidence} />
      </div>
      <p className="mt-3 text-3xl font-black text-white">{fit.overallTransferFitScore}</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {factors.map(([label, value]) => (
          <div key={label} className="rounded-md border border-white/10 bg-white/[0.03] p-2">
            <p className="text-xs font-bold text-slate-500">{label}</p>
            <p className="text-sm font-black text-white">{value}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs font-bold text-slate-500">{fit.nilEnvironmentPlaceholder} · Mock Transfer Fit</p>
    </article>
  );
}

