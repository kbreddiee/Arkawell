import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Only enable static export in production (for GitHub Pages)
  // This prevents Turbopack errors in dev mode
  ...(isProduction && { output: 'export' }),
  images: {
    unoptimized: true, // Required for static export
  },
  // Base path for GitHub Pages (only in production builds)
  // In dev mode, basePath is empty so localhost works correctly
  basePath: isProduction ? '/Arkawell' : '',
  trailingSlash: true,
};

export default nextConfig;
