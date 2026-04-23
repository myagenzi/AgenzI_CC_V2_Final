import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Creative — CaaS", href: "/what-we-do/creative-caas" },
  { label: "Marketing — MaaS", href: "/what-we-do/marketing-maas" },
  { label: "Intelligence — Zenzai", href: "/what-we-do/intelligence-zenzai" },
  { label: "Contact", href: "/#contact" },
];

type LeftRailProps = { currentEngine?: string };

export function LeftRail({ currentEngine = "Creative — CaaS" }: LeftRailProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-[88px] flex-col items-center justify-between border-r border-foreground/[0.08] py-8 md:flex">
        <Link to="/" className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-foreground/70 hover:text-foreground">
          A.
        </Link>

        <div className="flex flex-1 items-center justify-center">
          <span
            className="font-mono-tech text-[10px] uppercase tracking-[0.4em] text-foreground/40"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            AgenzI / {currentEngine}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-foreground/70 hover:text-foreground"
        >
          Menu
        </button>
      </aside>

      {/* Overlay menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background transition-opacity duration-500",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col px-12 py-10">
          <div className="flex items-center justify-between">
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-foreground/50">
              Index
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground hover:text-electric"
            >
              Close ✕
            </button>
          </div>

          <nav className="mt-auto flex flex-col gap-2 pb-12">
            {menuItems.map((item, i) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "group flex items-baseline gap-6 border-t border-white/5 py-6 transition-all duration-700",
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
                )}
                style={{ transitionDelay: open ? `${100 + i * 80}ms` : "0ms" }}
              >
                <span className="font-mono-tech text-[11px] text-foreground/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-5xl font-bold tracking-tight text-foreground transition-colors group-hover:text-electric md:text-7xl">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
