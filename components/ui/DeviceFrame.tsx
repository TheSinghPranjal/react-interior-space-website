"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DeviceFrameProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  tilt?: boolean;
  variant?: "phone" | "tablet";
}

export function DeviceFrame({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  tilt = true,
  variant = "phone",
}: DeviceFrameProps) {
  const isPhone = variant === "phone";

  return (
    <motion.div
      className={cn("relative mx-auto", className)}
      style={{ perspective: 1200 }}
      whileHover={tilt ? { rotateY: -4, rotateX: 2 } : undefined}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Replace placeholder PNG with real app screenshot at this path */}
      <div
        className={cn(
          "relative overflow-hidden rounded-[2.5rem] border-[6px] border-brand-text/10 bg-brand-text shadow-2xl shadow-brand-green/20",
          isPhone ? "rounded-[2.5rem]" : "rounded-[1.5rem]",
        )}
        style={{ width, height: height + (isPhone ? 24 : 16) }}
      >
        {isPhone && (
          <>
            <div className="absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-brand-text" />
            <div className="absolute bottom-2 left-1/2 z-10 h-1 w-28 -translate-x-1/2 rounded-full bg-white/20" />
          </>
        )}
        <div className="absolute inset-x-2 top-8 bottom-2 overflow-hidden rounded-[2rem] bg-brand-surface">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className="h-full w-full object-cover object-top"
            sizes="(max-width: 768px) 280px, 390px"
          />
        </div>
      </div>
      <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-brand-green/5 blur-2xl" />
    </motion.div>
  );
}
