import { Bell, GitCompare, Heart, Share2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { MovementBadge } from "@/components/ui/movement-badge";
import { StatusBadge } from "@/components/ui/status-badge";
import { cardStyles, buttonStyles } from "@/lib/design-tokens";
import { formatDate, formatDateTime } from "@/lib/format";
import type { Player } from "@/types/portal";
import type { PlayerIntelligence } from "@/lib/player-intelligence/player-intelligence";

export function PlayerHero({ player, intelligence }: { player: Player; intelligence: PlayerIntelligence }) {
  return (
    <section className={`${cardStyles} overflow-hidden`}>
      <div className="grid gap-6 p-5 sm:p-6 xl:grid-cols-[320px_1fr_320px]">
        <div className="flex gap-4 xl:block">
          <div className="grid aspect-square h-28 w-28 shrink-0 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-4xl font-black text-cyan-100 sm:h-36 sm:w-36 xl:h-64 xl:w-full">
            {player.name.split(" ").map((part) => part[0]).join("")}
          </div>
          <div className="xl:mt-4">
            <div className="flex flex-wrap gap-2">
              <StatusBadge status={player.currentStatus} />
              <ConfidenceBadge level={player.confidence} score={player.confidenceScore} />
            </div>
            <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Mock player intelligence</p>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-black text-white sm:text-6xl">{player.name}</h1>
          <p className="mt-3 text-lg font-bold text-slate-300">
            {player.position} · {player.sport} · {player.classYear}
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            <HeroMetric label="Height" value={intelligence.height} />
            <HeroMetric label="Weight" value={`${intelligence.weight} lbs`} />
            <HeroMetric label="Hometown" value={intelligence.hometown} />
            <HeroMetric label="High School" value={intelligence.highSchool} />
            <HeroMetric label="Current School" value={intelligence.currentSchool} />
            <HeroMetric label="Previous Schools" value={intelligence.previousSchools.join(", ")} />
            <HeroMetric label="Portal Entry" value={formatDate(intelligence.portalEntryDate)} />
            <HeroMetric label="Eligibility" value={intelligence.eligibilityRemaining} />
            <HeroMetric label="Last Updated" value={formatDateTime(player.lastUpdated)} />
          </div>
        </div>

        <aside className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Portal Pulse Score™</p>
          <div className="mt-3 flex items-end gap-3">
            <p className="text-6xl font-black text-white">{intelligence.portalPulseScore}</p>
            <p className="pb-2 text-sm font-bold text-slate-400">/100</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <MovementBadge movement={intelligence.scoreMovementToday > 0 ? "up" : "flat"} value={`Today ${intelligence.scoreMovementToday >= 0 ? "+" : ""}${intelligence.scoreMovementToday}`} />
            <MovementBadge movement="up" value={`Week +${intelligence.scoreMovementWeek}`} />
            <MovementBadge movement="up" value={`Month +${intelligence.scoreMovementMonth}`} />
          </div>
          <div className="mt-5 grid gap-2">
            <HeroMetric label="Transfer Rating" value={intelligence.transferRating} />
            <HeroMetric label="Recruiting Rating" value={intelligence.recruitingRating} />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2">
            <ActionButton icon={Heart} label="Favorite" />
            <ActionButton icon={Share2} label="Share" />
            <ActionButton icon={Bell} label="Watch" />
            <ActionButton icon={GitCompare} label="Compare" />
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">Score is a mock intelligence placeholder, not a recruiting ranking.</p>
        </aside>
      </div>
    </section>
  );
}

function HeroMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-white/5 p-3">
      <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-black text-white">{value}</p>
    </div>
  );
}

function ActionButton({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <button className={`${buttonStyles} min-h-10 border border-white/10 bg-white/5 px-3 text-xs text-slate-200 hover:bg-white/10`} type="button">
      <Icon size={14} aria-hidden />
      {label}
    </button>
  );
}
