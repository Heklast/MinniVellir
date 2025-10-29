import type { NextConfig } from "next";

const nextConfig: NextConfig = {
              // <-- enables static export
  images: {
    // next/image optimization needs a server; for static export, turn it off
    unoptimized: true,
    // (optional) allow Cloudinary domains if you still use <Image/> for layout/styling
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" }
    ],
  },
};
export default nextConfig;