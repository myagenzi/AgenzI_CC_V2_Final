import { cn } from "@/lib/utils";

type Aspect = "21/9" | "16/9" | "4/5" | "1/1" | "2/1";
type Kind = "video" | "image";

type Props = {
  aspect?: Aspect;
  label: string;
  kind?: Kind;
  className?: string;
};

const aspectClass: Record<Aspect, string> = {
  "21/9": "aspect-[21/9]",
  "16/9": "aspect-[16/9]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "2/1": "aspect-[2/1]",
};

export function MediaPlaceholder({
  aspect = "16/9",
  label,
  kind = "video",
  className,
}: Props) {
  const glyph = kind === "video" ? "▸" : "◇";
  const tag = kind === "video" ? "VIDEO" : "IMAGE";
  return (
    <div
      className={cn(
        "media-ph relative w-full overflow-hidden",
        aspectClass[aspect],
        className,
      )}
      role="img"
      aria-label={`${tag} placeholder — ${label}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/55">
          {glyph} {tag} · {aspect} · {label}
        </span>
      </div>
      <span className="font-mono-tech absolute left-3 top-3 text-[10px] uppercase tracking-[0.25em] text-foreground/40">
        ◴ placeholder
      </span>
      <span className="font-mono-tech absolute bottom-3 right-3 text-[10px] uppercase tracking-[0.25em] text-foreground/40">
        {aspect}
      </span>
    </div>
  );
}
