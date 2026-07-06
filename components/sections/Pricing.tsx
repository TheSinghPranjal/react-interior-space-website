"use client";

import { motion } from "framer-motion";
import { APP_NAME, CONTACT, LINKS } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

// const tiers = [
//   {
//     name: "Free",
//     price: "$0",
//     period: "forever",
//     description: `Try ${APP_NAME} with core room design tools.`,
//     features: [
//       "1 room per project",
//       "Basic blueprint editor",
//       "3D preview (limited)",
//       "Community support",
//     ],
//     cta: "Get Started",
//     href: LINKS.appStore,
//     highlighted: false,
//   }, 
// {
//     name: "Pro",
//     price: "$19",
//     period: "/month",
//     description: "Everything agents need to close deals on-site.",
//     features: [
//       "Unlimited rooms",
//       "Sketch Mode with PDF export",
//       "Apartment Mode",
//       "Full 3D visualization",
//       "Professional PDF reports",
//       "Priority support",
//     ],
//     cta: "Start Pro Trial",
//     href: LINKS.appStore,
//     highlighted: true,
//     badge: "Best for agents",
//   },
//   {
//     name: "Enterprise",
//     price: "Custom",
//     period: "",
//     description: "For developers and agencies with team-wide rollout.",
//     features: [
//       "Everything in Pro",
//       "Team management",
//       "Custom branding on exports",
//       "Dedicated account manager",
//       "SLA & onboarding",
//     ],
//     cta: "Contact Sales",
//     href: LINKS.contactSales,
//     highlighted: false,
//   },
// ];

// const comparisonFeatures = [
//   { name: "Blueprint editor", free: true, pro: true, enterprise: true },
//   { name: "Sketch Mode", free: false, pro: true, enterprise: true },
//   { name: "Apartment Mode", free: false, pro: true, enterprise: true },
//   { name: "PDF with sketch annotations", free: false, pro: true, enterprise: true },
//   { name: "Unlimited rooms", free: false, pro: true, enterprise: true },
//   { name: "Team management", free: false, pro: false, enterprise: true },
// ]



const pricingPoints = [
  "Flexible plans for solo agents, agencies, and property developers",
  "Sketch Mode, apartment blueprints, 3D preview, and PDF export",
  "Volume pricing for teams rolling out across a sales floor",
  "Onboarding support to get your first listing presentation live fast",
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Contact us for pricing"
          description={`Every team uses ${APP_NAME} differently. Tell us about your listings and we'll share a plan that fits — no generic price list.`}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="rounded-3xl border border-brand-green/10 bg-brand-surface p-8 md:p-12"
        >
          <motion.ul variants={fadeUp} className="mb-8 space-y-3 text-left">
            {pricingPoints.map((point) => (
              <li key={point} className="flex gap-3 text-brand-muted">
                <span className="mt-0.5 shrink-0 text-brand-green">✓</span>
                {point}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="flex flex-col items-center gap-4">
            <Button href={LINKS.contactPricing} size="lg">
              Contact for Pricing
            </Button>
            <p className="text-sm text-brand-muted">
              Opens your email app with{" "}
              <a href={LINKS.contact} className="font-medium text-brand-green hover:underline">
                {CONTACT.email}
              </a>{" "}
              pre-filled
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
