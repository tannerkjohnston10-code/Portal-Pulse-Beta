import type { ReactNode } from "react";
import Link from "next/link";

export function PageFrame({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-8">
        <nav className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-cyan-200">Home</Link>
          <span aria-hidden>/</span>
          <span className="text-cyan-200">{eyebrow}</span>
        </nav>
        <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>
        <h1 className="max-w-5xl text-3xl font-black tracking-normal text-white sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">{description}</p>
      </section>
      {children}
    </div>
  );
}
