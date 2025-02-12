/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["tdesign-react"],
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src')
    };
    return config;
  },
  output: 'standalone',
  experimental: {
    appDir: false
  }
};

export default nextConfig;
