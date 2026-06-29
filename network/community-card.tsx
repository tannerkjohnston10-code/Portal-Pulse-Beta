import type { NetworkCommunity } from "@/platform/network/network-types";
import { SportCapabilityRegistry } from "@/platform/sports";

export function CommunityCard({ community }: { community: NetworkCommunity }) {
  const sport = SportCapabilityRegistry.getProfile(community.sportId);
  return (
    <article className="rounded-lg border border-white/10 bg-slate-950/70 p-4">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">{sport.displayName} Community</p>
      <h3 className="mt-2 text-lg font-black text-white">{community.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{community.transferActivity}</p>
      <div className="mt-4">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Trending topics</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {community.trendingTopics.map((topic) => <span key={topic} className="rounded-full bg-white/5 px-2 py-1 text-xs font-bold text-slate-300">{topic}</span>)}
        </div>
      </div>
    </article>
  );
}
