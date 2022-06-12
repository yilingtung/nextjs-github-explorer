/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ['error'],
    },
  },
  images: {
    disableStaticImages: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { icon: true },
        },
      ],
    });
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
