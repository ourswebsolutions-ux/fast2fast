import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["flagcdn.com"],
  },
   typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;