import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      data-anim
      className={cn(
        "flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]",
        dark ? "text-blue-400" : "text-blue-600",
      )}
    >
      <span aria-hidden className={cn("h-0.5 w-6", dark ? "bg-blue-400" : "bg-blue-600")} />
      {children}
    </p>
  );
}

type Variant = "primary" | "white" | "outline";
const variants: Record<Variant, string> = {
  primary: "bg-blue-600 text-primary-foreground hover:bg-navy-700",
  white: "bg-background text-navy-700 hover:bg-soft",
  outline: "border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-primary-foreground",
};

export function MbButton({
  href,
  children,
  variant = "primary",
  external,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-bold transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
    </a>
  );
}

/** Curvas fluidas decorativas de marca */
export function BrandCurves({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 400 400" fill="none" className={cn("pointer-events-none absolute", className)}>
      <path d="M0 320 C120 300 180 200 260 140 C320 95 360 40 400 0" stroke="currentColor" strokeWidth="2" />
      <path d="M0 360 C140 340 200 240 290 170 C340 130 380 70 400 40" stroke="currentColor" strokeWidth="1.5" opacity=".6" />
      <path d="M0 400 C160 380 230 280 320 200 C360 165 390 110 400 80" stroke="currentColor" strokeWidth="1" opacity=".35" />
    </svg>
  );
}

/** Placeholder em gradiente azul-marinho para locais sem foto */
export function NavyPlaceholder({ className, label }: { className?: string; label?: string }) {
  return (
    <div role="img" aria-label={label ?? "Imagem ilustrativa"} className={cn("relative overflow-hidden bg-gradient-navy", className)}>
      <BrandCurves className="right-0 bottom-0 h-full w-full text-blue-400 opacity-30" />
    </div>
  );
}
