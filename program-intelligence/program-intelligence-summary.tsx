import type { ProgramIntelligenceSummary } from "@/platform/program-intelligence/core/program-intelligence-types";
import { InformationTypeBadge } from "@/components/program-intelligence/information-type-badge";

export function ProgramIntelligenceSummary({ summary }: { summary: ProgramIntelligenceSummary }) {
  const groups = [
    ["Strengths", summary.strengths],
    ["Risks", summary.risks],
    ["Opportunities", summary.opportunities],
    ["Recent Changes", summary.recentChanges],
    ["Watch Items", summary.watchItems]
  ] as const;

  return (
    <section className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Program Intelligence Summary</p>
          <h2 className="mt-2 text-2xl font-black text-white">What matters across the program.</h2>
        </div>
        <InformationTypeBadge type={summary.contentType} />
      </div>
      <p className="mt-3 text-sm font-semibold leading-6 text-cyan-50">{summary.confidenceExplanation}</p>
      <div className="mt-5 grid gap-4 lg:grid-cols-5">
        {groups.map(([label, items]) => (
          <div key={label} className="rounded-md border border-cyan-300/20 bg-slate-950/50 p-3">
            <p className="text-xs font-black uppercase tracking-wide text-cyan-200">{label}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-200">
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
