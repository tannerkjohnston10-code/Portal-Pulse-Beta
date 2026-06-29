export function TradeoffCard({ title, tradeoffs }: { title: string; tradeoffs: string[] }) {
  return (
    <article className="rounded-lg border border-white/10 bg-slate-900/80 p-5">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-200">Trade-offs</p>
      <h3 className="mt-2 text-lg font-black text-white">{title}</h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
        {tradeoffs.map((tradeoff) => <li key={tradeoff}>{tradeoff}</li>)}
      </ul>
    </article>
  );
}
