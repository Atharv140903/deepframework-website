import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Render every route to static HTML in out/ at build time.
  output: "export",
  // No image server in a static export; images are served as-is.
  images: { unoptimized: true },
  trailingSlash: false,
};

export default nextConfig;
