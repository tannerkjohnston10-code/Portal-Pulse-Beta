export function RankingMethodologyCard({ nil = false }: { nil?: boolean }) {
  return (
    <section className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5">
      <h2 className="text-lg font-black text-white">Methodology</h2>
      <p className="mt-2 text-sm font-semibold leading-6 text-cyan-50/80">
        Portal Pulse rankings are intelligence products, not popularity lists. They are designed to be source-aware, explainable, confidence-scored, and historically trackable. This phase uses fictional mock data only.
      </p>
      <div className="mt-4 grid gap-2 text-sm font-bold text-cyan-50/80 md:grid-cols-2">
        <span>Every ranking explains why it exists.</span>
        <span>Movement compares current and previous rank.</span>
        <span>Confidence reflects mock source strength.</span>
        <span>History placeholders prepare trend charts.</span>
        {nil && <span>NIL rankings are estimates unless confirmed and should not be treated as facts.</span>}
      </div>
    </section>
  );
}
