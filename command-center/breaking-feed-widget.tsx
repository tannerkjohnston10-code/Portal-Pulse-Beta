import { Filter, Radio } from "lucide-react";
import type { BreakingPortalUpdate } from "@/types/command-center";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import { TrustFooter } from "@/components/command-center/trust-footer";
import { SUPPORTED_SPORT_IDS, SportCapabilityRegistry } from "@/platform/sports";

export function BreakingFeedWidget({ updates }: { updates: BreakingPortalUpdate[] }) {
  return (
    <DashboardWidget
      title="Breaking Portal Feed"
      subtitle="Live-style stream for mock source-backed movement."
      icon={Radio}
      span={4}
      toolbar={
        <div className="flex items-center gap-2">
          <select className="hidden min-h-8 rounded-md border border-white/10 bg-slate-950 px-2 text-xs font-bold text-slate-300 sm:block" aria-label="Filter sport">
            {SUPPORTED_SPORT_IDS.map((sportId) => {
              const capabilities = SportCapabilityRegistry.getProfile(sportId);
              return <option key={sportId} value={sportId}>{capabilities.displayName}</option>;
            })}
            <option>All Sports</option>
          </select>
          <button className="grid h-8 w-8 place-items-center rounded-md border border-white/10 text-slate-400" aria-label="Filter by conference">
            <Filter size={14} aria-hidden />
          </button>
        </div>
      }
    >
      <div className="max-h-[31rem] overflow-y-auto pr-1">
        <div className="grid gap-3">
          {updates.map((update) => (
            <article key={update.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-3 transition hover:bg-white/[0.07]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-wide text-slate-500">{new Date(update.timestamp).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</p>
                  <h3 className="mt-1 text-sm font-black text-white">{update.playerName}</h3>
                </div>
                <ConfidenceBadge level={update.confidence} score={update.confidenceScore} />
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-300">{update.headline}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-bold text-slate-400">
                <span className="rounded-full bg-white/5 px-2 py-1 capitalize">{update.movementType}</span>
                <span>{update.schoolOrTeam}</span>
                <span>1 mock source</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <TrustFooter confidence="medium" sourceCount={updates.length} lastUpdated={updates[0]?.timestamp ?? ""} />
    </DashboardWidget>
  );
}
