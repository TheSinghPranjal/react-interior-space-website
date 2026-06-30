"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  screenshot?: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  screenshot,
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={cn(
        "group rounded-2xl border border-brand-green/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-brand-green/10",
        className,
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-brand-text">{title}</h3>
      <p className="text-sm leading-relaxed text-brand-muted">{description}</p>
      {screenshot && (
        <div className="mt-4 overflow-hidden rounded-xl border border-brand-green/10">
          {/* Drop real screenshot at public/screenshots/{filename} */}
          <Image
            src={screenshot}
            alt={`${title} preview`}
            width={400}
            height={240}
            className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
    </motion.div>
  );
}
