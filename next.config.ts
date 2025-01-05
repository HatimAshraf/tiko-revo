import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clear-perch-594.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
