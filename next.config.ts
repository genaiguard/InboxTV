/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Static HTML export
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
