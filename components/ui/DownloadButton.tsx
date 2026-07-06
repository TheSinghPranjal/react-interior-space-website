"use client";

import { STORE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type DownloadButtonSize = "sm" | "md" | "lg";

interface DownloadButtonProps {
  size?: DownloadButtonSize;
  className?: string;
  label?: string;
  /** Light variant for dark backgrounds (e.g. final CTA) */
  variant?: "default" | "light";
  showNote?: boolean;
}

const sizeClasses: Record<DownloadButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function DownloadButton({
  size = "lg",
  className,
  label = "Download App",
  variant = "default",
  showNote = true,
}: DownloadButtonProps) {
  const isLight = variant === "light";

  return (
    <div className={cn("inline-flex flex-col items-start gap-2", className)}>
      <span
        className={cn(
          "rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
          isLight
            ? "bg-white/15 text-brand-gold"
            : "bg-brand-gold/20 text-brand-accent",
        )}
      >
        {STORE.badge}
      </span>
      <button
        type="button"
        disabled
        aria-disabled="true"
        className={cn(
          "cursor-not-allowed rounded-full font-medium opacity-50",
          sizeClasses[size],
          isLight
            ? "bg-white/20 text-white"
            : "bg-brand-green/40 text-white shadow-none",
        )}
      >
        {label}
      </button>
      {showNote && (
        <p className={cn("text-xs", isLight ? "text-white/60" : "text-brand-muted")}>
          {STORE.note}
        </p>
      )}
    </div>
  );
}
