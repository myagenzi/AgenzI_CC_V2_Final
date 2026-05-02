import { useEffect, useRef } from "react";

const GIFS = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const ROW1 = GIFS.slice(0, 11);
const ROW2 = GIFS.slice(11);

// Triple each row for seamless coverage during scroll
const STRIP1 = [...ROW1, ...ROW1, ...ROW1];
const STRIP2 = [...ROW2, ...ROW2, ...ROW2];

const TILE_W = 360;
const TILE_H = 220;
const TILE_GAP = 12;

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const visibleRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Only run the rAF loop while the section is visible.
    const observer = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { rootMargin: "200px" },
    );
    observer.observe(section);

    function tick() {
      rafRef.current = requestAnimationFrame(tick);
      if (!visibleRef.current) return;
      const row1 = row1Ref.current;
      const row2 = row2Ref.current;
      if (!section || !row1 || !row2) return;

      const offset =
        (window.scrollY - section.offsetTop + window.innerHeight) * 0.3;

      row1.style.transform = `translateX(${offset - 200}px)`;
      row2.style.transform = `translateX(${-(offset - 200)}px)`;
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#080808",
        overflow: "hidden",
        padding: "64px 0",
        position: "relative",
      }}
    >
      {/* Fade edges */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, #080808 0%, transparent 8%, transparent 92%, #080808 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Row 1 — moves right on scroll */}
      <div
        ref={row1Ref}
        style={{
          display: "flex",
          gap: TILE_GAP,
          marginBottom: TILE_GAP,
          willChange: "transform",
        }}
      >
        {STRIP1.map((src, i) => (
          <Tile key={i} src={src} />
        ))}
      </div>

      {/* Row 2 — moves left on scroll */}
      <div
        ref={row2Ref}
        style={{
          display: "flex",
          gap: TILE_GAP,
          willChange: "transform",
        }}
      >
        {STRIP2.map((src, i) => (
          <Tile key={i} src={src} />
        ))}
      </div>
    </section>
  );
}

function Tile({ src }: { src: string }) {
  return (
    <div
      style={{
        width: TILE_W,
        height: TILE_H,
        borderRadius: 16,
        overflow: "hidden",
        flexShrink: 0,
        border: "1px solid rgba(240,238,232,0.06)",
        background: "#111",
      }}
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
}
