import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
}

const sizeMap = {
  sm: "px-5 py-2 text-xs",
  md: "px-7 py-3 text-sm",
  lg: "px-10 py-4 text-base",
};

export function PrimaryButton({ label, href, onClick, className, size = "md", icon }: PrimaryButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full",
    "font-sans font-semibold uppercase tracking-[0.1em] text-[#080808]",
    "transition-all duration-200 hover:scale-[1.03]",
    "[background-image:var(--accent-gradient)]",
    sizeMap[size],
    className,
  );

  const content = (
    <>
      {label}
      {icon}
    </>
  );

  if (href) {
    return href.startsWith("/") ? (
      <Link to={href} className={classes} data-cursor="hover">
        {content}
      </Link>
    ) : (
      <a href={href} className={classes} data-cursor="hover">
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} data-cursor="hover">
      {content}
    </button>
  );
}
