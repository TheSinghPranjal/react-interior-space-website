"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  {
    value: 30,
    suffix: " min",
    label: "saved per walkthrough",
    description: "Replace lengthy verbal explanations with 5-minute visual presentations.",
  },
  {
    value: 4,
    suffix: " in 1",
    label: "tools unified",
    description: "Blueprint + Sketch + 3D + PDF — no more app switching mid-visit.",
  },
  {
    value: 100,
    suffix: "%",
    label: "professional output",
    description: "Every export looks agency-ready, not like a hand-scribbled floor plan.",
  },
];

const testimonials = [
  {
    quote:
      "I used to carry printed floor plans and a pen. Now I annotate live on my tablet and email a PDF before the buyer leaves the parking lot.",
    author: "Priya Sharma",
    role: "Senior Agent, Mumbai",
  },
  {
    quote:
      "Sketch Mode changed how we present pre-launch units. Buyers finally understand facing and layout without us repeating ourselves.",
    author: "James Okonkwo",
    role: "Sales Director, Lagos",
  },
  {
    quote:
      "The 3D preview closes objections before they start. When buyers see the furnished space, the conversation shifts from 'maybe' to 'when.'",
    author: "Elena Vasquez",
    role: "Luxury Agent, Madrid",
  },
];

const placeholderLogos = ["Premier Realty", "UrbanNest", "Skyline Homes", "Elite Properties", "Metro Living"];

export function StatsSocialProof() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Results that matter"
          title="Trusted by agents who close"
          description="Replace 30-minute explanations with 5-minute visual walkthroughs."
        />

        <motion.div
          className="mb-16 grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="rounded-2xl border border-brand-green/10 bg-brand-surface p-8 text-center"
            >
              <p className="text-4xl font-bold text-brand-green md:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 font-semibold text-brand-text">{stat.label}</p>
              <p className="mt-2 text-sm text-brand-muted">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <p className="mb-6 text-center text-sm font-medium uppercase tracking-widest text-brand-muted">
          Trusted by agents at
        </p>
        <div className="mb-16 flex flex-wrap items-center justify-center gap-8 opacity-50">
          {placeholderLogos.map((logo) => (
            <span key={logo} className="text-lg font-semibold text-brand-text/40">
              {logo}
            </span>
          ))}
        </div>

        <div className="mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-brand-green/10 bg-brand-surface p-8 text-center md:p-12"
            >
              <p className="text-lg leading-relaxed text-brand-text md:text-xl">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </p>
              <footer className="mt-6">
                <p className="font-semibold text-brand-green">
                  {testimonials[activeTestimonial].author}
                </p>
                <p className="text-sm text-brand-muted">
                  {testimonials[activeTestimonial].role}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveTestimonial(index)}
                className={`h-2 rounded-full transition-all ${
                  activeTestimonial === index
                    ? "w-8 bg-brand-green"
                    : "w-2 bg-brand-green/20"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
