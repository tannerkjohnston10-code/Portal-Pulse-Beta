import { Eye, Share2, Swords } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { TeamIntelligenceProfile } from "@/types/team-intelligence";
import { MovementBadge } from "@/components/ui/movement-badge";
import { PortalGradeBadge } from "@/components/ui/portal-grade-badge";

export function TeamHero({ profile }: { profile: TeamIntelligenceProfile }) {
  return (
    <section className="overflow-hidden rounded-lg border border-white/10 bg-slate-950/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="grid gap-6 p-5 lg:grid-cols-[1fr_24rem]">
        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="grid h-24 w-24 shrink-0 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-3xl font-black text-cyan-100">
            {profile.logoInitials}
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Team Intelligence Center</p>
            <h1 className="mt-2 text-4xl font-black text-white sm:text-5xl">{profile.schoolName}</h1>
            <p className="mt-3 text-sm font-semibold text-slate-400">
              {profile.sport} · {profile.conference} · Head Coach {profile.headCoach}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <PortalGradeBadge grade={profile.portalGrade} />
              <MovementBadge movement={profile.momentum.movement} value={`${profile.momentum.monthlyMomentum} momentum`} />
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-wide text-slate-300">
                Updated {profile.lastUpdated}
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <div className="grid grid-cols-3 gap-2 text-center">
            <HeroMetric label="Team Score" value={profile.teamScore.overall.toString()} />
            <HeroMetric label="National" value={`#${profile.nationalTransferRanking}`} />
            <HeroMetric label="Conference" value={`#${profile.conferenceRanking}`} />
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            <HeroButton label="Watch" icon={Eye} />
            <HeroButton label="Share" icon={Share2} />
            <HeroButton label="Compare" icon={Swords} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-white/5 p-3">
      <p className="text-[0.65rem] font-black uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-black text-white">{value}</p>
    </div>
  );
}

function HeroButton({ label, icon: Icon }: { label: string; icon: LucideIcon }) {
  return (
    <button className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 text-sm font-black text-slate-200 transition hover:bg-white/10" type="button">
      <Icon size={15} aria-hidden />
      {label}
    </button>
  );
}
