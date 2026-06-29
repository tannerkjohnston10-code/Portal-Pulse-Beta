import type { ReactNode } from "react";
import { typography } from "@/lib/design-tokens";

export function PageHeader({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description?: string; actions?: ReactNode }) {
  return (
    <section className="mb-8 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
      <div>
        {eyebrow && <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>}
        <h1 className={`max-w-5xl ${typography.pageTitle}`}>{title}</h1>
        {description && <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">{description}</p>}
      </div>
      {actions}
    </section>
  );
}
