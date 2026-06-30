"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlueprintGridProps {
  className?: string;
  animated?: boolean;
  opacity?: number;
}

export function BlueprintGrid({
  className,
  animated = false,
  opacity = 0.06,
}: BlueprintGridProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <motion.div
        className="absolute inset-0"
        style={{
          opacity,
          backgroundImage: `
            linear-gradient(to right, #2D5A4A 1px, transparent 1px),
            linear-gradient(to bottom, #2D5A4A 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        animate={
          animated
            ? { backgroundPosition: ["0px 0px", "48px 48px"] }
            : undefined
        }
        transition={
          animated
            ? { duration: 20, repeat: Infinity, ease: "linear" }
            : undefined
        }
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, var(--color-brand-surface, #F8F6F3) 70%)",
        }}
      />
    </div>
  );
}
