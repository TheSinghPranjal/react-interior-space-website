"use client";

import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewportOnce } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

const painPoints = [
  "Buyers can't visualize empty units — they leave unsure, not excited.",
  "Hand-drawn markup on printouts looks unprofessional in front of premium buyers.",
  "Switching between PDFs, photos, and WhatsApp notes mid-visit is chaotic.",
  "Hard to explain dimensions, facing, pricing, and furniture placement in one view.",
];

const solutions = [
  "One workspace from floor plan to annotated presentation to 3D walkthrough.",
  "Apple Markup–style sketch tools built for live sales conversations.",
  "Export polished PDF reports with blueprint, 3D views, and your annotations.",
  "Show buyers exactly how the space works — before they sign.",
];

export function ProblemSolution() {
  return (
    <section id="features" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Why agents switch"
          title="Stop losing buyers to empty rooms"
          description="Every site visit without a clear visual story is a missed closing opportunity."
        />

        <motion.div
          className="grid gap-8 lg:grid-cols-2 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div
            variants={slideInLeft}
            className="rounded-3xl border border-red-100 bg-red-50/50 p-8 md:p-10"
          >
            <h3 className="mb-6 text-xl font-bold text-brand-text">
              The old way
            </h3>
            <ul className="space-y-4">
              {painPoints.map((point) => (
                <motion.li
                  key={point}
                  variants={fadeUp}
                  className="flex gap-3 text-brand-muted"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-200 text-xs text-red-700">
                    ✕
                  </span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={slideInRight}
            className="rounded-3xl border border-brand-green/20 bg-brand-green/5 p-8 md:p-10"
          >
            <h3 className="mb-6 text-xl font-bold text-brand-green">
              With Interior Space
            </h3>
            <ul className="space-y-4">
              {solutions.map((point) => (
                <motion.li
                  key={point}
                  variants={fadeUp}
                  className="flex gap-3 text-brand-muted"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green text-xs text-white">
                    ✓
                  </span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
