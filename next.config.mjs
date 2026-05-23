/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: true
  },
  experimental: {
    // Disable the Next.js 15.5 dev-tools "Segment Explorer". It intermittently
    // corrupts the RSC client manifest in `next dev`, throwing
    // "Could not find the module …segment-explorer-node.js#SegmentViewNode"
    // and rendering the page unstyled. Does not affect production builds.
    devtoolSegmentExplorer: false
  }
};

export default nextConfig;
