"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { viewportOnce } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { TABLET } from "@/lib/device";
import { cn } from "@/lib/utils";

const modes = [
  {
    id: "blueprint",
    title: "Blueprint",
    description:
      "Drag-and-drop floor plan editor. Place furniture, doors, windows, AC units, curtains, and wall TVs. Multi-room apartment layout with rotate and group select.",
    screenshot: "/screenshots/screenshot-blueprint.png",
    alt: "Blueprint mode floor plan editor with furniture placement",
  },
  {
    id: "sketch",
    title: "Sketch",
    badge: "NEW",
    description:
      "Apple Markup–style annotation on blueprints. Pen, highlighter, shapes, arrows, text, and images — perfect for marking entrances, pathways, pricing, facing, and customer notes during live sales presentations.",
    screenshot: "/screenshots/screenshot-sketch.png",
    alt: "Sketch mode with pen and annotation tools on blueprint",
  },
  {
    id: "3d",
    title: "3D Preview",
    description:
      "Real-time WebGL 3D visualization. Orbit, top, front, side, and isometric camera modes. Show buyers exactly how the space will look before a single piece of furniture arrives.",
    screenshot: "/screenshots/screenshot-3d.png",
    alt: "3D preview of furnished apartment room",
  },
];

export function ThreeModes() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % modes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden bg-brand-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Three modes, one app"
          title="From blueprint to closing conversation"
          description="Every stage of your sales presentation lives in one seamless workflow."
        />

        {/* Desktop: horizontal scroll cards */}
        <div
          ref={scrollRef}
          className="hidden snap-x snap-mandatory gap-6 overflow-x-auto pb-4 lg:flex"
        >
          {modes.map((mode, index) => (
            <motion.div
              key={mode.id}
              className="w-[580px] shrink-0 snap-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: index * 0.1 }}
            >
              <ModeCard mode={mode} />
            </motion.div>
          ))}
        </div>

        {/* Small screens: tab carousel */}
        <div className="lg:hidden">
          <div className="mb-8 flex justify-center gap-2">
            {modes.map((mode, index) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all",
                  active === index
                    ? "bg-brand-green text-white shadow-lg"
                    : "bg-white text-brand-muted hover:bg-brand-green/10",
                )}
              >
                {mode.title}
                {mode.badge && (
                  <span className="ml-1.5 rounded bg-brand-accent px-1.5 py-0.5 text-[10px] text-white">
                    {mode.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ModeCard mode={modes[active]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ModeCard({ mode }: { mode: (typeof modes)[number] }) {
  return (
    <div className="rounded-3xl border border-brand-green/10 bg-white p-6 shadow-lg shadow-brand-green/5">
      <div className="mb-4 flex items-center gap-2">
        <h3 className="text-xl font-bold text-brand-text">{mode.title}</h3>
        {mode.badge && (
          <span className="rounded-full bg-brand-accent px-2 py-0.5 text-xs font-semibold text-white">
            {mode.badge}
          </span>
        )}
      </div>
      <p className="mb-6 text-sm leading-relaxed text-brand-muted">{mode.description}</p>
      <DeviceFrame
        src={mode.screenshot}
        alt={mode.alt}
        width={TABLET.landscape.width}
        height={TABLET.landscape.height}
        orientation="landscape"
        tilt={false}
      />
    </div>
  );
}

export function ModeShowcase() {
  return <ThreeModes />;
}
