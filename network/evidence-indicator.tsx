import type { EvidenceIndicator as EvidenceIndicatorType } from "@/platform/network/network-types";

export function EvidenceIndicator({ evidence }: { evidence: EvidenceIndicatorType }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-black uppercase ${evidence.hasContradictions ? "border-amber-300/30 bg-amber-300/10 text-amber-100" : "border-emerald-300/30 bg-emerald-300/10 text-emerald-100"}`}>
      {evidence.label} · {evidence.evidenceCount} evidence · {evidence.sourceCount} sources
    </span>
  );
}
