"use client";

import { Bot, SendHorizontal } from "lucide-react";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";

const prompts = [
  "Show me quarterbacks with the highest Portal Pulse Score.",
  "Compare Metro University and Prairie A&M.",
  "Which schools need offensive tackles?",
  "Explain why Player X is trending."
];

export function AIAssistantDock() {
  return (
    <DashboardWidget title="Portal Pulse AI Dock" subtitle="Future source-backed assistant. Conversation is not implemented yet." icon={Bot} span={12}>
      <div className="grid gap-4 xl:grid-cols-[1fr_24rem]">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <label className="sr-only" htmlFor="ai-assistant-input">
            Ask Portal Pulse AI
          </label>
          <div className="flex min-h-12 items-center gap-2 rounded-lg border border-white/10 bg-slate-950 px-3">
            <input id="ai-assistant-input" className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-white outline-none placeholder:text-slate-500" placeholder="Ask a source-backed sports intelligence question..." disabled />
            <button className="grid h-9 w-9 place-items-center rounded-md bg-cyan-300/12 text-cyan-200" type="button" aria-label="Send AI prompt placeholder" disabled>
              <SendHorizontal size={16} aria-hidden />
            </button>
          </div>
          <p className="mt-3 text-xs font-bold leading-5 text-slate-500">AI answers will require source links, confidence, contradictions, and timestamps before they can be elevated.</p>
        </div>
        <div className="grid gap-2">
          {prompts.map((prompt) => (
            <button key={prompt} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-left text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white" type="button">
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </DashboardWidget>
  );
}
