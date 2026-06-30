"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

const sketchFeatures = [
  {
    icon: "✏️",
    title: "Pen & highlighter",
    description: "Adjustable brush sizes for precise markup during live walkthroughs.",
  },
  {
    icon: "⬜",
    title: "Shapes & arrows",
    description: "Rectangles, arrows, and speech bubbles to highlight pathways and entrances.",
  },
  {
    icon: "🏷️",
    title: "Text labels",
    description: "Apartment number, facing, pricing, and dimensions — right on the blueprint.",
  },
  {
    icon: "🖼️",
    title: "Insert images",
    description: "Add company logo, furniture references, or amenity photos inline.",
  },
  {
    icon: "↩️",
    title: "Undo/redo & auto-save",
    description: "Never lose annotations mid-presentation. Every stroke is saved automatically.",
  },
  {
    icon: "📄",
    title: "Include Sketch in PDF",
    description: "Toggle to export annotated blueprints in client handouts — your killer differentiator.",
  },
];

const toolbarItems = ["Pen", "Highlighter", "Arrow", "Text", "Shape", "Image", "Undo"];

export function SketchDeepDive() {
  return (
    <section id="sketch" className="relative overflow-hidden bg-brand-green py-24 md:py-32">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Flagship for agents"
          title="Replace pen and paper during site visits"
          description="Sketch Mode turns your tablet into a professional sales tool. Annotate live, export instantly, and leave buyers with a document they'll actually reference."
          dark
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-4 sm:grid-cols-2"
          >
            {sketchFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm"
              >
                <span className="mb-3 block text-2xl">{feature.icon}</span>
                <h3 className="mb-1 font-semibold text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Replace with screenshot-sketch-annotated.png from app */}
            <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
              <Image
                src="/screenshots/screenshot-sketch-annotated.png"
                alt="Annotated apartment blueprint with pricing, facing, and pathway markers"
                width={800}
                height={600}
                className="w-full object-cover"
              />

              {/* Floating toolbar mockup */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-4 flex -translate-x-1/2 gap-1 rounded-xl border border-white/20 bg-brand-text/90 px-3 py-2 shadow-xl backdrop-blur-md"
              >
                {toolbarItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
