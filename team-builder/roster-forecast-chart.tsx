import type { RosterForecastYear } from "@/platform/roster/core/roster-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function RosterForecastChart({ forecast }: { forecast: RosterForecastYear[] }) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Roster Forecast</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {forecast.map((year) => (
          <article key={year.id} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-black text-white">{year.year}</h3>
              <ConfidenceBadge level={year.confidence} />
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">Scholarship pressure: {year.scholarshipPressure}. Departure risk: {year.departureRiskPlaceholder}.</p>
            <p className="mt-3 text-xs font-bold text-slate-500">Recruiting: {year.recruitingNeed} · Portal: {year.portalNeed}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

