type Props = { words: string[] };

export function MarqueeStatement({ words }: Props) {
  const row = [...words, ...words, ...words, ...words];
  return (
    <div className="overflow-hidden border-y border-white/8 py-8">
      <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
        {row.map((w, i) => (
          <span
            key={i}
            className="font-display text-5xl font-bold uppercase tracking-tight text-foreground/85 md:text-7xl"
          >
            {w}
            <span className="ml-12 inline-block text-electric">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
