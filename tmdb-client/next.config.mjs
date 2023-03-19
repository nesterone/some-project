/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    async redirects() {
        return [
            {
                source: '/[category]',
                destination: '/[category]/popular',
                permanent: true,
            },
        ]
    },
}

export default nextConfig