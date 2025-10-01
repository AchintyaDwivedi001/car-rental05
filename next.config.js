/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Required for Docker
  reactStrictMode: true,
  // Add your existing config here
  images: {
    domains: [], // Add any external image domains you use
  },
};

module.exports = nextConfig;