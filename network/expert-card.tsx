import type { NetworkUserProfile } from "@/platform/network/network-types";

export function ExpertCard({ expert }: { expert: NetworkUserProfile }) {
  return (
    <article className="rounded-lg border border-white/10 bg-slate-950/70 p-4">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-sm font-black text-cyan-100">{expert.profilePhotoPlaceholder}</div>
        <div>
          <h3 className="font-black text-white">{expert.displayName}</h3>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{expert.reputation.score} reputation</p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{expert.expertiseTags.join(" · ")}</p>
    </article>
  );
}
