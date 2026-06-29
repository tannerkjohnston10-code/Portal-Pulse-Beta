import type { NetworkUserProfile } from "@/platform/network/network-types";
import { ReputationCard } from "@/components/network/reputation-card";

export function UserProfileCard({ profile }: { profile: NetworkUserProfile }) {
  return (
    <article className="grid gap-4 rounded-lg border border-white/10 bg-slate-950/70 p-5 lg:grid-cols-[0.8fr_1fr]">
      <div>
        <div className="h-24 rounded-md border border-cyan-300/20 bg-cyan-300/10 p-4">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-100">{profile.profileBanner}</p>
        </div>
        <div className="-mt-7 flex items-end gap-3 px-3">
          <div className="grid h-16 w-16 place-items-center rounded-lg border border-white/10 bg-slate-900 text-xl font-black text-white">{profile.profilePhotoPlaceholder}</div>
          <div>
            <h2 className="text-xl font-black text-white">{profile.displayName}</h2>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{profile.role.replaceAll("_", " ")}</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-300">{profile.biography}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {profile.expertiseTags.map((tag) => <span key={tag} className="rounded-full bg-white/5 px-2 py-1 text-xs font-bold text-slate-300">{tag}</span>)}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <Metric label="Following" value={profile.following} />
          <Metric label="Followers" value={profile.followers} />
          <Metric label="Reports" value={profile.publishedReports} />
        </div>
      </div>
      <ReputationCard reputation={profile.reputation} />
    </article>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
      <p className="text-lg font-black text-white">{value}</p>
      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
    </div>
  );
}
