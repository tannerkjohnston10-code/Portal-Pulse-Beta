import Link from "next/link";
import { appConfig } from "@/lib/config/app-config";
import { navigationLinks } from "@/lib/config/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050b14]">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-black text-white">{appConfig.name}</p>
          <p className="mt-1">Public reporting. Source-backed intelligence.</p>
        </div>
        <div className="flex flex-wrap gap-4 font-semibold">
          {navigationLinks.slice(1, 6).map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
