import type { RosterHealth } from "@/platform/gm-workspace/dashboard/gm-workspace-types";
import { GMCard } from "@/components/gm-workspace/gm-card";

export function RosterHealthCard({ health }: { health: RosterHealth }) {
  return (
    <GMCard eyebrow="Roster Health" title={`Roster Health Score: ${health.overallScore}`}>
      <p className="text-sm font-semibold text-slate-400">{health.trendPlaceholder}</p>
      <div className="mt-4 grid gap-3">
        {health.categories.map((category) => (
          <div key={category.id} className="rounded-md border border-white/10 bg-slate-950/70 p-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-black text-white">{category.label}</p>
              <span className="text-sm font-black text-cyan-200">{category.score}</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-cyan-300" style={{ width: `${category.score}%` }} />
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-400">{category.explanation}</p>
          </div>
        ))}
      </div>
      <details className="mt-4 rounded-md border border-white/10 bg-white/[0.03] p-3">
        <summary className="cursor-pointer text-sm font-black text-cyan-100">Explain This™</summary>
        <p className="mt-2 text-xs leading-5 text-slate-400">{health.explainThis}</p>
      </details>
    </GMCard>
  );
}
