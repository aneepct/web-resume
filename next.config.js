/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
    esmExternals: false
  },
  compiler: {
    removeConsole: false,
  }
}

module.exports = nextConfig