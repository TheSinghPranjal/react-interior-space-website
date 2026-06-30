"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

const personas = [
  {
    icon: "🏢",
    title: "Real Estate Agents",
    description:
      "Present units professionally on-site. Annotate live during walkthroughs, answer buyer questions visually, and send polished PDFs that keep the conversation going after the visit.",
    highlight: "Primary audience",
  },
  {
    icon: "🏗️",
    title: "Property Developers",
    description:
      "Showcase apartment layouts across multiple units and towers. Standardize presentations across your sales team with one consistent, premium tool.",
    highlight: null,
  },
  {
    icon: "🎨",
    title: "Interior Designers",
    description:
      "Rapid room mockups with real materials and furniture. Validate concepts with clients before committing to procurement or installation.",
    highlight: null,
  },
];

export function WhoItsFor() {
  return (
    <section className="bg-brand-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Built for professionals"
          title="Who Interior Space is for"
          description="One app, three professions — all united by the need to show spaces clearly and close with confidence."
        />

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {personas.map((persona) => (
            <motion.div
              key={persona.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="relative rounded-3xl border border-brand-green/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-brand-green/10"
            >
              {persona.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-brand-accent px-3 py-1 text-xs font-semibold text-white">
                  {persona.highlight}
                </span>
              )}
              <span className="mb-4 block text-4xl">{persona.icon}</span>
              <h3 className="mb-3 text-xl font-bold text-brand-text">{persona.title}</h3>
              <p className="leading-relaxed text-brand-muted">{persona.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
