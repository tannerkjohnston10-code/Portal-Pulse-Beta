import { Bell, GitCompare, Heart, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { IntelligenceCard } from "@/components/ui/intelligence-card";
import { buttonStyles } from "@/lib/design-tokens";

export function CompareWatchlistPanel() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <IntelligenceCard title="Compare Players" subtitle="Future side-by-side intelligence comparison">
        <div className="grid gap-3 sm:grid-cols-2">
          {["Portal Pulse Score™", "Predictions", "Visits", "NIL", "Production", "Roster fit", "Timeline", "Transfer demand"].map((item) => (
            <div key={item} className="rounded-md bg-white/5 px-3 py-2 text-sm font-bold text-slate-300">{item}</div>
          ))}
        </div>
        <button className={`${buttonStyles} mt-4 border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10`} type="button">
          <GitCompare size={16} aria-hidden />
          Add To Compare
        </button>
      </IntelligenceCard>
      <IntelligenceCard title="Watchlists" subtitle="Follow, favorite, alert, and compare later">
        <div className="grid gap-3 sm:grid-cols-2">
          <Action icon={Heart} label="Favorite" />
          <Action icon={Star} label="Follow" />
          <Action icon={Bell} label="Receive alerts" />
          <Action icon={GitCompare} label="Compare later" />
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-400">Future authenticated users will save player watchlists, custom alerts, and comparison boards.</p>
      </IntelligenceCard>
    </div>
  );
}

function Action({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <button className={`${buttonStyles} border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10`} type="button">
      <Icon size={16} aria-hidden />
      {label}
    </button>
  );
}
