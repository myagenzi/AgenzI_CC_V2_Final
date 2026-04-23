export function MaasGhostMarquee() {
  const word = "marketing as a service";
  const items = Array.from({ length: 6 }, () => word);

  return (
    <section className="relative overflow-hidden py-16 md:py-24" aria-hidden>
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {[...items, ...items].map((w, i) => (
          <span
            key={i}
            className="lav-ghost-text"
            style={{ fontSize: "clamp(64px, 12vw, 180px)", lineHeight: 1 }}
          >
            {w} _
          </span>
        ))}
      </div>
    </section>
  );
}
