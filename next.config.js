/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(pdf|doc|docx|xls|xlsx)$/,
      type: 'asset/resource',
    });
    return config;
  },
};

module.exports = nextConfig;
