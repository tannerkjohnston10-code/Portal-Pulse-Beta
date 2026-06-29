"use client";

import { useMemo, useState } from "react";
import { BriefcaseBusiness, Clapperboard, ShieldCheck, UserRoundSearch, UsersRound } from "lucide-react";

const demoRoles = [
  {
    id: "fan",
    label: "Fan",
    description: "Trending athletes, market movement, quick search.",
    icon: UsersRound
  },
  {
    id: "coach",
    label: "Coach",
    description: "Roster needs, Atlas, Labs, program context.",
    icon: ShieldCheck
  },
  {
    id: "gm",
    label: "GM",
    description: "Roster health, scholarship IQ, executive priorities.",
    icon: BriefcaseBusiness
  },
  {
    id: "analyst",
    label: "Analyst",
    description: "Knowledge Graph, rankings, real-time pipeline.",
    icon: UserRoundSearch
  },
  {
    id: "media",
    label: "Media",
    description: "Reports, Network, Athena summaries.",
    icon: Clapperboard
  },
  {
    id: "admin",
    label: "Admin",
    description: "Review queues, beta metrics, pipeline health.",
    icon: ShieldCheck
  }
] as const;

export function DemoModeBar() {
  const [activeRole, setActiveRole] = useState<(typeof demoRoles)[number]["id"]>("fan");
  const role = useMemo(() => demoRoles.find((item) => item.id === activeRole) ?? demoRoles[0], [activeRole]);
  const Icon = role.icon;

  return (
    <section className="border-b border-white/10 bg-slate-950/95 px-4 py-2 backdrop-blur-xl" aria-label="Demo mode persona switcher">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
            <Icon size={17} aria-hidden />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Demo Mode™ · {role.label}</p>
            <p className="text-xs font-semibold text-slate-400">{role.description}</p>
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto" role="list" aria-label="Demo personas">
          {demoRoles.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveRole(item.id)}
              className={`min-h-9 shrink-0 rounded-md border px-3 text-xs font-black uppercase tracking-[0.12em] transition ${
                activeRole === item.id
                  ? "border-cyan-200 bg-cyan-200 text-slate-950"
                  : "border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
