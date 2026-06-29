import { Bell, Bot, Bookmark, Moon, Star, UserCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CommandCenterSearchResult } from "@/types/command-center";
import { appConfig } from "@/lib/config/app-config";
import { GlobalSearch } from "@/components/command-center/global-search";
import { DEFAULT_SPORT_ID, SUPPORTED_SPORT_IDS, SportCapabilityRegistry } from "@/platform/sports";

export function CommandCenterTopbar({ searchResults }: { searchResults: CommandCenterSearchResult[] }) {
  return (
    <div className="sticky top-[73px] z-30 -mx-4 border-b border-white/10 bg-[#07111f]/95 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-3 xl:flex-row xl:items-center">
        <div className="flex min-w-fit items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">{appConfig.name}</p>
            <h1 className="text-xl font-black text-white sm:text-2xl">Command Center</h1>
          </div>
          <select defaultValue={DEFAULT_SPORT_ID} className="min-h-10 rounded-md border border-white/10 bg-slate-950 px-3 text-sm font-bold text-white outline-none focus:border-cyan-300" aria-label="Select sport">
            {SUPPORTED_SPORT_IDS.map((sportId) => {
              const capabilities = SportCapabilityRegistry.getProfile(sportId);
              return <option key={sportId} value={sportId}>{capabilities.displayName}</option>;
            })}
            <option value="all">All Sports</option>
          </select>
        </div>
        <GlobalSearch results={searchResults} />
        <div className="flex flex-wrap items-center gap-2">
          <TopbarButton label="Notifications" icon={Bell} />
          <TopbarButton label="Watchlist" icon={Star} />
          <TopbarButton label="Saved Views" icon={Bookmark} />
          <TopbarButton label="Theme" icon={Moon} />
          <button className="inline-flex min-h-10 items-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/[0.18]" aria-label="Open AI Assistant placeholder">
            <Bot size={16} aria-hidden />
            AI Assistant
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-slate-300 transition hover:bg-white/10" aria-label="User avatar placeholder">
            <UserCircle size={19} aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}

function TopbarButton({ label, icon: Icon }: { label: string; icon: LucideIcon }) {
  return (
    <button className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-slate-300 transition hover:bg-white/10 hover:text-white" aria-label={label}>
      <Icon size={17} aria-hidden />
    </button>
  );
}
