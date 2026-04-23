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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-6 lg:pt-10">
        <div
          className={cn(
            "glass flex w-full max-w-[1100px] items-center justify-between gap-4 rounded-full px-3 py-2 pl-5 transition-all",
            scrolled && "shadow-[0_8px_32px_hsl(0_0%_0%/0.35)]",
          )}
        >
          <a href="#top" className="flex items-center gap-2.5 shrink-0" aria-label="AgenzI home">
            <img src={logo} alt="AgenzI" className="h-6 w-auto md:h-7" />
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-full px-4 py-2 text-[13px] text-foreground/70 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full px-4 py-2 text-[13px] text-foreground/70 transition hover:text-foreground sm:inline-flex"
            >
              Login
            </a>
            <a
              href="#contact"
              className="cta-glow rounded-full bg-primary px-4 py-2 text-[13px] font-semibold text-primary-foreground"
            >
              Book Free Audit
            </a>
            <button
              type="button"
              className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
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
          "fixed inset-0 z-40 flex flex-col gap-1 bg-cosmic px-6 pb-10 pt-28 transition-opacity md:hidden",
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
