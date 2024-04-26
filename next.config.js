/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "cdn.sanity.io",
      "s.gravatar.com",
      "lh3.googleusercontent.com",
      "assets.examples.com",
      "127.0.0.1",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
