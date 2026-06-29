import Link from "next/link";
import { BrainCircuit } from "lucide-react";
import type { OraclePredictionFinding } from "@/platform/athena/agents/oracle/oracle-types";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import { TrustFooter } from "@/components/command-center/trust-footer";
import { WidgetToolbar } from "@/components/command-center/widget-toolbar";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function OraclePredictionWidget({ finding }: { finding: OraclePredictionFinding }) {
  return (
    <DashboardWidget title="Oracle Prediction" subtitle="Projection intelligence, never reported fact." icon={BrainCircuit} span={4} toolbar={<WidgetToolbar />}>
      <div className="rounded-lg border border-cyan-300/15 bg-cyan-300/10 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Biggest mock mover</p>
            <h3 className="mt-2 text-lg font-black text-white">{finding.predictedOutcome}</h3>
          </div>
          <ConfidenceBadge level={finding.confidence} />
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300">{finding.probability}% projection · {finding.uncertaintyLevel} uncertainty · {finding.coreDecision.decision.replaceAll("_", " ")} by Core.</p>
      </div>
      <div className="mt-3 grid gap-2">
        {finding.topSupportingReasons.slice(0, 2).map((reason) => (
          <p key={reason} className="rounded-md border border-emerald-400/15 bg-emerald-400/10 p-3 text-xs font-bold leading-5 text-emerald-50">{reason}</p>
        ))}
        {finding.topRiskFactors.slice(0, 1).map((risk) => (
          <p key={risk.id} className="rounded-md border border-amber-300/15 bg-amber-300/10 p-3 text-xs font-bold leading-5 text-amber-50">{risk.label}: {risk.explanation}</p>
        ))}
      </div>
      <Link href="/predictions" className="mt-4 inline-flex min-h-10 items-center justify-center rounded-md border border-cyan-300/25 bg-cyan-300/10 px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/15">
        View Predictions
      </Link>
      <TrustFooter confidence={finding.confidence} sourceCount={finding.sourceCount} lastUpdated={finding.generatedAt} note="Projection only" />
    </DashboardWidget>
  );
}

