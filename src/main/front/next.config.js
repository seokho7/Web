/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // 아래를 추가합니다.
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
        source: "/:join",
        destination: "http://localhost:8080/test", // 해당 서버 포트
      },
    ];
  },
};

module.exports = nextConfig;
