import Link from "next/link";
import { APP_NAME, CONTACT, DEVELOPER, LINKS, NAV_ITEMS, TAGLINE } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

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
            <Logo variant="light" size={44} className="mb-4" />
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              The blueprint tool built for real estate. Design rooms, annotate floor plans,
              preview in 3D, and export professional PDFs — on Android tablets now, iOS
              coming soon.
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <a
                href={LINKS.contact}
                className="block text-white/60 transition-colors hover:text-white"
              >
                {CONTACT.email}
              </a>
              <a
                href={LINKS.phone}
                className="block text-white/60 transition-colors hover:text-white"
              >
                {CONTACT.phone}
              </a>
              <p className="text-white/60">{CONTACT.address}</p>
            </div>
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
                  {item.href.startsWith("mailto:") ? (
                    <a
                      href={item.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <a
                  href={LINKS.developerLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  LinkedIn — {DEVELOPER.name}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <p className="text-sm text-white/40">{TAGLINE}</p>
        </div>
      </div>
    </footer>
  );
}
