import { ArrowRight, ShieldAlert } from "lucide-react";
import type { AgentFinding } from "@/platform/athena/types/athena-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function AgentFindingCard({ finding }: { finding: AgentFinding }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">{finding.agentName}</p>
          <h3 className="mt-2 text-base font-black text-white">{finding.findingType.replaceAll("_", " ")}</h3>
        </div>
        <ConfidenceBadge level={finding.proposedConfidence} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{finding.summary}</p>
      <div className="mt-4 grid gap-2 text-xs font-bold text-slate-400 sm:grid-cols-3">
        <span>Importance {finding.proposedImportance}</span>
        <span>{finding.supportingEvidenceIds.length} evidence refs</span>
        <span>Status {finding.status.replaceAll("_", " ")}</span>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-3 text-xs font-bold text-slate-500">
        <span className="inline-flex items-center gap-1">
          <ShieldAlert size={13} aria-hidden />
          Proposal only
        </span>
        <span className="inline-flex items-center gap-1 text-cyan-200">
          Sent to Core <ArrowRight size={13} aria-hidden />
        </span>
      </div>
    </article>
  );
}

