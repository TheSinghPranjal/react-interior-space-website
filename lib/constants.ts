export const APP_NAME = "Interior Space";
export const TAGLINE = "Turn floor plans into closing conversations.";
export const DEMO_VIDEO_SRC = "/demo_video/demo_video.mp4";

export const LINKS = {
  appStore: "https://apps.apple.com/app/interior-space",
  googlePlay: "https://play.google.com/store/apps/details?id=com.interiorspace",
  bookDemo: "mailto:sales@interiorspace.app?subject=Book%20a%20Demo",
  contactSales: "mailto:sales@interiorspace.app?subject=Contact%20Sales",
  notifyAI: "mailto:hello@interiorspace.app?subject=Notify%20me%20about%20AI%20Assist",
  waitlist: "mailto:hello@interiorspace.app?subject=Join%20Waitlist",
  privacy: "/privacy",
  terms: "#",
  contact: "mailto:hello@interiorspace.app",
} as const;

export const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "Sketch", href: "#sketch" },
  { label: "3D", href: "#visualization" },
  { label: "Pricing", href: "#pricing" },
] as const;
