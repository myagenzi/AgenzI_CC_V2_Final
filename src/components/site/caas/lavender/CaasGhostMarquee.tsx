export function CaasGhostMarquee() {
  const word = "creative as a service";
  const items = Array.from({ length: 6 }, () => word);

  return (
    <section className="relative overflow-hidden py-16 md:py-24" aria-hidden>
      <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
        {[...items, ...items].map((w, i) => (
          <span
            key={i}
            className="lav-ghost-text"
            style={{ fontSize: "clamp(64px, 12vw, 180px)", lineHeight: 1 }}
          >
            {w}{" "}
            <span
              className="mx-6 inline-block align-middle"
              style={{
                width: "0.35em",
                height: "0.35em",
                borderRadius: "9999px",
                background:
                  "linear-gradient(135deg, hsl(var(--lav-purple)), hsl(var(--lav-pink)))",
                WebkitTextFillColor: "initial",
              }}
            />
          </span>
        ))}
      </div>
    </section>
  );
}
