export function AssumptionPanel({ assumptions, limitations }: { assumptions: string[]; limitations: string[] }) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Assumptions & Limitations</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <h3 className="font-black text-white">Assumptions</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
            {assumptions.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="font-black text-white">Limitations</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
            {limitations.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
