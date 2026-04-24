export function ScrollTeaser({ label = "Scroll" }: { label?: string }) {
  return (
    <div className="pointer-events-none flex flex-col items-center gap-2 opacity-80">
      <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-foreground/55">
        {label}
      </span>
      <span className="scroll-teaser-line block h-10 w-px bg-[hsl(var(--lav-purple)/0.4)]" />
    </div>
  );
}
