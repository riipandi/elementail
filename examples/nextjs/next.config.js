const withTM = require('next-transpile-modules')([
    '@elementail/core', '@elementail/hooks'
]);


/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
})

module.exports = nextConfig
