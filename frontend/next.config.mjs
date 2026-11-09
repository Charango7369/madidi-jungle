const isExport = process.env.NEXT_EXPORT === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isExport ? 'export' : 'standalone',
  reactStrictMode: true,
  images: {
    unoptimized: isExport,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.madidijungle.com',
      },
      {
        protocol: 'https',
        hostname: 'madidijungle.com',
      },
    ],
  },
  // OWASP Recommended Security Headers & CSP
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' blob: data: https://www.madidijungle.com https://madidijungle.com https://images.unsplash.com",
              "font-src 'self' data:",
              "connect-src 'self' http://localhost:8010 https://*.apolodigital.lat https://api.madidijungle.apolodigital.lat https://wa.me",
              "frame-ancestors 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://wa.me",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
