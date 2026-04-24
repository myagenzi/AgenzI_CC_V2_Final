type Props = { words: string[] };

export function MarqueeStatement({ words }: Props) {
  const row = [...words, ...words, ...words, ...words];

  return (
    <div className="overflow-hidden border-y border-foreground/[0.06] py-4">
      <div
        className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap"
        style={{ animationDuration: "38s" }}
      >
        {row.map((w, i) => (
          <span
            key={i}
            className="font-display text-3xl font-bold uppercase tracking-tight text-foreground/80 md:text-5xl"
          >
            {w}
            <span className="ml-8 inline-block text-[hsl(var(--lav-purple))]">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
