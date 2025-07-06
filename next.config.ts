import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
      },
      {
        protocol: "https",
        hostname: "pgxwljoepbuflkeqtyif.supabase.co",
      },
    ],
  },
};

export default nextConfig;
