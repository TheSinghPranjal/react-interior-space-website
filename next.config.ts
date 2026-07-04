import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Re-read public/ screenshots after you replace files (avoids stale optimized cache in dev)
    minimumCacheTTL: process.env.NODE_ENV === "development" ? 0 : 86400,
  },
};

export default nextConfig;
