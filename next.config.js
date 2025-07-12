/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  compiler: {
    removeConsole: false,
  },
  experimental: {
    esmExternals: false,
    forceSwcTransforms: false
  }
}

module.exports = nextConfig