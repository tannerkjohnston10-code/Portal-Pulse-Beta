export function DateSelectorPlaceholder() {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Date selector</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {["Last week", "Last month", "Season start"].map((label) => (
          <button key={label} disabled className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-black text-slate-400">
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

