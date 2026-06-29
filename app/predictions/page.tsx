import { PageFrame } from "@/components/layout/page-frame";
import { OraclePredictionCard } from "@/components/predictions/oracle/oracle-prediction-card";
import { OracleSignalTable } from "@/components/predictions/oracle/oracle-signal-table";
import { PredictionCard } from "@/components/predictions/prediction-card";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { cardStyles } from "@/lib/design-tokens";
import { PortalPulsePlatform } from "@/platform";
import { predictionService } from "@/server/services/prediction-service";

export default async function PredictionsPage() {
  const predictions = await predictionService.getPredictions();
  const oracleMover = PortalPulsePlatform.athena.oracle.getTopPredictionMover();
  const oracleSignals = PortalPulsePlatform.athena.oracle.getPredictionSignals();

  return (
    <PageFrame
      eyebrow="Prediction center"
      title="Portal Prediction Center"
      description="Predictions are projections, not facts. Oracle proposes prediction intelligence, but the Intelligence Core decides what can surface."
    >
      <div className="grid gap-6">
        <MockDataNotice />
        <OraclePredictionCard finding={oracleMover} />
        <section className={`${cardStyles} p-5`}>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Oracle methodology</p>
          <h2 className="mt-2 text-2xl font-black text-white">Why this prediction changed</h2>
          <p className="text-sm leading-7 text-slate-300">
            Oracle weighs mock signals such as visits, roster need, depth chart openings, source volume, prediction movement, conference fit, playing-time opportunity, and conflicting reports. The output is a projection candidate, not a commitment or verified report.
          </p>
          <div className="mt-4">
            <OracleSignalTable signals={oracleSignals} />
          </div>
        </section>
        <section className="grid gap-4 lg:grid-cols-2">
          <div className={`${cardStyles} p-5`}>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-200">Prediction risk panel</p>
            <h2 className="mt-2 text-xl font-black text-white">What could weaken Oracle&apos;s view</h2>
            <div className="mt-4 grid gap-3">
              {oracleMover.topRiskFactors.map((risk) => (
                <div key={risk.id} className="rounded-md border border-amber-300/15 bg-amber-300/10 p-3">
                  <p className="text-sm font-black text-amber-50">{risk.label}</p>
                  <p className="mt-1 text-sm leading-6 text-amber-100/80">{risk.explanation}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`${cardStyles} p-5`}>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Confidence explanation</p>
            <h2 className="mt-2 text-xl font-black text-white">Projection rules</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Oracle cannot invent probabilities, treat predictions as facts, or confirm NIL. Low-confidence, conflicting, or NIL-sensitive projection candidates must be lowered or routed to review by the Intelligence Core.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-400">
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">Projection only</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">Core decision required</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">Mock data</span>
            </div>
          </div>
        </section>
        <div className="grid gap-4 lg:grid-cols-2">
          {predictions.map((prediction) => (
            <PredictionCard key={prediction.id} prediction={prediction} />
          ))}
        </div>
      </div>
    </PageFrame>
  );
}
