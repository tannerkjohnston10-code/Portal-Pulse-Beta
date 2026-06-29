import type { ReactNode } from "react";
import { BetaExperienceLayer } from "@/components/beta/beta-experience-layer";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100">
      <Navbar />
      <BetaExperienceLayer />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
