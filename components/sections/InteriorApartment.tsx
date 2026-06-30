"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DeviceFrame } from "@/components/ui/DeviceFrame";

const modes = [
  {
    title: "Interior Mode",
    description:
      "Design individual rooms with precision — walls, flooring, ceiling, furniture, and lighting. Perfect for staging a single unit or showcasing a model apartment room by room.",
    features: [
      "Custom room dimensions with validation",
      "Per-wall colors, textures, and wallpaper",
      "Furniture and lighting placement",
      "Instant 3D preview per room",
    ],
    screenshot: "/screenshots/screenshot-interior-mode.png",
    alt: "Interior mode room design with walls and furniture",
  },
  {
    title: "Apartment Mode",
    description:
      "Full apartment blueprint — place multiple rooms, drag and rotate placements, multi-select, rename apartments, and undo/redo placement history. Built for agents selling multi-bedroom units.",
    features: [
      "Multi-room layout on one blueprint",
      "Drag, rotate, and group select",
      "Rename and organize apartments",
      "Full undo/redo placement history",
    ],
    screenshot: "/screenshots/screenshot-apartment-mode.png",
    alt: "Apartment mode with multi-room blueprint layout",
  },
];

export function InteriorApartment() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Two ways to work"
          title="One room or the whole apartment"
          description="Whether you're staging a studio or presenting a penthouse, Interior Space scales with your listing."
        />

        <motion.div
          className="grid gap-12 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {modes.map((mode) => (
            <motion.div
              key={mode.title}
              variants={fadeUp}
              className="flex flex-col rounded-3xl border border-brand-green/10 bg-brand-surface p-8"
            >
              <DeviceFrame
                src={mode.screenshot}
                alt={mode.alt}
                width={240}
                height={480}
                className="mb-8"
              />
              <h3 className="mb-3 text-2xl font-bold text-brand-text">{mode.title}</h3>
              <p className="mb-6 leading-relaxed text-brand-muted">{mode.description}</p>
              <ul className="mt-auto space-y-2">
                {mode.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm text-brand-muted">
                    <span className="text-brand-green">→</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
