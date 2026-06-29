import Link from "next/link";
import { navigationLinks } from "@/lib/config/navigation";
import { panelStyles } from "@/lib/design-tokens";

export function Sidebar() {
  return (
    <aside className={`${panelStyles} sticky top-24 hidden h-fit p-3 lg:block`} aria-label="Sidebar navigation">
      <nav className="grid gap-1">
        {navigationLinks.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className="inline-flex min-h-10 items-center gap-2 rounded-md px-3 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white">
              <Icon size={16} aria-hidden />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
