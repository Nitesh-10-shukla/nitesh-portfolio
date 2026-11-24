import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Where the résumé and any future remote assets are hosted.
    remotePatterns: [{ protocol: "https", hostname: "ik.imagekit.io" }],
    formats: ["image/avif", "image/webp"],
  },
  headers: async () => [
    // Security headers for all routes
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
      ],
    },
    // Immutable cache for hashed Next.js assets (JS, CSS chunks)
    {
      source: "/_next/static/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    // Long cache for images, SVGs, and fonts
    {
      source: "/:path*.(svg|jpg|jpeg|png|gif|ico|webp|avif|woff|woff2|ttf|eot)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=2592000, stale-while-revalidate=86400",
        },
      ],
    },
    // Cache for static JSON/Lottie files
    {
      source: "/:path*.(json|lottie)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=604800, stale-while-revalidate=86400",
        },
      ],
    },
  ],
};

export default nextConfig;