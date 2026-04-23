import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";

const tiles = [
  { label: "3D tile",     rot: -6, top: "0%",   left: "10%", size: "w-44 h-44 md:w-52 md:h-52", delay: "0s" },
  { label: "Icon cluster", rot: 4, top: "8%",   left: "55%", size: "w-36 h-36 md:w-44 md:h-44", delay: "0.6s" },
  { label: "Glass cube",  rot: -3, top: "48%",  left: "0%",  size: "w-40 h-40 md:w-48 md:h-48", delay: "1.2s" },
  { label: "App badge",    rot: 8, top: "52%",  left: "48%", size: "w-44 h-44 md:w-56 md:h-56", delay: "0.3s" },
];

export function HeroTiles() {
  return (
    <div className="relative aspect-square w-full max-w-[520px]">
      {/* Golden orb glow behind tiles */}
      <div className="orb-gold absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2" aria-hidden />
      <div className="orb-gold absolute right-[-40px] top-[20%] h-[180px] w-[180px] opacity-70" aria-hidden />

      {tiles.map((t) => (
        <div
          key={t.label}
          className={`float-tile absolute ${t.size}`}
          style={{
            top: t.top,
            left: t.left,
            animationDelay: t.delay,
            ["--rot" as string]: `${t.rot}deg`,
          }}
        >
          <div className="h-full w-full" style={{ transform: `rotate(${t.rot}deg)` }}>
            <MediaPlaceholder aspect="1/1" kind="image" label={t.label} className="rounded-3xl" />
          </div>
        </div>
      ))}
    </div>
  );
}
