import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { IntelligenceCard } from "@/components/ui/intelligence-card";
import { NILStatusBadge } from "@/components/ui/nil-status-badge";
import { SourceLine } from "@/components/ui/source-line";
import type { NILReport } from "@/types/portal";

export function NILIntelligencePanel({ report }: { report?: NILReport }) {
  return (
    <IntelligenceCard title="NIL Intelligence" subtitle="Carefully labeled NIL dashboard">
      {report ? (
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-yellow-300/20 bg-yellow-300/10 p-5">
            <NILStatusBadge status={report.status} />
            <p className="mt-4 text-2xl font-black text-white">{report.rangeLabel}</p>
            <p className="mt-2 text-sm leading-6 text-yellow-100">Mock NIL label only. No real NIL value is presented as fact.</p>
            <div className="mt-4"><ConfidenceBadge level={report.confidence} score={report.confidenceScore} /></div>
          </div>
          <div className="grid gap-3">
            <Info label="Collectives" value="Mock collective placeholder" />
            <Info label="Brands" value="Brand activity placeholder" />
            <Info label="Market value" value="Future model placeholder" />
            <Info label="Historical changes" value="Chart placeholder" />
            <Info label="Privacy" value="Private compensation must not be implied without source support." />
            <SourceLine source={report.source} />
          </div>
        </div>
      ) : (
        <p className="text-sm leading-6 text-slate-400">No mock NIL report attached. Future reports must include status, confidence, source citations, and privacy labels.</p>
      )}
    </IntelligenceCard>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-white/5 p-3">
      <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-bold text-slate-200">{value}</p>
    </div>
  );
}
