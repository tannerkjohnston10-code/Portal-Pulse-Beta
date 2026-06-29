import { Filter, Search } from "lucide-react";

const filters = ["Sport", "Conference", "Position", "Status", "School", "Time Window", "Confidence", "Ranking Type"];

export function RankingFilters() {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-4">
      <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
        <label className="flex min-h-11 items-center gap-2 rounded-md border border-white/10 bg-slate-950 px-3 text-slate-400" htmlFor="ranking-search">
          <Search size={16} aria-hidden />
          <input id="ranking-search" className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-white outline-none placeholder:text-slate-500" placeholder="Search mock rankings..." />
        </label>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button key={filter} className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 text-xs font-black uppercase tracking-wide text-slate-300 hover:bg-white/10" type="button">
              <Filter size={13} aria-hidden />
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
