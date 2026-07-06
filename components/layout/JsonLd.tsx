import { APP_NAME, CONTACT, LINKS, STORE } from "@/lib/constants";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: APP_NAME,
    applicationCategory: "DesignApplication",
    operatingSystem: "Android (iOS coming soon)",
    description:
      "Blueprint editor, live sketch annotations, 3D preview, and PDF export for real estate agents presenting apartments to buyers.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Contact for pricing",
    },
    downloadUrl: STORE.googlePlay,
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
