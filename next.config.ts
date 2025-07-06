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
      {
        protocol: "https",
        hostname: "blog.solvify.es",
      },
    ],
  },
};

export default nextConfig;
