/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['skillicons.dev', 'avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig
