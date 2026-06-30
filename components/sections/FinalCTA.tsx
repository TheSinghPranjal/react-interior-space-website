"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";

export function FinalCTA() {
  const [email, setEmail] = useState("");

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
            Download Interior Space today and replace your next pen-and-paper walkthrough
            with a visual presentation buyers remember.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href={LINKS.appStore} variant="accent" size="lg" external>
              App Store
            </Button>
            <Button
              href={LINKS.googlePlay}
              variant="outline"
              size="lg"
              external
              className="border-white/30 text-white hover:border-white hover:bg-white/10"
            >
              Google Play
            </Button>
            <Button href={LINKS.bookDemo} variant="ghost" size="lg" className="text-white hover:bg-white/10">
              Book a Demo
            </Button>
          </motion.div>

          <motion.form
            variants={fadeUp}
            className="mx-auto mt-12 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `${LINKS.waitlist}&body=Email:%20${encodeURIComponent(email)}`;
            }}
          >
            <input
              type="email"
              placeholder="Email for waitlist updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
            />
            <Button type="submit" variant="accent" size="md">
              Join Waitlist
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

export function CTASection() {
  return <FinalCTA />;
}
