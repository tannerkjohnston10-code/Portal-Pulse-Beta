import type { NetworkReport } from "@/platform/network/network-types";
import { ConfidenceIndicator } from "@/components/network/confidence-indicator";
import { EvidenceIndicator } from "@/components/network/evidence-indicator";

export function ReportCard({ report }: { report: NetworkReport }) {
  return (
    <article className="rounded-lg border border-white/10 bg-slate-950/70 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{report.reportType.replaceAll("_", " ")} · {report.visibility}</p>
          <h3 className="mt-2 text-lg font-black text-white">{report.title}</h3>
        </div>
        <ConfidenceIndicator confidence={report.confidence} score={report.confidenceScore} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{report.executiveSummary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <EvidenceIndicator evidence={report.evidence} />
        {report.tags.map((tag) => <span key={tag} className="rounded-full bg-white/5 px-2 py-1 text-xs font-bold text-slate-400">{tag}</span>)}
      </div>
      <p className="mt-3 text-xs font-bold text-slate-500">By {report.author.displayName} · Mock version history: {report.versionHistoryPlaceholder.join(" / ")}</p>
    </article>
  );
}
