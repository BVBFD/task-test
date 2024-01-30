/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dewa3t2gi/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
