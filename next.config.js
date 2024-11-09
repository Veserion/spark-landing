/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.builder.io'],
  },
  reactStrictMode: true,
  swcMinify: true,
  output: "export", 
  distDir: 'dist',
}

module.exports = nextConfig; 