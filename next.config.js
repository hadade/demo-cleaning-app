/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/demo-cleaning-app' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/demo-cleaning-app/' : ''
};

module.exports = nextConfig;