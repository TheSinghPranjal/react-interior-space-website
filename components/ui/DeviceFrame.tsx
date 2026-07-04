"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TABLET } from "@/lib/device";
import { cn } from "@/lib/utils";

interface DeviceFrameProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  tilt?: boolean;
  orientation?: "landscape" | "portrait";
}

export function DeviceFrame({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  tilt = true,
  orientation = "landscape",
}: DeviceFrameProps) {
  const dims = TABLET[orientation];
  const displayWidth = width ?? dims.width;
  const displayHeight = height ?? dims.height;
  const bezel = orientation === "landscape" ? 14 : 16;
  const frameWidth = displayWidth + bezel * 2;
  const frameHeight = displayHeight + bezel * 2 + 10;

  return (
    <motion.div
      className={cn("relative mx-auto", className)}
      style={{ perspective: 1200, width: frameWidth }}
      whileHover={tilt ? { rotateY: -4, rotateX: 2 } : undefined}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Drop real screenshot at public/screenshots/ — served as /screenshots/{filename} */}
      <div
        className="relative flex flex-col overflow-hidden rounded-[1.25rem] border-[5px] border-brand-text/15 bg-brand-text shadow-2xl shadow-brand-green/20"
        style={{ width: frameWidth, height: frameHeight }}
      >
        <div
          className={cn(
            "absolute z-10 rounded-full bg-brand-text/80",
            orientation === "landscape"
              ? "left-3 top-1/2 h-2 w-2 -translate-y-1/2"
              : "left-1/2 top-3 h-2 w-2 -translate-x-1/2",
          )}
        />
        <div
          className="relative mx-auto mt-3 overflow-hidden rounded-lg bg-black"
          style={{ width: displayWidth, height: displayHeight }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-contain"
            sizes={
              orientation === "landscape"
                ? "(max-width: 768px) 90vw, 520px"
                : "(max-width: 768px) 280px, 360px"
            }
          />
        </div>
        <div className="absolute bottom-1.5 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/25" />
      </div>
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand-green/5 blur-2xl" />
    </motion.div>
  );
}
