"use client";

import { useState } from "react";
import { MessageSquarePlus, X } from "lucide-react";

const feedbackTypes = ["Report Bug", "Suggest Improvement", "Rate Experience", "Page Feedback", "Feature Request"] as const;

export function BetaFeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="w-[min(92vw,24rem)] rounded-lg border border-white/10 bg-slate-950 p-4 shadow-2xl shadow-black/40">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Beta Feedback</p>
              <h2 className="mt-1 text-base font-black text-white">Help tune Portal Pulse</h2>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="rounded-md p-2 text-slate-400 hover:bg-white/10 hover:text-white" aria-label="Close feedback form">
              <X size={16} aria-hidden />
            </button>
          </div>
          {submitted ? (
            <div className="mt-4 rounded-md border border-emerald-300/20 bg-emerald-300/10 p-3 text-sm font-bold leading-6 text-emerald-50">
              Mock feedback saved for this session. No real submission was sent.
            </div>
          ) : (
            <form
              className="mt-4 grid gap-3"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <label className="grid gap-1 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                Feedback type
                <select className="min-h-10 rounded-md border border-white/10 bg-slate-900 px-3 text-sm font-bold normal-case tracking-normal text-white">
                  {feedbackTypes.map((type) => <option key={type}>{type}</option>)}
                </select>
              </label>
              <label className="grid gap-1 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                Comments
                <textarea className="min-h-24 rounded-md border border-white/10 bg-slate-900 p-3 text-sm font-semibold normal-case tracking-normal text-white outline-none transition focus:border-cyan-300/60" placeholder="What felt confusing, slow, or excellent?" />
              </label>
              <label className="grid gap-1 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                Screenshot
                <button type="button" className="min-h-10 rounded-md border border-dashed border-white/15 bg-white/[0.03] px-3 text-left text-sm font-bold normal-case tracking-normal text-slate-300">
                  Upload screenshot placeholder
                </button>
              </label>
              <button type="submit" className="min-h-10 rounded-md bg-cyan-300 px-4 text-sm font-black text-slate-950 transition hover:bg-white">
                Save Mock Feedback
              </button>
            </form>
          )}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setOpen(true);
          }}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300 px-4 text-sm font-black text-slate-950 shadow-2xl shadow-cyan-950/40 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          <MessageSquarePlus size={16} aria-hidden />
          Feedback
        </button>
      )}
    </div>
  );
}
