import { useEffect, useState } from "react";
import { Reveal } from "@/components/site/Reveal";

function useLiveTime() {
  const [time, setTime] = useState<string>("--:--:--");
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      });
    setTime(fmt());
    const id = window.setInterval(() => setTime(fmt()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

const stats = [
  { num: "70%", label: "Lower cost than traditional agencies" },
  { num: "48h", label: "From brief to live creative" },
  { num: "3", label: "Services. One integrated system." },
  { num: "90D", label: "Performance guarantee in writing" },
];

export function Hero() {
  const time = useLiveTime();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-24 pt-32 lg:px-12 lg:pt-36"
    >
      {/* Background washes */}
      <div className="absolute inset-0 -z-10 bg-gradient-hero" aria-hidden />
      <div
        className="absolute inset-0 -z-10 bg-[length:60px_60px] [mask-image:linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.4)_25%,rgba(0,0,0,0.14)_80%,transparent_100%)]"
        style={{ backgroundImage: "var(--gradient-grid)" }}
        aria-hidden
      />
      {/* Giant background wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[clamp(80px,16vw,210px)] font-extrabold tracking-[0.14em] md:block"
        style={{
          color: "transparent",
          WebkitTextStroke: "1px hsl(var(--peri) / 0.08)",
        }}
      >
        AGENZI
      </div>

      {/* Halo / nucleus on the right */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[5vw] top-1/2 hidden h-[min(400px,32vw)] w-[min(400px,32vw)] -translate-y-1/2 items-center justify-center md:flex"
      >
        <div className="absolute inset-0 animate-spin-slower rounded-full border border-peri/20" />
        <div className="absolute inset-[12%] animate-spin-slow rounded-full border border-gold/15" />
        <div className="absolute inset-[28%] rounded-full border border-gold/20" />
        <div
          className="absolute inset-[18%] rounded-full opacity-70"
          style={{
            background: "radial-gradient(circle, hsl(var(--gold) / 0.25) 0%, transparent 70%)",
          }}
        />
        <div
          className="relative h-[22%] w-[22%] animate-halo-pulse rounded-full"
          style={{
            background:
              "radial-gradient(circle at 38% 35%, #ffffff 0%, hsl(var(--gold)) 35%, hsl(var(--royal)) 70%, hsl(var(--cosmic)) 100%)",
            boxShadow: "0 0 80px hsl(var(--gold) / 0.45)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-7">Human + AI · One System · Built for Your Business</p>
          </Reveal>
          <h1 className="mb-5 font-display text-[clamp(44px,7.5vw,92px)] font-extrabold leading-[1.02] tracking-[-0.03em] text-foreground">
            Your competitors
            <br />
            aren't working harder.
            <br />
            <em className="not-italic text-primary">They have better systems.</em>
          </h1>
          <p
            className="mb-7 max-w-2xl font-display text-[clamp(17px,2.2vw,24px)] font-medium leading-snug text-moondust opacity-0 [animation-delay:0.5s] [animation-fill-mode:both]"
            style={{ animation: "wordIn 0.9s cubic-bezier(0.16,1,0.3,1) both", animationDelay: "0.5s" }}
          >
            The question is — how long can you afford to stay where you are?
          </p>
          <p className="mb-10 max-w-xl text-base leading-[1.8] text-foreground/45">
            While you're managing vendors, chasing updates, and juggling tools — they've already streamlined
            everything. AgenzI replaces agencies, tools, and manual work with{" "}
            <strong className="text-foreground/85">one intelligent system</strong> built for your business.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary-bright hover:shadow-gold"
            >
              Book Your Free AI Audit →
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-3.5 text-sm font-medium text-foreground transition hover:border-foreground/40 hover:bg-foreground/[0.06]"
            >
              See How It Works ↓
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-y-8 border-t border-foreground/[0.07] pt-9 sm:grid-cols-4 sm:gap-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-0 sm:px-6 ${i !== 0 ? "sm:border-l sm:border-foreground/[0.07]" : ""} ${i === 0 ? "sm:pl-0" : ""} ${i === stats.length - 1 ? "sm:pr-0" : ""}`}
            >
              <div className="mb-1.5 font-display text-[38px] font-extrabold leading-none tracking-[-0.04em] text-foreground">
                <span className="text-primary">{s.num.match(/^\d+/)?.[0]}</span>
                {s.num.replace(/^\d+/, "")}
              </div>
              <div className="text-xs leading-snug text-foreground/30">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between border-t border-foreground/5 px-6 py-4 lg:px-12">
        <div className="flex items-center gap-3 text-xs text-foreground/45">
          <span>Hyderabad, India</span>
          <span aria-hidden>·</span>
          <span className="font-mono tabular-nums">IST {time}</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/45">
          <span className="inline-block h-1.5 w-1.5 animate-green-pulse rounded-full bg-[hsl(142_71%_58%)]" />
          Systems active
        </div>
      </div>
    </section>
  );
}
