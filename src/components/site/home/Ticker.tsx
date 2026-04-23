const items = [
  "Most agencies give you output",
  "We give you a system that keeps producing it",
  "Human strategy + AI execution",
  "One system, built for your business",
  "Creative · Marketing · Automation — all running as one",
];

export function Ticker() {
  // Duplicate for seamless loop
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-navy py-3.5">
      <div className="flex w-max animate-ticker">
        {loop.map((text, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-7 whitespace-nowrap px-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40"
          >
            {text}
            <span className="text-[6px] text-primary">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
