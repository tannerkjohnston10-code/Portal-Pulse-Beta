export function TrendingPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">{title}</p>
      <div className="mt-4 grid gap-2">
        {items.map((item, index) => (
          <div key={item} className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] p-3">
            <span className="text-sm font-bold text-white">{item}</span>
            <span className="text-xs font-black text-slate-500">#{index + 1}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
