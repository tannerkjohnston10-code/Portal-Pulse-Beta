import { Search } from "lucide-react";
import { inputStyles } from "@/lib/design-tokens";

export function SearchInput({ placeholder = "Search..." }: { placeholder?: string }) {
  return (
    <label className="relative block">
      <span className="sr-only">{placeholder}</span>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={17} aria-hidden />
      <input className={`${inputStyles} w-full pl-10`} placeholder={placeholder} />
    </label>
  );
}
