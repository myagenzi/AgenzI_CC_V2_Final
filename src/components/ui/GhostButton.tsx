import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface GhostButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "px-5 py-2 text-xs",
  md: "px-7 py-3 text-sm",
  lg: "px-10 py-4 text-base",
};

export function GhostButton({ label, href, onClick, className, size = "md" }: GhostButtonProps) {
  const classes = cn(
    "relative overflow-hidden inline-flex items-center justify-center rounded-full",
    "font-sans font-medium uppercase tracking-[0.1em] transition-all duration-200",
    "border border-white/25 text-[#F0EEE8]",
    "hover:border-[var(--ring-2)] hover:bg-white/[0.04]",
    sizeMap[size],
    className,
  );

  if (href) {
    return href.startsWith("/") ? (
      <Link to={href} className={classes} data-cursor="hover">
        {label}
      </Link>
    ) : (
      <a href={href} className={classes} data-cursor="hover">
        {label}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} data-cursor="hover">
      {label}
    </button>
  );
}
