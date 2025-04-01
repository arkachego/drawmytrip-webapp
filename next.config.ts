import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    nodeMiddleware: true,
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/hooks",
    ],
  }
};

export default nextConfig;
