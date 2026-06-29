import { AlertTriangle } from "lucide-react";
import { cardStyles } from "@/lib/design-tokens";

export function ErrorState({ title, description }: { title: string; description: string }) {
  return (
    <div className={`${cardStyles} grid place-items-center p-8 text-center`}>
      <AlertTriangle className="text-rose-300" size={28} aria-hidden />
      <h3 className="mt-4 text-lg font-black text-white">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );
}
