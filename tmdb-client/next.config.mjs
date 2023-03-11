/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    async redirects() {
        return [
            {
                source: '/movie',
                destination: '/movie/popular',
                permanent: true,
            },
        ]
    },
}

export default nextConfig