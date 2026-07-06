import type { Metadata } from "next";
import Link from "next/link";
import { APP_NAME, CONTACT, LINKS } from "@/lib/constants";
import {
  LegalList,
  LegalPageLayout,
  LegalSection,
} from "@/components/layout/LegalPageLayout";

export const metadata: Metadata = {
  title: `Terms of Service — ${APP_NAME}`,
  description: `Terms of Service for ${APP_NAME} — blueprint, sketch, and 3D design app for real estate professionals.`,
};

const LAST_UPDATED = "July 7, 2026";

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated={LAST_UPDATED}>
      <nav
        aria-label="Terms of service sections"
        className="rounded-2xl border border-brand-green/10 bg-white p-6"
      >
        <p className="mb-3 text-sm font-semibold text-brand-text">On this page</p>
        <ol className="grid gap-2 text-sm sm:grid-cols-2">
          {[
            ["acceptance", "Acceptance of terms"],
            ["service", "The service"],
            ["accounts", "Accounts & subscriptions"],
            ["acceptable-use", "Acceptable use"],
            ["your-content", "Your content"],
            ["intellectual-property", "Intellectual property"],
            ["disclaimer", "Disclaimer"],
            ["limitation", "Limitation of liability"],
            ["termination", "Termination"],
            ["governing-law", "Governing law"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="text-brand-green hover:underline">
                {label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <LegalSection id="acceptance" title="1. Acceptance of terms">
        <p>
          By downloading, accessing, or using {APP_NAME} (&ldquo;the App&rdquo;) or this website,
          you agree to these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree, do not
          use the App.
        </p>
        <p>
          These Terms apply to real estate agents, property developers, interior designers, and
          other users of {APP_NAME}.
        </p>
      </LegalSection>

      <LegalSection id="service" title="2. The service">
        <p>
          {APP_NAME} provides tools to design interior spaces, edit apartment blueprints, annotate
          floor plans, preview layouts in 3D, and export professional PDF reports. Features may
          vary by plan (Free, Pro, Enterprise) and device type.
        </p>
        <p>
          We may update, modify, or discontinue features at any time. We will make reasonable
          efforts to notify users of material changes.
        </p>
      </LegalSection>

      <LegalSection id="accounts" title="3. Accounts & subscriptions">
        <LegalList
          items={[
            "You are responsible for maintaining the confidentiality of your account credentials.",
            "You must provide accurate information when creating an account or subscribing.",
            "Paid subscriptions renew according to the billing terms shown at purchase unless cancelled.",
            "Refunds are handled according to Google Play policies where applicable.",
          ]}
        />
      </LegalSection>

      <LegalSection id="acceptable-use" title="4. Acceptable use">
        <p>You agree not to:</p>
        <LegalList
          items={[
            "Use the App for any unlawful purpose or in violation of applicable regulations.",
            "Upload content that infringes third-party intellectual property or privacy rights.",
            "Attempt to reverse engineer, decompile, or extract source code from the App.",
            "Interfere with or disrupt the App, servers, or networks.",
            "Share account access in ways that violate your subscription plan.",
          ]}
        />
      </LegalSection>

      <LegalSection id="your-content" title="5. Your content">
        <p>
          You retain ownership of blueprints, designs, sketches, annotations, and exports you
          create in {APP_NAME}. By using the App, you grant us a limited license to store, process,
          and transmit your content solely to provide the service (e.g. cloud sync, PDF export).
        </p>
        <p>
          You are solely responsible for any buyer or client information you enter into designs or
          exports, and for obtaining appropriate consent before sharing materials.
        </p>
      </LegalSection>

      <LegalSection id="intellectual-property" title="6. Intellectual property">
        <p>
          {APP_NAME}, its logo, branding, software, and documentation are owned by us or our
          licensors and protected by intellectual property laws. These Terms do not grant you any
          rights to our trademarks or brand assets except as needed to use the App.
        </p>
      </LegalSection>

      <LegalSection id="disclaimer" title="7. Disclaimer">
        <p>
          THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES
          OF ANY KIND, EXPRESS OR IMPLIED. We do not warrant that the App will be uninterrupted,
          error-free, or that 3D previews or dimensions will meet building code or regulatory
          requirements. {APP_NAME} is a presentation and design tool — not a substitute for
          professional architectural, engineering, or legal advice.
        </p>
      </LegalSection>

      <LegalSection id="limitation" title="8. Limitation of liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA,
          OR GOODWILL, ARISING FROM YOUR USE OF THE APP.
        </p>
        <p>
          Our total liability for any claim related to the App shall not exceed the amount you paid
          us in the twelve (12) months preceding the claim, or one hundred US dollars (USD $100),
          whichever is greater.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="9. Termination">
        <p>
          You may stop using the App at any time. We may suspend or terminate access if you violate
          these Terms or if required by law. Upon termination, your right to use the App ceases, but
          provisions that by nature should survive (including disclaimers and limitations of
          liability) will remain in effect.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="10. Governing law">
        <p>
          These Terms are governed by the laws of India. Any disputes shall be subject to the
          exclusive jurisdiction of the courts in {CONTACT.address}, unless otherwise required by
          applicable consumer protection law.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="11. Contact">
        <p>Questions about these Terms? Contact us:</p>
        <div className="rounded-2xl border border-brand-green/10 bg-white p-6 text-brand-text">
          <p className="font-semibold">{APP_NAME}</p>
          <p className="mt-2">
            Email:{" "}
            <a href={LINKS.contact} className="text-brand-green hover:underline">
              {CONTACT.email}
            </a>
          </p>
          <p className="mt-2">
            Phone:{" "}
            <a href={LINKS.phone} className="text-brand-green hover:underline">
              {CONTACT.phone}
            </a>
          </p>
          <p className="mt-2 text-brand-muted">{CONTACT.address}</p>
        </div>
        <p className="text-sm">
          See also our{" "}
          <Link href={LINKS.privacy} className="text-brand-green hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
