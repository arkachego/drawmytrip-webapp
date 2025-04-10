import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/hooks",
    ],
  }
};

export default nextConfig;
