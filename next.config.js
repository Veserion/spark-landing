/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.builder.io'],
  },
  // reactStrictMode: true,
  swcMinify: true,
  // output: "export", 
  // basePath: '/spark-landing',
}

module.exports = nextConfig; 