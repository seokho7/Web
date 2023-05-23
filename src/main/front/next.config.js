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
        source: "/:join", // 나의 api 라우터 경로
        destination: "http://localhost:8080/test", 
      },
      {
        source: "/:members/new",
        destination: "http://localhost:8080//members/new", 
      },
      {
        source: "/:members/test",
        destination: "http://localhost:8080//members/test", 
      },
    ];
  },
};

module.exports = nextConfig;
