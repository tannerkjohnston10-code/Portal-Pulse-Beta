export function SimulationResults({ outputs }: { outputs: string[] }) {
  return (
    <section className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-5">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Simulation Results</p>
      <ul className="mt-4 grid gap-3">
        {outputs.map((output) => (
          <li key={output} className="rounded-md border border-emerald-400/20 bg-slate-950/50 p-3 text-sm font-semibold leading-6 text-emerald-50">
            {output}
          </li>
        ))}
      </ul>
    </section>
  );
}
