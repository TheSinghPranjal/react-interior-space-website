"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try Interior Space with core room design tools.",
    features: [
      "1 room per project",
      "Basic blueprint editor",
      "3D preview (limited)",
      "Community support",
    ],
    cta: "Get Started",
    href: LINKS.appStore,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Everything agents need to close deals on-site.",
    features: [
      "Unlimited rooms",
      "Sketch Mode with PDF export",
      "Apartment Mode",
      "Full 3D visualization",
      "Professional PDF reports",
      "Priority support",
    ],
    cta: "Start Pro Trial",
    href: LINKS.appStore,
    highlighted: true,
    badge: "Best for agents",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For developers and agencies with team-wide rollout.",
    features: [
      "Everything in Pro",
      "Team management",
      "Custom branding on exports",
      "Dedicated account manager",
      "SLA & onboarding",
    ],
    cta: "Contact Sales",
    href: LINKS.contactSales,
    highlighted: false,
  },
];

const comparisonFeatures = [
  { name: "Blueprint editor", free: true, pro: true, enterprise: true },
  { name: "Sketch Mode", free: false, pro: true, enterprise: true },
  { name: "Apartment Mode", free: false, pro: true, enterprise: true },
  { name: "PDF with sketch annotations", free: false, pro: true, enterprise: true },
  { name: "Unlimited rooms", free: false, pro: true, enterprise: true },
  { name: "Team management", free: false, pro: false, enterprise: true },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Simple pricing"
          title="Plans that scale with your listings"
          description="Start free, upgrade when you're ready to present like a pro."
        />

        <motion.div
          className="grid gap-8 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeUp}
              className={cn(
                "relative flex flex-col rounded-3xl border p-8",
                tier.highlighted
                  ? "border-brand-green bg-brand-green text-white shadow-xl shadow-brand-green/20"
                  : "border-brand-green/10 bg-brand-surface",
              )}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gold px-4 py-1 text-xs font-semibold text-brand-text">
                  {tier.badge}
                </span>
              )}
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.period && (
                  <span className={tier.highlighted ? "text-white/70" : "text-brand-muted"}>
                    {tier.period}
                  </span>
                )}
              </div>
              <p className={cn("mt-3 text-sm", tier.highlighted ? "text-white/80" : "text-brand-muted")}>
                {tier.description}
              </p>
              <ul className="my-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm">
                    <span className={tier.highlighted ? "text-brand-gold" : "text-brand-green"}>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href={tier.href}
                variant={tier.highlighted ? "accent" : "primary"}
                className="w-full"
                external={tier.href.startsWith("http")}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 overflow-x-auto"
        >
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-brand-green/10">
                <th className="py-4 text-left font-semibold text-brand-text">Feature</th>
                <th className="py-4 text-center font-semibold text-brand-muted">Free</th>
                <th className="py-4 text-center font-semibold text-brand-green">Pro</th>
                <th className="py-4 text-center font-semibold text-brand-muted">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row) => (
                <tr key={row.name} className="border-b border-brand-green/5">
                  <td className="py-3 text-brand-text">{row.name}</td>
                  {[row.free, row.pro, row.enterprise].map((val, i) => (
                    <td key={i} className="py-3 text-center">
                      {val ? (
                        <span className="text-brand-green">✓</span>
                      ) : (
                        <span className="text-brand-muted/40">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
