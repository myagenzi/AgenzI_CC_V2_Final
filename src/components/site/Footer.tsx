import logo from "@/assets/logo-horizontal.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-cosmic">
      <div className="mx-auto max-w-[1200px] px-6 py-14 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="AgenzI" className="h-7 w-auto" />
            <span className="text-xs text-foreground/40">© 2026 AgenzI · Hyderabad, India</span>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/60" aria-label="Footer">
            <a href="#three-engines" className="hover:text-foreground">CaaS</a>
            <a href="#three-engines" className="hover:text-foreground">MaaS</a>
            <a href="#three-engines" className="hover:text-foreground">Zenzai</a>
            <a href="#how-it-works" className="hover:text-foreground">How It Works</a>
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
            <a href="#contact" className="hover:text-foreground">Book Audit →</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
