import type { LabAssistantGuidance } from "@/platform/labs/core/labs-types";

export function AIExplanationCard({ assistant }: { assistant: LabAssistantGuidance }) {
  return (
    <section className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">AI Simulation Assistant</p>
      <h2 className="mt-2 text-xl font-black text-white">{assistant.title}</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <p className="text-sm font-black text-white">Responsibilities</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-cyan-50">
            {assistant.responsibilities.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div>
          <p className="text-sm font-black text-white">Guardrails</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-cyan-50">
            {assistant.guardrails.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
      <div className="mt-4 grid gap-2">
        {assistant.suggestedPrompts.map((prompt) => (
          <button key={prompt} className="rounded-md border border-cyan-300/20 bg-slate-950/50 px-3 py-2 text-left text-sm font-semibold text-cyan-50" type="button">
            {prompt}
          </button>
        ))}
      </div>
    </section>
  );
}
