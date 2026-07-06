"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { APP_NAME, CONTACT, LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-green py-24 md:py-32">
      <BlueprintGrid opacity={0.1} />
      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-white md:text-5xl"
          >
            Start presenting apartments like a pro.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-white/80"
          >
            {APP_NAME} is launching on Android first. Get in touch for pricing, demos,
            or early access — we&apos;ll reply from {CONTACT.email}.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-6"
          >
            <DownloadButton variant="light" className="items-center" />
            <Button
              href={LINKS.contact}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:border-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function CTASection() {
  return <FinalCTA />;
}
