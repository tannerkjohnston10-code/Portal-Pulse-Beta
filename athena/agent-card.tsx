import { Bot, ShieldCheck } from "lucide-react";
import type { AthenaAgent } from "@/platform/athena/types/athena-types";

export function AgentCard({ agent }: { agent: AthenaAgent }) {
  return (
    <article className="rounded-lg border border-white/10 bg-slate-950/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
            <Bot size={18} aria-hidden />
          </span>
          <div className="min-w-0">
            <h2 className="text-base font-black text-white">{agent.name}</h2>
            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-cyan-200">{agent.codename}</p>
          </div>
        </div>
        <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-xs font-black uppercase tracking-wide text-emerald-200">
          {agent.status.replace("_", " ")}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{agent.mission}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {agent.specialty.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-bold text-slate-300">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3 text-xs font-bold text-slate-400">
        <ShieldCheck size={14} aria-hidden className="text-cyan-200" />
        Intelligence Core approval required
      </div>
    </article>
  );
}

