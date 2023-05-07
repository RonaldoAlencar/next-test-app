/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com', 'cdn.discordapp.com', 'encrypted-tbn0.gstatic.com'],
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXT_HOME_PAGE: process.env.NEXT_HOME_PAGE,
    NEXT_API_URL: process.env.NEXT_API_URL,
  }
}

module.exports = nextConfig
