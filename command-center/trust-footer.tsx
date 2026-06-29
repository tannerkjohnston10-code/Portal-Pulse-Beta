import { ShieldCheck } from "lucide-react";
import type { ConfidenceLevel } from "@/types/portal";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function TrustFooter({
  confidence,
  confidenceScore,
  sourceCount,
  lastUpdated,
  note = "Why we believe this"
}: {
  confidence: ConfidenceLevel;
  confidenceScore?: number;
  sourceCount: number;
  lastUpdated: string;
  note?: string;
}) {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3">
      <div className="flex flex-wrap items-center gap-2">
        <ConfidenceBadge level={confidence} score={confidenceScore} />
        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-bold text-slate-300">
          <ShieldCheck size={13} aria-hidden />
          {sourceCount} mock sources
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500">
        <span>{note}</span>
        <span>Updated {lastUpdated}</span>
      </div>
    </div>
  );
}
