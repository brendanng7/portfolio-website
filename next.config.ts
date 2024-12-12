import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/portfolio-website',
  transpilePackages: ['next-mdx-remote'],
};

export default nextConfig;
