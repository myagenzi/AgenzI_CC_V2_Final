import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, LogOut } from "lucide-react";
import logo from "@/assets/logo-horizontal.png";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SESSION_KEY = "agenzl_v2_loaded";

const whatWeDo = [
  { glyph: "✦", label: "CaaS", desc: "Creative as a Service", href: "/what-we-do/creative-caas" },
  { glyph: "◈", label: "MaaS", desc: "Marketing as a Service", href: "/what-we-do/marketing-maas" },
  { glyph: "⬡", label: "Zenzai", desc: "AI · Automation · Tech", href: "/what-we-do/intelligence-zenzai" },
];

const navLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileWWDOpen, setMobileWWDOpen] = useState(false);
  const [loaderDone, setLoaderDone] = useState(
    () => !!sessionStorage.getItem(SESSION_KEY),
  );
  const location = useLocation();
  const { user, signOut } = useAuth();
  const initial = user?.email?.[0]?.toUpperCase() ?? "U";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (loaderDone) return;
    const handler = () => setLoaderDone(true);
    window.addEventListener("pageLoaderDone", handler);
    return () => window.removeEventListener("pageLoaderDone", handler);
  }, [loaderDone]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={loaderDone ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          background: "rgba(8,8,8,0.75)",
          borderBottom: "1px solid rgba(240,238,232,0.08)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.45)" : "none",
          transition: "box-shadow 300ms ease",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between px-6 py-4 md:px-10"
          style={{ maxWidth: 1280 }}
        >
          {/* LEFT — Logo */}
          <Link to="/" aria-label="AgenzI home" data-cursor="hover">
            <img src={logo} alt="AgenzI" style={{ height: 32, width: "auto" }} />
          </Link>

          {/* CENTER — Nav links pill (desktop) */}
          <nav
            className="hidden md:flex items-center gap-0"
            aria-label="Main"
            style={{
              padding: "8px 8px",
              borderRadius: 9999,
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* What We Do dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                data-cursor="hover"
                className="outline-none"
                style={navLinkStyle(false)}
                asChild={false}
              >
                <span className="inline-flex items-center gap-1">
                  What We Do
                  <ChevronDown style={{ width: 12, height: 12, opacity: 0.7 }} />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                sideOffset={16}
                style={{
                  background: "rgba(17,17,17,0.97)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(240,238,232,0.08)",
                  borderRadius: 16,
                  padding: 8,
                  minWidth: 240,
                }}
              >
                {whatWeDo.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link
                      to={item.href}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors"
                      style={{ color: "rgba(240,238,232,0.85)" }}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          border: "1px solid rgba(240,238,232,0.1)",
                          background: "rgba(255,255,255,0.03)",
                          fontSize: 14,
                          flexShrink: 0,
                        }}
                      >
                        {item.glyph}
                      </span>
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: 13, fontWeight: 600 }}>{item.label}</span>
                        <span style={{ fontSize: 11, color: "rgba(240,238,232,0.45)" }}>
                          {item.desc}
                        </span>
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                data-cursor="hover"
                style={navLinkStyle(isActive(l.href))}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT — CTA + auth + mobile toggle */}
          <div className="flex items-center gap-3">
            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger
                  data-cursor="hover"
                  className="hidden sm:inline-flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-semibold outline-none"
                  style={{ background: "rgba(104,112,189,0.15)", color: "var(--ring-2)" }}
                  aria-label="Account"
                >
                  {initial}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  sideOffset={12}
                  style={{
                    background: "rgba(17,17,17,0.97)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(240,238,232,0.08)",
                    borderRadius: 16,
                    padding: 8,
                    minWidth: 180,
                    color: "#F0EEE8",
                  }}
                >
                  <div
                    style={{
                      padding: "8px 12px",
                      fontSize: 11,
                      color: "rgba(240,238,232,0.5)",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {user.email}
                  </div>
                  <DropdownMenuItem
                    onClick={() => signOut()}
                    className="rounded-xl px-3 py-2 transition-colors"
                  >
                    <LogOut style={{ marginRight: 8, width: 14, height: 14 }} />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            <div className="hidden md:block">
              <PrimaryButton label="Get a Free System Audit" href="/book-audit" size="sm" />
            </div>

            {/* Hamburger (mobile only) */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(240,238,232,0.1)",
              }}
              data-cursor="hover"
            >
              {mobileOpen ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 2L14 14M14 2L2 14" stroke="#F0EEE8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <line x1="2" y1="5" x2="14" y2="5" stroke="#F0EEE8" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="2" y1="11" x2="14" y2="11" stroke="#F0EEE8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 95% 5%)" }}
            animate={{ clipPath: "circle(150% at 95% 5%)" }}
            exit={{ clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 48,
              background: "#080808",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                marginBottom: 40,
              }}
            >
              {/* What We Do with sub-links */}
              <motion.button
                type="button"
                onClick={() => setMobileWWDOpen((v) => !v)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                style={mobileNavLinkStyle}
                data-cursor="hover"
              >
                What We Do
              </motion.button>

              <AnimatePresence>
                {mobileWWDOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 4,
                      marginBottom: 8,
                    }}
                  >
                    {whatWeDo.map((item, i) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <Link
                          to={item.href}
                          onClick={() => setMobileOpen(false)}
                          style={{
                            fontSize: "clamp(1.2rem,4vw,2rem)",
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontWeight: 700,
                            color: "rgba(240,238,232,0.55)",
                            textTransform: "uppercase",
                            textDecoration: "none",
                          }}
                          data-cursor="hover"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    to={l.href}
                    onClick={() => setMobileOpen(false)}
                    style={mobileNavLinkStyle}
                    data-cursor="hover"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <PrimaryButton
                label="Get a Free System Audit"
                href="/book-audit"
                size="lg"
                onClick={() => setMobileOpen(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function navLinkStyle(active: boolean): React.CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    padding: "8px 16px",
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 13,
    fontWeight: 500,
    color: active ? "#F0EEE8" : "rgba(240,238,232,0.75)",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    borderRadius: 9999,
    background: active ? "rgba(255,255,255,0.07)" : "transparent",
    textDecoration: "none",
    transition: "color 150ms, background 150ms",
    cursor: "none",
    whiteSpace: "nowrap",
  };
}

const mobileNavLinkStyle: React.CSSProperties = {
  fontSize: "clamp(2rem,6vw,3.5rem)",
  fontFamily: "'Bricolage Grotesque', sans-serif",
  fontWeight: 700,
  color: "#F0EEE8",
  textTransform: "uppercase",
  textDecoration: "none",
  background: "none",
  border: "none",
  cursor: "none",
  padding: "8px 0",
  lineHeight: 1.05,
};
