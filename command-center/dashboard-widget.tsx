import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import { motion, panelStyles, typography } from "@/lib/design-tokens";

const spanStyles: Record<number, string> = {
  3: "md:col-span-4 xl:col-span-3",
  4: "md:col-span-4 xl:col-span-4",
  5: "md:col-span-4 xl:col-span-5",
  6: "md:col-span-4 xl:col-span-6",
  7: "md:col-span-8 xl:col-span-7",
  8: "md:col-span-8 xl:col-span-8",
  9: "md:col-span-8 xl:col-span-9",
  12: "md:col-span-8 xl:col-span-12"
};

export function DashboardWidget({
  title,
  subtitle,
  icon: Icon,
  span = 4,
  toolbar,
  children
}: {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  span?: 3 | 4 | 5 | 6 | 7 | 8 | 9 | 12;
  toolbar?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className={`${panelStyles} ${motion.hoverLift} min-w-0 p-4 ${spanStyles[span]}`} aria-labelledby={`${title.toLowerCase().replaceAll(" ", "-")}-widget`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          {Icon && (
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
              <Icon size={17} aria-hidden />
            </span>
          )}
          <div className="min-w-0">
            <h2 id={`${title.toLowerCase().replaceAll(" ", "-")}-widget`} className={typography.cardTitle}>
              {title}
            </h2>
            {subtitle && <p className="mt-1 text-xs font-semibold leading-5 text-slate-400">{subtitle}</p>}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {toolbar}
          <button className="grid h-8 w-8 place-items-center rounded-md border border-white/10 text-slate-400 transition hover:bg-white/10 hover:text-white" aria-label={`Open ${title} widget menu`}>
            <MoreHorizontal size={16} aria-hidden />
          </button>
        </div>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}
