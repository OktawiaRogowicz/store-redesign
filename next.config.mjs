import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ["cdn.sanity.io", "cdn.shopify.com"],
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '/images/73vuarhv/**/**',
            },
        ],
    },
};

export default withNextIntl(nextConfig);
