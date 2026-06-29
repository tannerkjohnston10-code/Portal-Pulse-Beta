export function ConfidenceSummary({ confidence, label = "Simulation confidence" }: { confidence: number; label?: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">{label}</p>
        <span className="text-sm font-black tabular-nums text-cyan-200">{confidence}%</span>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full rounded-full bg-cyan-300" style={{ width: `${confidence}%` }} />
      </div>
      <p className="mt-3 text-xs font-semibold leading-5 text-slate-500">Visual only. Labs confidence does not verify a real-world claim.</p>
    </div>
  );
}
