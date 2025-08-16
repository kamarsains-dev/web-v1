import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
  /*async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|css|js|woff2|webp|ico|riv)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate"
          }
        ]
      }
    ]
  },*/
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
