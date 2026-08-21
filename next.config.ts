import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * YouTube poster frames for the Videos page. Thumbnails are served from
     * YouTube's own CDN; no video is downloaded or re-hosted here.
     */
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }],
  },
};

export default nextConfig;
