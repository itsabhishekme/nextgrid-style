/** @type {import('next').NextConfig} */

const withPWA = require(
  "next-pwa"
)({
  dest: "public",

  register: true,

  skipWaiting: true,

  disable:
    process.env.NODE_ENV ===
    "development",
});

const nextConfig = {
  output: "export",

  reactStrictMode: true,

  trailingSlash: true,

  poweredByHeader: false,

  compress: true,

  turbopack: {},

  images: {
    unoptimized: true,
  },

  experimental: {
    scrollRestoration: true,
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV ===
      "production",
  },
};

module.exports =
  withPWA(nextConfig);