import type { ClaimStatus } from "@/types/portal";
import { typography } from "@/lib/design-tokens";

const styles: Record<ClaimStatus, string> = {
  confirmed: "border-emerald-400/30 bg-emerald-400/12 text-emerald-300",
  reported: "border-cyan-300/30 bg-cyan-300/12 text-cyan-200",
  rumored: "border-rose-400/30 bg-rose-400/12 text-rose-300",
  estimated: "border-amber-300/30 bg-amber-300/12 text-amber-200",
  disputed: "border-fuchsia-400/30 bg-fuchsia-400/12 text-fuchsia-200",
  needs_review: "border-yellow-300/30 bg-yellow-300/12 text-yellow-100",
  unknown: "border-slate-500/30 bg-slate-500/12 text-slate-300"
};

export function ClaimStatusBadge({ status }: { status: ClaimStatus }) {
  return <span className={`inline-flex rounded-full border px-2.5 py-1 ${typography.badge} ${styles[status]}`}>{status.replace(/_/g, " ")}</span>;
}
