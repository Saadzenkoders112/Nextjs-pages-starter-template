/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.dummyjson.com"],
    domains: ['res.cloudinary.com'], // Add your domain here
  },
  eslint: {
    ignoreDuringBuilds:true
  }
};

module.exports = nextConfig;
