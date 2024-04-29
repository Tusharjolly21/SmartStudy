/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "cdn.sanity.io",
      "s.gravatar.com",
      "lh3.googleusercontent.com",
      "assets.examples.com",
      "goldfish-app-rl2cm.ondigitalocean.app",
      "digital-ocean-space-bucket.blr1.digitaloceanspaces.com",
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
