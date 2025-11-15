import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
// Only use basePath for GitHub Pages subdirectory deployment
// Set USE_BASEPATH=false when deploying to custom domain
const useBasePath = process.env.USE_BASEPATH !== 'false' && isProduction;
const basePath = useBasePath ? '/Arkawell' : '';

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Only enable static export in production (for GitHub Pages)
  // This prevents Turbopack errors in dev mode
  ...(isProduction && { output: 'export' }),
  images: {
    unoptimized: true, // Required for static export
  },
  // Base path for GitHub Pages (only when USE_BASEPATH is not false)
  // Set USE_BASEPATH=false in GitHub Actions when deploying to custom domain
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true,
};

export default nextConfig;
