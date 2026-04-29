import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const expects = [
  {
    icon: "🔍",
    title: "We map your current setup",
    desc: "Where time is wasted, where money leaks, where AI can win fastest.",
  },
  {
    icon: "📋",
    title: "You get a roadmap",
    desc: "A prioritised list of what to fix and in what order — yours to keep.",
  },
  {
    icon: "✅",
    title: "No obligation",
    desc: "You decide what happens next. No pressure, no automatic enrolment.",
  },
];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  struggle: "",
  message: "",
};

export function BookAuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState(initialForm);

  const update = (k: keyof typeof initialForm) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting || submitted) return;

    const fullName = `${form.firstName} ${form.lastName}`.trim();
    if (!fullName || !form.email.trim()) {
      toast({
        title: "Missing info",
        description: "Please share your name and a valid email.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("audit_bookings").insert({
      full_name: fullName,
      email: form.email.trim(),
      company: form.company.trim() || null,
      phone: form.phone.trim() || null,
      message:
        [form.struggle && `Struggle: ${form.struggle}`, form.message]
          .filter(Boolean)
          .join("\n\n") || null,
      source: "book-audit-page",
    });
    setSubmitting(false);

    if (error) {
      console.error("audit_bookings insert failed", error);
      toast({
        title: "Couldn't submit",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <section className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          {/* LEFT — form card */}
          <Reveal>
            <div className="glass-lavender rounded-[28px] p-7 lg:p-10">
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--lav-purple))]">
                ◆ Audit Request
              </span>
              <h2 className="mt-3 font-display text-[28px] font-bold leading-tight tracking-[-0.02em] text-foreground lg:text-[34px]">
                Book your Free AI Audit
              </h2>
              <p className="mt-2 text-[14px] text-foreground/60">
                30 minutes. No pitch. No commitment.
              </p>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="First name">
                    <Input
                      data-magnify
                      type="text"
                      placeholder="Your name"
                      className="form-field"
                      value={form.firstName}
                      onChange={update("firstName")}
                      required
                    />
                  </Field>
                  <Field label="Last name">
                    <Input
                      data-magnify
                      type="text"
                      placeholder="Last name"
                      className="form-field"
                      value={form.lastName}
                      onChange={update("lastName")}
                    />
                  </Field>
                </div>
                <Field label="Business email">
                  <Input
                    data-magnify
                    type="email"
                    placeholder="you@company.com"
                    className="form-field"
                    value={form.email}
                    onChange={update("email")}
                    required
                  />
                </Field>
                <Field label="WhatsApp number">
                  <Input
                    data-magnify
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="form-field"
                    value={form.phone}
                    onChange={update("phone")}
                  />
                </Field>
                <Field label="Business / Brand name">
                  <Input
                    data-magnify
                    type="text"
                    placeholder="Your business name"
                    className="form-field"
                    value={form.company}
                    onChange={update("company")}
                  />
                </Field>
                <Field label="What are you struggling with most?">
                  <Select
                    value={form.struggle}
                    onValueChange={(v) => setForm((f) => ({ ...f, struggle: v }))}
                  >
                    <SelectTrigger data-magnify className="form-field h-auto py-3 text-left">
                      <SelectValue placeholder="Select one..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vendors">Too many vendors / no alignment</SelectItem>
                      <SelectItem value="content">Content creation taking too long</SelectItem>
                      <SelectItem value="marketing">Marketing not generating revenue</SelectItem>
                      <SelectItem value="manual">Manual processes eating time</SelectItem>
                      <SelectItem value="ai">AI tools not working for us</SelectItem>
                      <SelectItem value="all">All of the above</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Tell us more (optional)">
                  <Textarea
                    data-magnify
                    placeholder="What's the biggest bottleneck in your business right now?"
                    className="form-field min-h-[110px] resize-none"
                    value={form.message}
                    onChange={update("message")}
                  />
                </Field>

                <button
                  type="submit"
                  data-magnify
                  disabled={submitted || submitting}
                  className={`mt-2 w-full rounded-full px-6 py-4 text-[14px] font-semibold transition ${
                    submitted
                      ? "bg-[hsl(142_71%_45%)] text-white"
                      : "cta-purple"
                  }`}
                >
                  {submitted
                    ? "Submitted! We'll be in touch shortly ✓"
                    : submitting
                    ? "Submitting..."
                    : "Book Free Audit →"}
                </button>
                <p className="text-center text-[12px] text-foreground/50">
                  We respond within 24 hours. No spam. Ever.
                </p>
              </form>
            </div>
          </Reveal>

          {/* RIGHT — what to expect */}
          <Reveal delay={1}>
            <div className="glass-lavender flex h-full flex-col rounded-[28px] p-7 lg:p-10">
              <span className="chip-purple inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-mono-tech uppercase tracking-[0.25em]">
                What to expect
              </span>
              <h3 className="mt-5 font-display text-[26px] font-bold leading-[1.1] tracking-[-0.02em] text-foreground lg:text-[32px]">
                A 30-minute call that{" "}
                <em
                  className="font-display"
                  style={{ fontStyle: "italic", color: "hsl(var(--lav-purple))" }}
                >
                  changes how you see
                </em>{" "}
                your business.
              </h3>
              <p className="lead mt-4 text-[15px] leading-relaxed text-foreground/65">
                We don't pitch. We listen, map, and show you exactly what's
                leaking — and what the fix looks like.
              </p>

              <div className="mt-7 space-y-3">
                {expects.map((e) => (
                  <div
                    key={e.title}
                    className="flex items-start gap-4 rounded-2xl border border-[hsl(var(--lav-purple)/0.12)] bg-white/55 p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--lav-purple)/0.10)] text-lg">
                      {e.icon}
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-foreground">
                        {e.title}
                      </div>
                      <div className="sd mt-0.5 text-[13px] leading-relaxed text-foreground/60">
                        {e.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-7">
                <div
                  className="rounded-2xl bg-[hsl(var(--lav-purple)/0.06)] p-5 pl-6"
                  style={{ borderLeft: "3px solid hsl(var(--gold))" }}
                >
                  <p className="text-[13px] leading-relaxed text-foreground/70">
                    <strong className="text-foreground">
                      We're based in Hyderabad, India
                    </strong>{" "}
                    — and work with founders, D2C brands, SMBs, coaches, and
                    growth-stage startups across India and globally.
                  </p>
                  <p className="mt-3 text-[13px] text-foreground/80">
                    📧 <strong>hello@agenzi.com</strong>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-foreground/55">
        {label}
      </Label>
      {children}
    </div>
  );
}
