export function GraphLegend() {
  return (
    <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-400">
      <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-emerald-200">Strong</span>
      <span className="rounded-full border border-slate-500/30 bg-slate-500/10 px-2.5 py-1 text-slate-300">Moderate / Weak</span>
      <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-2.5 py-1 text-amber-200">Inferred</span>
      <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-2.5 py-1 text-fuchsia-200">Conflicting</span>
      <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2.5 py-1 text-cyan-200">Mock only</span>
    </div>
  );
}

