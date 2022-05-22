/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  images: {
    domains: ['doodleipsum.com', 'images.unsplash.com', 'pbs.twimg.com', 'shuffle.dev', 'tailwindui.com'],
    loader: 'cloudinary',
    path: '/'
  },
  eslint: { dirs: ['.'] },
  reactStrictMode: true,
  poweredByHeader: false,
  assetPrefix: isProd ? 'https://elementail.js.org' : null
}

module.exports = nextConfig
