/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com'],
    // domains: ['app-sa-east-1.hygraph.com'],
    // remotePatterns: {
    //   protocol: 'https',
    //   hostname: 'app-sa-east-1.hygraph.com/',
    // },
  },
}

module.exports = nextConfig
