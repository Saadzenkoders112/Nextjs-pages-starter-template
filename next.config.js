/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.dummyjson.com"], // Add your domain here
  },
};

module.exports = nextConfig;
