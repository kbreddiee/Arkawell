import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export', // Enable static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // If deploying to username.github.io/repo-name, uncomment and set:
  // basePath: '/arkawell-site',
  // trailingSlash: true,
};

export default nextConfig;
