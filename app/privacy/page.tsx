import type { Metadata } from "next";
import Link from "next/link";
import { APP_NAME, LINKS } from "@/lib/constants";
import {
  LegalList,
  LegalPageLayout,
  LegalSection,
} from "@/components/layout/LegalPageLayout";

export const metadata: Metadata = {
  title: `Privacy Policy — ${APP_NAME}`,
  description:
    "How Interior Space collects, uses, stores, and protects your data. Clear privacy practices for our blueprint, sketch, and 3D design app.",
  openGraph: {
    title: `Privacy Policy — ${APP_NAME}`,
    description:
      "How Interior Space handles your personal information, design data, and privacy rights.",
  },
};

const LAST_UPDATED = "July 4, 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <nav
        aria-label="Privacy policy sections"
        className="rounded-2xl border border-brand-green/10 bg-white p-6"
      >
        <p className="mb-3 text-sm font-semibold text-brand-text">On this page</p>
        <ol className="grid gap-2 text-sm sm:grid-cols-2">
          {[
            ["overview", "Overview"],
            ["information-we-collect", "Information we collect"],
            ["how-we-use", "How we use information"],
            ["design-data", "Your design & client data"],
            ["storage", "Where data is stored"],
            ["sharing", "Sharing & third parties"],
            ["permissions", "Device permissions"],
            ["retention", "Data retention"],
            ["security", "Security"],
            ["your-rights", "Your rights & choices"],
            ["children", "Children's privacy"],
            ["international", "International users"],
            ["changes", "Policy changes"],
            ["contact", "Contact us"],
          ].map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="text-brand-green hover:underline">
                {label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <LegalSection id="overview" title="1. Overview">
        <p>
          {APP_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides a
          professional interior design and apartment blueprint application for real estate
          agents, property developers, and interior designers. This Privacy Policy explains
          what information we collect, how we use it, and the choices you have.
        </p>
        <p>
          We built {APP_NAME} with a <strong className="text-brand-text">local-first</strong>{" "}
          approach: most of your design work stays on your device. We collect only what we need
          to run the app, improve it, and support your account — and we do{" "}
          <strong className="text-brand-text">not sell your personal information</strong>.
        </p>
      </LegalSection>

      <LegalSection id="information-we-collect" title="2. Information we collect">
        <p>Depending on how you use the app, we may collect:</p>

        <h3 className="font-semibold text-brand-text">Account information</h3>
        <LegalList
          items={[
            "Name and email address when you create an account or join a waitlist",
            "Authentication identifiers from Apple Sign In or Google Sign In, if you choose those login methods",
            "Subscription or plan status (Free, Pro, Enterprise)",
          ]}
        />

        <h3 className="font-semibold text-brand-text">App usage information</h3>
        <LegalList
          items={[
            "Feature usage (e.g. Blueprint, Sketch, 3D Preview, PDF export) to improve the product",
            "Crash reports and performance diagnostics",
            "Device type, operating system version, and app version",
            "General location (country/region level only, if enabled for localization)",
          ]}
        />

        <h3 className="font-semibold text-brand-text">Content you create</h3>
        <LegalList
          items={[
            "Room layouts, blueprints, furniture placements, and material selections",
            "Sketch annotations, text labels, images, and notes you add to floor plans",
            "Exported PDFs and .ispace files you generate or share",
            "Optional uploaded assets such as custom wallpaper or reference images",
          ]}
        />

        <h3 className="font-semibold text-brand-text">Support & communications</h3>
        <LegalList
          items={[
            "Messages you send to our support or sales team",
            "Feedback, demo requests, and waitlist sign-ups submitted through our website or app",
          ]}
        />

        <h3 className="font-semibold text-brand-text">Website visitors</h3>
        <LegalList
          items={[
            "Basic analytics (pages visited, referral source) if analytics are enabled",
            "Cookies or similar technologies used for site functionality and optional analytics",
          ]}
        />
      </LegalSection>

      <LegalSection id="how-we-use" title="3. How we use your information">
        <p>We use collected information to:</p>
        <LegalList
          items={[
            "Provide, maintain, and improve the app and website",
            "Sync your designs across devices when you sign in (if you enable cloud sync)",
            "Process subscriptions and deliver Pro or Enterprise features",
            "Generate PDF exports and enable .ispace file sharing at your request",
            "Respond to support requests, demo bookings, and sales inquiries",
            "Send product updates, security notices, and (with your consent) marketing emails",
            "Detect fraud, abuse, and technical issues",
            "Comply with legal obligations",
          ]}
        />
        <p>
          We do <strong className="text-brand-text">not</strong> use your blueprint or sketch
          content to train third-party AI models without your explicit consent. Future AI Assist
          features, when launched, will be described separately before activation.
        </p>
      </LegalSection>

      <LegalSection id="design-data" title="4. Your design & client data">
        <p>
          {APP_NAME} is used during property sales presentations. You may add buyer notes,
          apartment numbers, pricing, facing directions, and other client-related annotations in
          Sketch Mode or exported PDFs.
        </p>
        <p>
          <strong className="text-brand-text">You are responsible</strong> for ensuring you have
          a lawful basis to collect and share any personal information about buyers or clients
          that you enter into the app or export. We process this data on your behalf as a tool
          provider only.
        </p>
        <p>
          Before sharing a PDF or .ispace file with a client, review it for sensitive
          information you do not intend to disclose.
        </p>
      </LegalSection>

      <LegalSection id="storage" title="5. Where data is stored">
        <LegalList
          items={[
            "On your device: Designs, sketches, and 3D previews are stored locally and work offline.",
            "In the cloud (optional): If you sign in and enable sync, encrypted copies may be stored on secure servers to restore your work on another device.",
            "Exports: PDFs and .ispace files saved to your device or shared via email, messaging apps, or cloud storage are controlled by you and the service you use to share them.",
          ]}
        />
        <p>
          We use reputable cloud infrastructure providers with industry-standard security
          practices. Data may be processed in countries other than your own — see Section 12.
        </p>
      </LegalSection>

      <LegalSection id="sharing" title="6. Sharing & third parties">
        <p>We do not sell, rent, or trade your personal information. We may share data only:</p>
        <LegalList
          items={[
            "With service providers who help us operate the app (hosting, analytics, payment processing, email delivery) under strict confidentiality agreements",
            "When you explicitly share exports (PDF, .ispace) with clients or colleagues",
            "If required by law, court order, or to protect the rights, safety, and security of our users",
            "In connection with a merger, acquisition, or sale of assets, with notice to you where required by law",
          ]}
        />
        <p>Third-party services we may use include (subject to change):</p>
        <LegalList
          items={[
            "Apple App Store / Google Play (app distribution and payments)",
            "Cloud hosting and database providers",
            "Optional analytics (e.g. Google Analytics), only if enabled via environment configuration",
          ]}
        />
        <p>
          Each third party&apos;s use of data is governed by their own privacy policies.
        </p>
      </LegalSection>

      <LegalSection id="permissions" title="7. Device permissions">
        <p>The app may request the following permissions on your tablet or phone:</p>
        <LegalList
          items={[
            "Storage / Files: Save and open blueprints, PDF exports, and .ispace files",
            "Photos / Media: Insert reference images or logos into sketches (only when you choose to)",
            "Network: Sync designs, verify subscriptions, and download updates",
            "Notifications (optional): Product updates and account alerts",
          ]}
        />
        <p>
          You can revoke permissions in your device settings. Some features may not work without
          the relevant permission.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="8. Data retention">
        <LegalList
          items={[
            "Account data: Kept while your account is active and for a reasonable period after deletion to comply with legal and backup requirements.",
            "Design data on device: Remains until you delete it or uninstall the app.",
            "Cloud-synced designs: Deleted within 30 days of account deletion, unless law requires longer retention.",
            "Support emails: Retained as long as needed to resolve your inquiry and improve support.",
            "Analytics logs: Typically retained in aggregated or anonymized form for up to 24 months.",
          ]}
        />
      </LegalSection>

      <LegalSection id="security" title="9. Security">
        <p>
          We implement administrative, technical, and physical safeguards designed to protect
          your information, including encryption in transit (HTTPS/TLS), access controls, and
          secure development practices.
        </p>
        <p>
          No method of transmission or storage is 100% secure. If you believe your account has
          been compromised, contact us immediately at{" "}
          <a href={LINKS.contact} className="text-brand-green hover:underline">
            {LINKS.contact.replace("mailto:", "")}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="your-rights" title="10. Your rights & choices">
        <p>Depending on your location, you may have the right to:</p>
        <LegalList
          items={[
            "Access the personal information we hold about you",
            "Correct inaccurate information",
            "Delete your account and associated cloud data",
            "Export your data in a portable format",
            "Opt out of marketing emails (unsubscribe link in every email)",
            "Object to or restrict certain processing",
            "Withdraw consent where processing is consent-based",
          ]}
        />
        <p>
          To exercise these rights, email{" "}
          <a href={LINKS.contact} className="text-brand-green hover:underline">
            {LINKS.contact.replace("mailto:", "")}
          </a>{" "}
          with the subject line &ldquo;Privacy Request.&rdquo; We will respond within 30 days
          where required by applicable law.
        </p>
        <p>
          <strong className="text-brand-text">California residents (CCPA/CPRA):</strong> We do
          not sell personal information. You may request disclosure of categories collected and
          deletion of personal information we hold.
        </p>
        <p>
          <strong className="text-brand-text">EEA/UK residents (GDPR):</strong> Our legal bases
          include contract performance, legitimate interests (product improvement, security), and
          consent where applicable. You may lodge a complaint with your local data protection
          authority.
        </p>
      </LegalSection>

      <LegalSection id="children" title="11. Children's privacy">
        <p>
          {APP_NAME} is a professional business tool and is not directed at children under 13
          (or 16 in the EEA). We do not knowingly collect personal information from children. If
          you believe a child has provided us data, contact us and we will delete it promptly.
        </p>
      </LegalSection>

      <LegalSection id="international" title="12. International users">
        <p>
          If you use {APP_NAME} from outside the country where our servers are located, your
          information may be transferred to and processed in other countries with different data
          protection laws. Where required, we use appropriate safeguards such as standard
          contractual clauses.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="13. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. We will post the revised policy
          on this page and update the &ldquo;Last updated&rdquo; date. For material changes, we
          will provide notice in the app or by email where appropriate. Continued use after
          changes take effect constitutes acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="14. Contact us">
        <p>
          Questions about this Privacy Policy or our data practices? Contact us:
        </p>
        <div className="rounded-2xl border border-brand-green/10 bg-white p-6 text-brand-text">
          <p className="font-semibold">{APP_NAME}</p>
          <p className="mt-2">
            Email:{" "}
            <a href={LINKS.contact} className="text-brand-green hover:underline">
              {LINKS.contact.replace("mailto:", "")}
            </a>
          </p>
          <p className="mt-2 text-sm text-brand-muted">
            For privacy-specific requests, use the subject line &ldquo;Privacy Request.&rdquo;
          </p>
        </div>
        <p className="text-sm">
          See also our{" "}
          <Link href="/" className="text-brand-green hover:underline">
            homepage
          </Link>{" "}
          for product information and support options.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
