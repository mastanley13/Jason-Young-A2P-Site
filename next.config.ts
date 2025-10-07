import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
