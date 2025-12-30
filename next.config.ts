import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  distDir:"build"
};

export default nextConfig;
