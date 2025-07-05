/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages uses the repository name as base path
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio-website/' : '',
}

module.exports = nextConfig
