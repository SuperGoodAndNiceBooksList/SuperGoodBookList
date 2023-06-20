/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        remotePatterns : [
            {
                protocol: 'https',
                hostname: 'covers.openlibrary.org',
                port: '',
                pathname: '/b/id/**'
            }
        ]
    }
}

module.exports = nextConfig