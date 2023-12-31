/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
       
        remotePatterns: [{
            protocol: 'https',
            hostname: 'os.alipayobjects.com',
            pathname: '/**/*',
        },{
            protocol: 'https',
            hostname: 'https://source.unsplash.com',
            pathname: '/**/*',
        }],

    },
}

module.exports = nextConfig
