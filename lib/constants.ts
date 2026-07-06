export const APP_NAME = "Abode Home";
export const TAGLINE = "Design • Decorate • Live Beautifully";
export const DEMO_VIDEO_SRC = "/demo_video/demo_video.mp4";

export const CONTACT = {
  email: "adobehomespace@gmail.com",
  phone: "+91 6363957079",
  phoneTel: "tel:+916363957079",
  address: "Bangalore, India",
} as const;

export const DEVELOPER = {
  name: "Pranjal Singh",
  linkedin: "https://www.linkedin.com/in/thesinghpranjal/",
} as const;

export const STORE = {
  badge: "Available soon on Play Store & App Store",
  note: "Android first — live on Google Play shortly. iOS coming soon.",
  googlePlay: "https://play.google.com/store/apps/details?id=com.interiorspace",
} as const;

/** Build a mailto link to the primary contact inbox */
export function mailto(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${CONTACT.email}${query ? `?${query}` : ""}`;
}

export const LINKS = {
  googlePlay: STORE.googlePlay,
  contact: mailto(),
  contactPricing: mailto("Pricing Inquiry — Abode Home"),
  contactDemo: mailto("Book a Demo — Abode Home"),
  contactGeneral: mailto("Contact — Abode Home"),
  notifyAI: mailto("Notify me about AI Assist — Abode Home"),
  privacy: "/privacy",
  terms: "/terms",
  phone: CONTACT.phoneTel,
  developerLinkedIn: DEVELOPER.linkedin,
} as const;

export const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "Sketch", href: "#sketch" },
  { label: "3D", href: "#visualization" },
  { label: "Pricing", href: "#pricing" },
] as const;
