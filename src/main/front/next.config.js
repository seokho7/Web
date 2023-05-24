/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:members/new",
        destination: "http://localhost:8080//members/new", 
      },
      {
        source: "/:members/test",
        destination: "http://localhost:8080//members/test", 
      },
      {
        source: "/:members/checkNickname",
        destination: "http://localhost:8080//members/checkNickname", 
      },
    ];
  },
};

module.exports = nextConfig;
