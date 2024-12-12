import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio-website',
  assetPrefix: '/portfolio-website',
  transpilePackages: ['next-mdx-remote'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
