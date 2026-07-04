import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
  metadataBase: new URL("https://interiorspace.app"),
  title: "Interior Space — Blueprint, Sketch & 3D for Real Estate Agents",
  description:
    "Present apartments professionally. Blueprint editor, live sketch annotations, 3D preview, and PDF export — built for real estate agents.",
  keywords: [
    "real estate",
    "blueprint",
    "interior design",
    "3D preview",
    "property sales",
    "floor plan",
  ],
  openGraph: {
    title: "Interior Space — Blueprint, Sketch & 3D for Real Estate Agents",
    description:
      "Present apartments professionally. Blueprint editor, live sketch annotations, 3D preview, and PDF export — built for real estate.",
    images: [
      {
        url: "/screenshots/hero-app.png",
        width: 1194,
        height: 834,
        alt: "Interior Space on tablet for real estate agents",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Space",
    description:
      "Blueprint, sketch annotations, 3D preview, and PDF export for property sales.",
    images: ["/screenshots/hero-app.png"],
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
