"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { APP_NAME, LINKS, TAGLINE } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { VideoModal } from "@/components/sections/VideoModal";

const badges = ["Blueprint", "Sketch", "3D", "PDF Export"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const phoneScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <>
      <section
        ref={ref}
        className="relative flex min-h-screen items-center overflow-hidden bg-brand-surface pt-24"
      >
        <BlueprintGrid animated opacity={0.08} />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 via-transparent to-brand-surface" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:px-6 lg:grid-cols-2 lg:gap-16">
          <motion.div
            style={{ y: textY }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-accent"
            >
              {TAGLINE}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold leading-[1.1] tracking-tight text-brand-text md:text-5xl lg:text-6xl"
            >
              Sell apartments with clarity — not confusion.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-brand-muted md:text-xl"
            >
              {APP_NAME} gives real estate agents one workspace to design rooms, annotate
              blueprints live, preview in 3D, and export professional PDFs — replacing
              pen-and-paper walkthroughs with confident, visual presentations.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button href={LINKS.appStore} size="lg" external>
                Download App
              </Button>
              <Button variant="outline" size="lg" onClick={() => setVideoOpen(true)}>
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-2"
            >
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-brand-green/20 bg-white px-4 py-1.5 text-sm font-medium text-brand-green shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: phoneY, scale: phoneScale }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Replace /public/screenshots/hero-app.png with real app screenshot */}
            <DeviceFrame
              src="/screenshots/hero-app.png"
              alt="Interior Space app home screen showing blueprint editor for real estate agents"
              width={280}
              height={560}
              priority
              className="lg:mr-8"
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-1/4 hidden rounded-2xl border border-brand-green/10 bg-white p-3 shadow-xl lg:block"
            >
              <Image
                src="/screenshots/screenshot-sketch-annotated.png"
                alt="Sketch annotations on apartment blueprint"
                width={120}
                height={90}
                className="rounded-lg object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
