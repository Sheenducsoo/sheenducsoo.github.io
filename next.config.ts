import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  
  // Recomendado para GitHub Pages si utilizas el componente <Image> de Next.js
  images: {
    unoptimized: true,
  },
};

export default nextConfig;