import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { APP_NAME, TAGLINE } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { JsonLd } from "@/components/layout/JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abodehome.app"),
  title: `${APP_NAME} — Blueprint, Sketch & 3D for Real Estate Agents`,
  description:
    "Present apartments professionally. Blueprint editor, live sketch annotations, 3D preview, and PDF export — built for real estate agents.",
  keywords: [
    "Abode Home",
    "real estate",
    "blueprint",
    "interior design",
    "3D preview",
    "property sales",
    "floor plan",
  ],
  icons: {
    icon: "/logo/app_icon.png",
    apple: "/logo/app_icon.png",
  },
  openGraph: {
    title: `${APP_NAME} — Blueprint, Sketch & 3D for Real Estate Agents`,
    description:
      "Present apartments professionally. Blueprint editor, live sketch annotations, 3D preview, and PDF export — built for real estate agents.",
    images: [
      {
        url: "/logo/app_icon.png",
        width: 512,
        height: 512,
        alt: `${APP_NAME} app icon`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: `${TAGLINE} Blueprint, sketch, 3D preview, and PDF export for property sales.`,
    images: ["/logo/app_icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full antialiased">
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
