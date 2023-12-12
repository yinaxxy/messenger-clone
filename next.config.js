/** @type {import('next').NextConfig} */
const nextConfig = {
  appDir: true,
  swcPlugins: [
    ["next-superjson-plugin", {}]
  ]
}

module.exports = nextConfig
