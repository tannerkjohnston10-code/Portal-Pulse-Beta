export function ComparisonView() {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Comparison View</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {["Before", "After"].map((label, index) => (
          <div key={label} className="rounded-md border border-white/10 bg-slate-900/80 p-4">
            <p className="text-sm font-black text-white">{label}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">{index === 0 ? "Mock baseline roster, market, or strategy state." : "Mock simulated state after user-configured variables."}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
