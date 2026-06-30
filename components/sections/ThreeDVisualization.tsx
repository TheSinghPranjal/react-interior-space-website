"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  "WebGL Three.js engine with accurate dimensions",
  "Wall cutouts for doors and windows",
  "Full texture support on walls, floors, and ceilings",
  "Orbit, top, front, side, and isometric camera modes",
];

export function ThreeDVisualization() {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <section id="visualization" className="bg-brand-text py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="3D visualization"
          title="See it before it's built"
          description="Walk buyers through furnished spaces in real time. No imagination required — just orbit, zoom, and close."
          dark
        />

        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.ul variants={fadeUp} className="space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3 text-white/80">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green text-xs text-white">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="space-y-6">
            {/* Before/after slider */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/screenshots/screenshot-3d-room.png"
                  alt="Furnished 3D room preview with accurate dimensions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                >
                  <Image
                    src="/screenshots/screenshot-3d-top-view.png"
                    alt="Empty room 3D top view before furnishing"
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={sliderValue}
                  onChange={(e) => setSliderValue(Number(e.target.value))}
                  className="absolute inset-x-4 bottom-4 z-10 w-[calc(100%-2rem)] accent-brand-gold"
                  aria-label="Before and after room comparison slider"
                />
              </div>
              <div className="flex justify-between bg-brand-green-dark px-4 py-2 text-xs text-white/60">
                <span>Empty unit</span>
                <span>Furnished preview</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/screenshots/screenshot-3d-room.png"
                  alt="3D room perspective view"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/screenshots/screenshot-3d-top-view.png"
                  alt="3D top-down apartment view"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
