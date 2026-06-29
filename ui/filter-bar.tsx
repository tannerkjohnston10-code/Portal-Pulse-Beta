import { Filter } from "lucide-react";
import { buttonStyles, panelStyles } from "@/lib/design-tokens";

export function FilterBar({ filters }: { filters: string[] }) {
  return (
    <div className={`${panelStyles} flex flex-wrap gap-2 p-4`}>
      {filters.map((filter) => (
        <button key={filter} className={`${buttonStyles} border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10`}>
          <Filter size={14} aria-hidden />
          {filter}
        </button>
      ))}
    </div>
  );
}
