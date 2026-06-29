import type { NetworkUserProfile } from "@/platform/network/network-types";

export function ContributionTimeline({ profile }: { profile: NetworkUserProfile }) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Contribution History</p>
      <div className="mt-4 grid gap-3">
        {profile.contributionHistory.map((item) => (
          <div key={item} className="rounded-md border border-white/10 bg-white/[0.03] p-3 text-sm font-semibold text-slate-300">{item}</div>
        ))}
      </div>
    </section>
  );
}
