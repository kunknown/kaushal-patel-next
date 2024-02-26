/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "img.icons8.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
