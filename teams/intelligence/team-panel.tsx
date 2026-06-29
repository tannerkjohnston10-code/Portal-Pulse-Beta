import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { panelStyles } from "@/lib/design-tokens";

export function TeamPanel({
  title,
  subtitle,
  icon: Icon,
  children
}: {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  children: ReactNode;
}) {
  return (
    <section className={`${panelStyles} p-5`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-black text-white">{title}</h2>
          {subtitle && <p className="mt-1 text-sm font-semibold leading-6 text-slate-400">{subtitle}</p>}
        </div>
        {Icon && (
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
            <Icon size={18} aria-hidden />
          </span>
        )}
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}
