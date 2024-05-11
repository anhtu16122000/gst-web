/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.vietnamworks.com',
        port: '',
        pathname: '/hrinsider/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
