"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Menu, Search } from "lucide-react";
import { appConfig } from "@/lib/config/app-config";
import { navigationLinks } from "@/lib/config/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07111f]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-fit items-center gap-3" aria-label="Portal Pulse home">
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/30 bg-cyan-300/12 text-cyan-200">
            <Activity size={20} aria-hidden />
          </span>
          <span>
            <span className="block text-base font-black text-white">{appConfig.name}</span>
            <span className="block text-xs font-semibold text-slate-400">{appConfig.tagline}</span>
          </span>
        </Link>
        <Link href="/players" className="hidden min-h-10 w-64 items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 text-sm font-bold text-slate-400 transition hover:bg-white/10 hover:text-white xl:inline-flex" aria-label="Open global search">
          <Search size={16} aria-hidden />
          Search Portal Pulse
          <span className="ml-auto rounded border border-white/10 px-1.5 py-0.5 text-[10px] font-black text-slate-500">/</span>
        </Link>
        <label className="hidden min-h-10 items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 text-xs font-black uppercase tracking-[0.12em] text-slate-500 xl:inline-flex">
          Sport
          <select className="bg-transparent text-sm font-black normal-case tracking-normal text-white outline-none" defaultValue="football" aria-label="Global sport selector">
            <option className="bg-slate-950" value="football">Football</option>
            <option className="bg-slate-950" value="mens-basketball">Men's Basketball</option>
            <option className="bg-slate-950" value="womens-basketball">Women's Basketball</option>
            <option className="bg-slate-950" value="baseball">Baseball</option>
            <option className="bg-slate-950" value="softball">Softball</option>
          </select>
        </label>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navigationLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex min-h-10 items-center gap-2 rounded-md px-3 text-sm font-bold transition ${
                  isActive ? "bg-white text-slate-950" : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={16} aria-hidden />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-black uppercase tracking-wide text-emerald-200 sm:block">
          Beta Mock
        </div>
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-slate-200 lg:hidden" aria-label="Open navigation">
          <Menu size={18} aria-hidden />
        </button>
      </div>
      <nav className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 pb-3 sm:px-6 lg:hidden" aria-label="Mobile navigation">
        {navigationLinks.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`inline-flex min-h-10 shrink-0 items-center gap-2 rounded-md px-3 text-sm font-bold ${
                isActive ? "bg-white text-slate-950" : "bg-white/5 text-slate-300"
              }`}
            >
              <Icon size={15} aria-hidden />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
