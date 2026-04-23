import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const modes = [
  {
    id: "capture",
    label: "Capture — Human-led",
    title: "When you need to be in the room.",
    body:
      "Shoots. Events. On-site production. Human operator on the ground — AI does the heavy lifting in post. Photos in 24 hours. Event reels before guests leave.",
  },
  {
    id: "augmented",
    label: "AI-Augmented",
    title: "The engine room. Where most work lives.",
    body:
      "You brief once. Human creative direction sets the standard. AI executes at scale — video, voice, repurposing, design. Human QC before anything reaches you.",
  },
  {
    id: "automated",
    label: "Automated",
    title: "Set it. It runs.",
    body:
      "For content that happens every week without you managing it. Once the system knows your brand — it produces on schedule. You review. You approve. Done.",
  },
];

export function DeliveryTabs() {
  return (
    <section className="px-6 py-20 md:px-16 md:py-28">
      <div className="mb-12">
        <p className="font-mono-tech mb-4 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
          03 / Delivery Modes
        </p>
        <h2
          className="font-display font-bold uppercase leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "clamp(36px, 6vw, 96px)" }}
        >
          Not every job needs a film crew.
          <br />
          Not every job can skip one.
        </h2>
      </div>

      <Tabs defaultValue="capture" className="w-full">
        <TabsList className="flex h-auto w-full flex-wrap items-center justify-start gap-0 rounded-none border-b border-white/10 bg-transparent p-0">
          {modes.map((m) => (
            <TabsTrigger
              key={m.id}
              value={m.id}
              className="font-mono-tech rounded-none border-b-2 border-transparent bg-transparent px-5 py-4 text-[11px] uppercase tracking-[0.25em] text-foreground/55 transition-all data-[state=active]:border-electric data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              {m.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {modes.map((m) => (
          <TabsContent key={m.id} value={m.id} className="mt-10">
            <h3
              className="font-display mb-6 font-bold uppercase leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(32px, 4.5vw, 64px)" }}
            >
              {m.title}
            </h3>
            <p className="max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
              {m.body}
            </p>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
