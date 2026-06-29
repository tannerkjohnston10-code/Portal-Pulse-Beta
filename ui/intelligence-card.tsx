import type { ReactNode } from "react";
import { cardStyles, motion, typography } from "@/lib/design-tokens";

export function IntelligenceCard({ title, subtitle, meta, children }: { title: string; subtitle?: string; meta?: ReactNode; children?: ReactNode }) {
  return (
    <article className={`${cardStyles} ${motion.hoverLift} p-5`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className={typography.cardTitle}>{title}</h3>
          {subtitle && <p className="mt-1 text-sm font-semibold text-slate-400">{subtitle}</p>}
        </div>
        {meta}
      </div>
      {children && <div className="mt-4">{children}</div>}
    </article>
  );
}
