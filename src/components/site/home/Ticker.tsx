const items = [
  "Most agencies give you output",
  "We give you a system that keeps producing it",
  "Human strategy + AI execution",
  "One system, built for your business",
  "Creative · Marketing · Automation — all running as one",
];

export function Ticker() {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-foreground/[0.06] py-3">
      <div className="flex w-max animate-ticker" style={{ animationDuration: "55s" }}>
        {loop.map((text, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-7 whitespace-nowrap px-8 text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/30"
          >
            {text}
            <span className="text-[5px] text-primary/60">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
