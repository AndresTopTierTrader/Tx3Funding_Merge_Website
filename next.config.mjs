/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    config.ignoreWarnings = [
      /Image with src .* has either width or height modified/,
      /Image with src .* either width or height/,
      /width and height/,
      /For security reasons/,
      /hotjar/,
      /Learn more about HTTPS/,
      /help\.hotjar\.com/,
    ];
    
    if (dev) {
      config.infrastructureLogging = {
        level: 'error',
      };
    }
    return config;
  },
};

export default nextConfig;