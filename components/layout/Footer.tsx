import Link from "next/link";
import { APP_NAME, LINKS, NAV_ITEMS } from "@/lib/constants";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Sketch Mode", href: "#sketch" },
  { label: "3D Preview", href: "#visualization" },
  { label: "Pricing", href: "#pricing" },
  { label: "Privacy", href: LINKS.privacy },
  { label: "Terms", href: LINKS.terms },
  { label: "Contact", href: LINKS.contact },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-green/10 bg-brand-text text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-green text-sm font-bold text-white">
                IS
              </div>
              <span className="text-lg font-semibold text-white">{APP_NAME}</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              The blueprint tool built for real estate. Design rooms, annotate floor plans,
              preview in 3D, and export professional PDFs — all from one app.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Product
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.slice(4).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <p className="text-sm text-white/40">Design. Visualize. Sell.</p>
        </div>
      </div>
    </footer>
  );
}
