import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Every route in this template is prerendered at build time and every image is
  // local, so the site can be hosted on any static-compatible host.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
