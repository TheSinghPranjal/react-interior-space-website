"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { LINKS } from "@/lib/constants";
import { TABLET } from "@/lib/device";
import { Button } from "@/components/ui/Button";
import { DeviceFrame } from "@/components/ui/DeviceFrame";

export function AIAssist() {
  return (
    <section className="bg-brand-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="grid items-center gap-12 rounded-3xl border border-brand-green/10 bg-white p-8 md:grid-cols-2 md:p-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <span className="mb-4 inline-block rounded-full bg-brand-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent">
              Coming Soon
            </span>
            <h2 className="text-3xl font-bold text-brand-text md:text-4xl">
              AI Assist — design suggestions powered by intelligence
            </h2>
            <p className="mt-4 leading-relaxed text-brand-muted">
              The AI Assist tab is already in the app on tablet — and smarter features are
              on the way. Future updates will suggest furniture layouts, material pairings,
              and staging ideas tailored to your unit type and buyer profile.
            </p>
            <div className="mt-8">
              <Button href={LINKS.notifyAI} variant="secondary">
                Notify me when ready
              </Button>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <DeviceFrame
              src="/screenshots/screenshot-ai-assist.png"
              alt="AI Assist tab in Interior Space on tablet — coming soon"
              width={TABLET.landscape.width}
              height={TABLET.landscape.height}
              orientation="landscape"
              tilt={false}
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-[1.25rem] bg-brand-text/40 backdrop-blur-[2px]">
              <span className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-text shadow-lg">
                Coming Soon
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
