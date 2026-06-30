import { APP_NAME, LINKS } from "@/lib/constants";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: APP_NAME,
    applicationCategory: "DesignApplication",
    operatingSystem: "iOS, Android",
    description:
      "Blueprint editor, live sketch annotations, 3D preview, and PDF export for real estate agents presenting apartments to buyers.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    downloadUrl: LINKS.appStore,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
