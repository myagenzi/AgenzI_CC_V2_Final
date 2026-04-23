import { Link } from "react-router-dom";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";
import { cn } from "@/lib/utils";

export type EngineData = {
  num: string;
  total: string;
  name: string;
  desc: string;
  tagline: string;
  bullets: string[];
  cta: string;
  href: string;
  dark?: boolean;
};

export function EngineCard({ data }: { data: EngineData }) {
  const { dark } = data;
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-3xl border p-6 md:p-10 lg:p-12 shadow-2xl",
        dark
          ? "border-white/10 bg-[#1C1C1C] text-white"
          : "border-white/60 bg-white/75 backdrop-blur-xl text-foreground",
      )}
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        {/* LEFT */}
        <div className="lg:col-span-4 flex flex-col">
          <div
            className={cn(
              "font-mono-tech text-[11px] uppercase tracking-[0.3em] mb-6",
              dark ? "text-white/50" : "text-muted-foreground",
            )}
          >
            {data.num} / {data.total}
          </div>
          <h3
            className={cn(
              "font-display font-extrabold leading-[0.95] tracking-[-0.04em] mb-5",
              dark ? "text-white" : "text-foreground",
            )}
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
          >
            {data.name}
          </h3>
          <p
            className={cn(
              "text-[15px] leading-relaxed max-w-sm",
              dark ? "text-white/65" : "text-muted-foreground",
            )}
          >
            {data.desc}
          </p>
        </div>

        {/* CENTER */}
        <div className="lg:col-span-4">
          <div className="relative">
            <MediaPlaceholder
              aspect="4/5"
              kind="image"
              label={data.name}
              className={cn(
                "!rounded-2xl",
                dark ? "!border-white/10 !bg-white/[0.04]" : "",
              )}
            />
            <div
              className={cn(
                "absolute bottom-3 left-3 right-3 rounded-xl px-3 py-2 backdrop-blur",
                dark ? "bg-black/50 text-white" : "bg-white/80 text-foreground",
              )}
            >
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] opacity-70">
                Service
              </p>
              <p className="text-[13px] font-semibold">{data.tagline}</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-4 flex flex-col">
          <ul className="space-y-3 mb-8">
            {data.bullets.map((b) => (
              <li
                key={b}
                className={cn(
                  "flex items-start gap-2 text-[14px] leading-relaxed",
                  dark ? "text-white/75" : "text-foreground/80",
                )}
              >
                <span
                  className={cn(
                    "mt-[2px] shrink-0",
                    dark ? "text-[hsl(var(--lav-lilac))]" : "text-primary",
                  )}
                >
                  →
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <Link
            to={data.href}
            className={cn(
              "mt-auto inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold transition hover:gap-3",
              dark
                ? "bg-white text-[#1C1C1C] hover:bg-white/90"
                : "bg-primary text-primary-foreground hover:bg-primary/90",
            )}
          >
            {data.cta} <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
