import logo from "@/assets/logo-horizontal.png";

export function Footer() {
  return (
    <footer className="border-t border-foreground/[0.06]">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-6 px-6 py-12 text-center lg:px-12">
        <img src={logo} alt="AgenzI" className="h-24 w-auto opacity-80" />
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] text-foreground/55" aria-label="Footer">
          <a data-magnify href="#three-engines" className="hover:text-foreground">CaaS</a>
          <a data-magnify href="#three-engines" className="hover:text-foreground">MaaS</a>
          <a data-magnify href="#three-engines" className="hover:text-foreground">Zenzai</a>
          <a data-magnify href="#how-it-works" className="hover:text-foreground">How It Works</a>
          <a data-magnify href="#pricing" className="hover:text-foreground">Pricing</a>
          <a data-magnify href="#contact" className="hover:text-foreground">Book Audit →</a>
        </nav>
        <p className="text-[11px] text-foreground/30">© 2026 AgenzI · Hyderabad, India</p>
      </div>
    </footer>
  );
}
