/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "oaidalleapiprodscus.blob.core.windows.net",
      "avatars.githubusercontent.com",
      "cloudflare-ipfs.com",
      "images.remotePatterns"
    ]
  }
}

module.exports = nextConfig
