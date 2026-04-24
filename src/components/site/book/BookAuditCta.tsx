import { Link } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";

export function BookAuditCta() {
  return (
    <section className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="tile-cosmic relative overflow-hidden rounded-[32px] p-10 lg:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(50% 60% at 80% 20%, hsl(var(--lav-purple)/.35), transparent 60%), radial-gradient(40% 50% at 10% 90%, hsl(var(--lav-pink)/.22), transparent 60%)",
            }}
          />
          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <Reveal>
                <h2
                  className="font-display font-bold leading-[0.98] tracking-[-0.02em] text-[hsl(var(--starlight))]"
                  style={{ fontSize: "clamp(32px, 4.2vw, 52px)" }}
                >
                  Still on the fence?
                  <br />
                  <span style={{ color: "hsl(var(--gold))", fontStyle: "italic" }}>
                    Read the playbook first.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[hsl(var(--starlight)/.7)]">
                  See exactly how the system is built — week by week — before
                  you book the call.
                </p>
              </Reveal>
            </div>
            <div className="flex flex-col items-start gap-7 lg:items-end">
              <Reveal delay={1}>
                <Link
                  to="/how-it-works"
                  data-magnify
                  className="cta-purple rounded-full px-7 py-3.5 text-[13px] font-semibold"
                >
                  See How It Works →
                </Link>
              </Reveal>
              <Reveal delay={2}>
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--starlight)/.5)]">
                  ◴ 4-min read · no email required
                </span>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
