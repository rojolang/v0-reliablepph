/** @type {import('next').NextConfig} */
const config = {
  images: {
    domains: ['images.unsplash.com', 'hebbkx1anhila5yf.public.blob.vercel-storage.com', 'reliablepph.com'],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    }
    return config
  },
}

export default config
