import { useCursorPortal } from "./CursorPortal";

type Service = {
  id: string;
  number: string;
  title: string;
  blurb: string;
  capabilities: string[];
};

type Props = { service: Service };

export function ServiceGroup({ service }: Props) {
  const { setActive } = useCursorPortal();

  return (
    <article
      className="group grid grid-cols-12 gap-6 border-t border-white/8 py-14 transition-colors hover:bg-white/[0.02] md:py-20"
      onMouseEnter={() => setActive(service.id)}
      onMouseLeave={() => setActive(null)}
    >
      <div className="col-span-12 md:col-span-2">
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">
          {service.number}
        </span>
      </div>

      <div className="col-span-12 md:col-span-5">
        <h2
          className="font-display font-bold uppercase leading-[0.95] tracking-[-0.03em] transition-colors group-hover:text-electric"
          style={{ fontSize: "clamp(40px, 6vw, 96px)" }}
        >
          {service.title}
        </h2>
        <p className="mt-6 max-w-md text-base text-foreground/65 md:text-lg">
          {service.blurb}
        </p>
      </div>

      <ul className="col-span-12 grid grid-cols-1 gap-2 md:col-span-5 md:grid-cols-2">
        {service.capabilities.map((cap) => (
          <li key={cap}>
            <a
              href="/#contact"
              className="group/cap flex items-center justify-between gap-4 border-b border-white/5 py-3 text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              <span>{cap}</span>
              <span
                aria-hidden
                className="font-mono-tech text-foreground/40 transition-all duration-300 group-hover/cap:translate-x-1 group-hover/cap:text-electric"
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
