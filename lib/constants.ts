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
  email: "pranjalsingh10061997@gmail.com",
  linkedin: "https://www.linkedin.com/in/thesinghpranjal/",
} as const;

export const LINKS = {
  appStore: "https://apps.apple.com/app/interior-space",
  googlePlay: "https://play.google.com/store/apps/details?id=com.interiorspace",
  bookDemo: `mailto:${CONTACT.email}?subject=Book%20a%20Demo`,
  contactSales: `mailto:${CONTACT.email}?subject=Contact%20Sales`,
  notifyAI: `mailto:${CONTACT.email}?subject=Notify%20me%20about%20AI%20Assist`,
  waitlist: `mailto:${CONTACT.email}?subject=Join%20Waitlist`,
  privacy: "/privacy",
  terms: "/terms",
  contact: `mailto:${CONTACT.email}`,
  phone: CONTACT.phoneTel,
  developerEmail: `mailto:${DEVELOPER.email}`,
  developerLinkedIn: DEVELOPER.linkedin,
} as const;

export const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "Sketch", href: "#sketch" },
  { label: "3D", href: "#visualization" },
  { label: "Pricing", href: "#pricing" },
] as const;
