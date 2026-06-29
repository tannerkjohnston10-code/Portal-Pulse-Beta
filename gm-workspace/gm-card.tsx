import type { ReactNode } from "react";
import { panelStyles } from "@/lib/design-tokens";

export function GMCard({ title, eyebrow, children }: { title: string; eyebrow?: string; children: ReactNode }) {
  return (
    <section className={`${panelStyles} p-5`}>
      {eyebrow && <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">{eyebrow}</p>}
      <h2 className="mt-2 text-xl font-black text-white">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
