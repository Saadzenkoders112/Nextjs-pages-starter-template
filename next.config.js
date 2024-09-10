/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        pathname: '/products/images/**',
      },
    ],
    domains: ['res.cloudinary.com'], // Add your domain here
  },
  eslint: {
    ignoreDuringBuilds:true
  }
};

module.exports = nextConfig;
