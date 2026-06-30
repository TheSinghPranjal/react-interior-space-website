"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Design the space",
    description: "Set up rooms or full apartment layouts with furniture, finishes, and fixtures.",
  },
  {
    step: "02",
    title: "Annotate with Sketch",
    description: "Mark facing, pricing, pathways, and buyer notes directly on the blueprint.",
  },
  {
    step: "03",
    title: "Preview in 3D",
    description: "Orbit through furnished spaces so buyers see the finished result instantly.",
  },
  {
    step: "04",
    title: "Export PDF report",
    description: "Blueprint + 3D views + dimensions + furniture list in one professional document.",
  },
  {
    step: "05",
    title: "Save & share",
    description: "Download locally or share the PDF with buyers via email or WhatsApp.",
  },
  {
    step: "06",
    title: "Share .ispace files",
    description: "Send individual rooms as .ispace files — import on another device to continue the conversation.",
  },
];

export function ExportShare() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Agent workflow"
          title="From site visit to signed contract"
          description="Six steps to replace a 30-minute verbal explanation with a 5-minute visual walkthrough."
        />

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="relative flex gap-4 rounded-2xl border border-brand-green/10 bg-brand-surface p-5"
              >
                {index < steps.length - 1 && (
                  <div className="absolute left-9 top-full h-4 w-px bg-brand-green/20" />
                )}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green text-sm font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-brand-text">{item.title}</h3>
                  <p className="mt-1 text-sm text-brand-muted">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="overflow-hidden rounded-2xl border border-brand-green/10 shadow-xl">
              <Image
                src="/screenshots/screenshot-pdf-export.png"
                alt="PDF design report with blueprint, 3D views, and dimensions"
                width={800}
                height={600}
                className="w-full object-cover"
              />
            </div>
            <div className="mx-auto max-w-xs">
              <Image
                src="/screenshots/screenshot-export-menu.png"
                alt="Export menu showing PDF, download, and share options"
                width={390}
                height={844}
                className="w-full rounded-2xl border border-brand-green/10 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
