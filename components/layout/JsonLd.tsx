import { APP_NAME, CONTACT, LINKS } from "@/lib/constants";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: APP_NAME,
    applicationCategory: "DesignApplication",
    operatingSystem: "iOS, Android (optimized for tablet)",
    description:
      "Blueprint editor, live sketch annotations, 3D preview, and PDF export for real estate agents presenting apartments to buyers.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    downloadUrl: LINKS.appStore,
    contactPoint: {
      "@type": "ContactPoint",
      email: CONTACT.email,
      telephone: CONTACT.phone,
      contactType: "customer support",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
