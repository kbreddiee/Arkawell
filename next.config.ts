import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export', // Enable static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // Base path for GitHub Pages (repository name)
  basePath: '/Arkawell',
  trailingSlash: true,
};

export default nextConfig;
