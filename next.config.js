/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue',
  },
  basePath: '/dist',
  compress: true,
  async redirects() {
    return [
      {
        source: '/home',
        destination: 'https://github.com/luisAriza',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
