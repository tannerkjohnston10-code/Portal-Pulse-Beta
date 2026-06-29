export function SaveScenarioDialog() {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-900/80 p-5">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Save Scenario Placeholder</p>
      <p className="mt-3 text-sm font-semibold leading-6 text-slate-300">
        Future Labs versions will save labeled scenario configurations, assumptions, notes, and comparison states. No persistence is implemented in this mock workspace.
      </p>
      <button className="mt-4 rounded-md border border-white/10 px-4 py-2 text-sm font-black text-slate-300 opacity-60" type="button" disabled>
        Save unavailable
      </button>
    </section>
  );
}
