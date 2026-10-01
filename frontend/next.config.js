/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/AgendamentoBarbearia',
    assetPrefix: '/AgendamentoBarbearia/',
  }),
}

module.exports = nextConfig
