import { SUPPORTED_SPORT_IDS, SportCapabilityRegistry } from "@/platform/sports";
import type { SportId } from "@/platform/sports/sport-types";

export function SportSwitcher({
  currentSport = "football",
  favoriteSports = ["football"],
  recentSports = ["football"]
}: {
  currentSport?: SportId;
  favoriteSports?: SportId[];
  recentSports?: SportId[];
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Sport Context</p>
          <p className="mt-1 text-sm font-semibold text-slate-400">Global sport, favorite sports, recent sports, and future multi-sport comparison.</p>
        </div>
        <label className="grid gap-1 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
          Active sport
          <select defaultValue={currentSport} className="min-h-10 rounded-md border border-white/10 bg-slate-900 px-3 text-sm font-bold normal-case tracking-normal text-white">
            {SUPPORTED_SPORT_IDS.map((sportId) => {
              const capabilities = SportCapabilityRegistry.getProfile(sportId);
              return <option key={sportId} value={sportId}>{capabilities.displayName}</option>;
            })}
          </select>
        </label>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <SportList label="Favorites" sportIds={favoriteSports} />
        <SportList label="Recent" sportIds={recentSports} />
      </div>
    </div>
  );
}

function SportList({ label, sportIds }: { label: string; sportIds: SportId[] }) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {sportIds.map((sportId) => {
          const capabilities = SportCapabilityRegistry.getProfile(sportId);
          return <span key={sportId} className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 text-xs font-black text-cyan-100">{capabilities.displayName}</span>;
        })}
      </div>
    </div>
  );
}
