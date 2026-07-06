import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  images: {
    // In dev: skip /_next/image optimizer so replaced public/ files show immediately
    unoptimized: isDev,
    minimumCacheTTL: isDev ? 0 : 86400,
  },
  async headers() {
    if (!isDev) return [];
    return [
      {
        source: "/screenshots/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
