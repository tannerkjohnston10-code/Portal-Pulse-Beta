import type { SnapshotComparison } from "@/platform/history/snapshots/history-types";

export function SnapshotComparisonCard({ comparison }: { comparison: SnapshotComparison }) {
  return (
    <article className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">What changed</p>
      <h2 className="mt-2 text-xl font-black text-white">{comparison.dateA.slice(0, 10)} to {comparison.dateB.slice(0, 10)}</h2>
      <ul className="mt-4 grid gap-2">
        {comparison.whatChanged.map((item) => (
          <li key={item} className="rounded-md border border-white/10 bg-white/[0.04] p-3 text-sm font-semibold text-slate-200">{item}</li>
        ))}
      </ul>
    </article>
  );
}

