import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-horizontal.png";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Solutions", href: "#three-engines" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-[68px] backdrop-blur-xl border-b border-border/60 transition-shadow",
          scrolled ? "shadow-card" : "shadow-none",
        )}
        style={{ backgroundColor: "hsl(var(--cosmic) / 0.92)" }}
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 lg:px-12">
          <a href="#top" className="flex items-center gap-2.5" aria-label="AgenzI home">
            <img src={logo} alt="AgenzI" className="h-7 w-auto md:h-8" />
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-lg px-4 py-2 text-sm text-foreground/55 transition-colors hover:bg-foreground/[0.06] hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="hidden rounded-full border border-foreground/15 px-4 py-2 text-xs font-medium text-foreground/85 transition hover:border-foreground/40 hover:bg-foreground/5 md:inline-flex"
            >
              See pricing
            </a>
            <a
              href="#contact"
              className="rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-cta transition hover:-translate-y-px hover:bg-primary-bright"
            >
              Book Free Audit →
            </a>
            <button
              type="button"
              className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col gap-1 bg-cosmic px-6 pb-10 pt-24 transition-opacity md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        {navLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setMobileOpen(false)}
            className="border-b border-border py-4 font-display text-2xl font-bold text-foreground/65 transition hover:text-foreground"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMobileOpen(false)}
          className="mt-4 font-display text-2xl font-bold text-primary"
        >
          Book Free Audit →
        </a>
      </div>
    </>
  );
}
