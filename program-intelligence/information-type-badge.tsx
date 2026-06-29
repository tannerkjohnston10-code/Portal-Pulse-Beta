import type { ProgramInformationType } from "@/platform/program-intelligence/core/program-intelligence-types";

const styles: Record<ProgramInformationType, string> = {
  "Verified Information": "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  Analysis: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
  "Historical Context": "border-indigo-300/30 bg-indigo-300/10 text-indigo-100",
  Predictions: "border-violet-300/30 bg-violet-300/10 text-violet-100",
  Simulations: "border-amber-300/30 bg-amber-300/10 text-amber-100"
};

export function InformationTypeBadge({ type }: { type: ProgramInformationType }) {
  return <span className={`rounded-full border px-3 py-1 text-xs font-black uppercase tracking-wide ${styles[type]}`}>{type}</span>;
}
