"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const walkthroughSteps = [
  { label: "Command Center", href: "/command-center", detail: "Start with the flagship intelligence dashboard." },
  { label: "Search", href: "/players", detail: "Use athlete and program discovery as the main exploration path." },
  { label: "Knowledge Graph", href: "/knowledge-graph", detail: "Inspect relationships, evidence, and graph context." },
  { label: "AI Panels", href: "/athena", detail: "Review Athena and the agent network as proposal-only AI." },
  { label: "Coach Workspace", href: "/coach", detail: "Explore coach-facing roster and planning entry points." },
  { label: "GM Workspace", href: "/gm", detail: "Open executive roster strategy and planning." },
  { label: "Labs", href: "/labs", detail: "Run mock simulations separate from verified intelligence." },
  { label: "Network", href: "/network", detail: "Explore professional collaboration and reports." }
] as const;

export function WalkthroughPanel() {
  const [open, setOpen] = useState(true);
  const [index, setIndex] = useState(0);
  const step = walkthroughSteps[index];

  if (!open) {
    return null;
  }

  return (
    <aside className="fixed bottom-4 left-4 z-40 hidden w-[min(28rem,calc(100vw-2rem))] rounded-lg border border-white/10 bg-slate-950 p-4 shadow-2xl shadow-black/40 xl:block" aria-label="Beta walkthrough">
      <div className="flex items-start gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-purple-300/25 bg-purple-300/10 text-purple-100">
          <Sparkles size={16} aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Beta Walkthrough</p>
          <h2 className="mt-1 text-base font-black text-white">{step.label}</h2>
          <p className="mt-1 text-sm leading-6 text-slate-400">{step.detail}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-1">
          {walkthroughSteps.map((item, itemIndex) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setIndex(itemIndex)}
              className={`h-2.5 w-2.5 rounded-full ${itemIndex === index ? "bg-purple-200" : "bg-white/20"}`}
              aria-label={`Go to walkthrough step ${itemIndex + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => setOpen(false)} className="min-h-9 rounded-md border border-white/10 px-3 text-xs font-black uppercase tracking-[0.12em] text-slate-300 hover:bg-white/10 hover:text-white">
            Skip
          </button>
          <Link href={step.href} className="inline-flex min-h-9 items-center gap-2 rounded-md bg-purple-200 px-3 text-xs font-black uppercase tracking-[0.12em] text-slate-950 hover:bg-white">
            Open
            <ArrowRight size={14} aria-hidden />
          </Link>
          <button type="button" onClick={() => setIndex((current) => (current + 1) % walkthroughSteps.length)} className="min-h-9 rounded-md border border-white/10 px-3 text-xs font-black uppercase tracking-[0.12em] text-slate-300 hover:bg-white/10 hover:text-white">
            Next
          </button>
        </div>
      </div>
    </aside>
  );
}
