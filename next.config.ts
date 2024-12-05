import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: isProd ? 'https://github.com/aferreiras/about-me' : '',
  basePath: isProd ? '/docs' : '',
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  }
};

export default nextConfig;
