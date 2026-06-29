import type { NetworkAIBriefing } from "@/platform/network/network-types";
import { ConfidenceIndicator } from "@/components/network/confidence-indicator";

export function AIInsightCard({ briefing }: { briefing: NetworkAIBriefing }) {
  return (
    <section className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-100">AI Summary</p>
          <h2 className="mt-2 text-xl font-black text-white">{briefing.title}</h2>
        </div>
        <ConfidenceIndicator confidence={briefing.confidence} score={70} />
      </div>
      <p className="mt-3 text-sm leading-6 text-cyan-50">{briefing.summary}</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <List title="Verified placeholders" items={briefing.verifiedFacts} />
        <List title="Projections" items={briefing.projections} />
      </div>
      <p className="mt-4 text-xs font-bold text-cyan-100">Explain This™: {briefing.explainThis}</p>
    </section>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-100">{title}</p>
      <ul className="mt-2 grid gap-1 text-sm leading-5 text-cyan-50">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
