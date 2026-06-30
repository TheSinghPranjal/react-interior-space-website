"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";

const features = [
  {
    icon: "📐",
    title: "Room Setup",
    description: "Custom dimensions (width × length × height) with built-in validation for accurate presentations.",
  },
  {
    icon: "🧱",
    title: "Walls",
    description: "Per-wall colors and textures — brick, marble, wood, stone — plus custom wallpaper upload.",
    screenshot: "/screenshots/screenshot-walls.png",
  },
  {
    icon: "🔲",
    title: "Flooring",
    description: "Marble, granite, ceramic, wood with tile patterns: grid, herringbone, and diagonal.",
  },
  {
    icon: "⬆️",
    title: "Ceiling",
    description: "False ceiling types: cove, tray, floating, and double layer for premium unit staging.",
  },
  {
    icon: "🚪",
    title: "Doors & Windows",
    description: "Multiple openings with accurate wall cutouts rendered in 3D preview.",
  },
  {
    icon: "🪟",
    title: "Windows, Curtains & AC",
    description: "Wall-mounted AC units, curtains, and window treatments — drag placement on blueprint.",
  },
  {
    icon: "🛋️",
    title: "Furniture",
    description: "Beds, sofas, dining sets, wardrobes, kitchen appliances, and bathroom fixtures — drag on blueprint, renders in 3D.",
    screenshot: "/screenshots/screenshot-furniture.png",
  },
  {
    icon: "💡",
    title: "Lighting & Fans",
    description: "Ceiling lights, spots, LED strips, chandeliers with adjustable warmth settings.",
  },
];

export function RoomFeatures() {
  return (
    <section className="bg-brand-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Room design toolkit"
          title="Every detail buyers ask about — designed in minutes"
          description="From wall textures to furniture placement, give buyers answers before they ask the questions."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
