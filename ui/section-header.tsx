export function SectionHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mb-4">
      {eyebrow && <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-300">{eyebrow}</p>}
      <h2 className="text-xl font-black text-white sm:text-2xl">{title}</h2>
      {description && <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">{description}</p>}
    </div>
  );
}
