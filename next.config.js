/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["smartcare.com.np"],
  },
};

module.exports = nextConfig;
