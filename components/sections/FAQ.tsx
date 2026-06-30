"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";

const faqItems = [
  {
    question: "Does Interior Space work offline?",
    answer:
      "Yes. Core design, sketch, and 3D preview features work offline. PDF export and cloud sync require a connection, but your work auto-saves locally so you never lose a presentation mid-visit.",
  },
  {
    question: "Is it available on Android and iOS?",
    answer:
      "Interior Space is available on both iOS and Android. Download from the App Store or Google Play and use the same account across devices.",
  },
  {
    question: "Can I share designs with clients?",
    answer:
      "Absolutely. Export professional PDF reports, save to Downloads, or share via email and messaging apps. You can also send individual rooms as .ispace files for import on another device.",
  },
  {
    question: "Does the PDF include my sketch annotations?",
    answer:
      "Yes — toggle 'Include Sketch in PDF' before export. Your pen marks, arrows, text labels, and inserted images appear in the client handout exactly as you annotated them.",
  },
  {
    question: "What's the difference between Apartment and Interior mode?",
    answer:
      "Interior Mode focuses on designing a single room with walls, flooring, furniture, and lighting. Apartment Mode lets you lay out multiple rooms on one blueprint — drag, rotate, group select, and manage full apartment layouts for multi-bedroom sales.",
  },
];

export function FAQ() {
  return (
    <section className="bg-brand-surface py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions from agents"
          description="Everything you need to know before your first site visit with Interior Space."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <Accordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  );
}
