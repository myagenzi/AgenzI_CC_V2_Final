import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-horizontal.png";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const whatWeDo = [
  { glyph: "✦", label: "CaaS", desc: "Creative as a Service", href: "/what-we-do/creative-caas" },
  { glyph: "◈", label: "MaaS", desc: "Marketing as a Service", href: "/what-we-do/marketing-maas" },
  { glyph: "⬡", label: "Zenzai", desc: "AI · Automation · Tech", href: "/what-we-do/intelligence-zenzai" },
];

const otherLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileWWDOpen, setMobileWWDOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (mobileOpen) {
        setHidden(false);
      } else if (y < 8) {
        setHidden(false);
      } else if (y > lastY.current && y > 80) {
        setHidden(true);
      } else if (y < lastY.current) {
        setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-6 lg:pt-10 transition-transform duration-300 ease-out",
          hidden && "-translate-y-[140%]",
        )}
      >
        <div
          className={cn(
            "flex w-full max-w-[1100px] items-center justify-between gap-4 rounded-full border border-white/60 bg-white/55 px-3 py-2 pl-4 backdrop-blur-xl backdrop-saturate-150 transition-all",
            scrolled && "shadow-[0_8px_32px_rgba(76,42,153,0.14)]",
          )}
        >
          <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="AgenzI home">
            <img src={logo} alt="AgenzI" className="h-11 w-auto md:h-14" />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-[13px] text-foreground/70 outline-none transition-colors hover:text-foreground data-[state=open]:text-foreground">
                What We Do
                <ChevronDown className="h-3.5 w-3.5 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                sideOffset={12}
                className="glass-strong w-[280px] rounded-2xl border-white/10 p-2 text-foreground"
              >
                {whatWeDo.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link
                      to={item.href}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 focus:bg-white/5"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-base text-foreground/85">
                        {item.glyph}
                      </span>
                      <span className="flex flex-col">
                        <span className="text-[13px] font-semibold text-foreground">{item.label}</span>
                        <span className="text-[11px] text-foreground/55">{item.desc}</span>
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {otherLinks.map((l) => (
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
              href="/#contact"
              className="hidden rounded-full px-4 py-2 text-[13px] text-foreground/70 transition hover:text-foreground sm:inline-flex"
            >
              Login
            </a>
            <a
              href="/#contact"
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
          "fixed inset-0 z-40 flex flex-col gap-1 overflow-y-auto bg-background px-6 pb-10 pt-28 transition-opacity md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <button
          type="button"
          onClick={() => setMobileWWDOpen((v) => !v)}
          className="flex items-center justify-between border-b border-border py-4 font-display text-2xl font-bold text-foreground/65 transition hover:text-foreground"
        >
          What We Do
          <ChevronDown className={cn("h-5 w-5 transition-transform", mobileWWDOpen && "rotate-180")} />
        </button>
        {mobileWWDOpen && (
          <div className="flex flex-col gap-1 border-b border-border py-2 pl-4">
            {whatWeDo.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 py-2 font-display text-lg text-foreground/70 hover:text-foreground"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-sm">
                  {item.glyph}
                </span>
                <span>
                  {item.label}
                  <span className="ml-2 text-[11px] font-normal text-foreground/45">{item.desc}</span>
                </span>
              </Link>
            ))}
          </div>
        )}
        {otherLinks.map((l) => (
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
          href="/#contact"
          onClick={() => setMobileOpen(false)}
          className="mt-4 font-display text-2xl font-bold text-primary"
        >
          Book Free Audit →
        </a>
      </div>
    </>
  );
}
