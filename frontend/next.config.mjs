import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: "akamai",
        path: "",
        unoptimized: true, // Disable default image optimization
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
    // assetPrefix: isProd ? '/store-redesign/' : '',
    // basePath: isProd ? '/store-redesign' : '',
    typescript: {
        ignoreBuildErrors: true,
    },
    // eslint: {
    //     ignoreDuringBuilds: true,
    // },
};

export default withNextIntl(nextConfig);
