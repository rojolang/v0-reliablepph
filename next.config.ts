import type { NextConfig } from 'next'
import type { Configuration as WebpackConfig } from 'webpack'

interface UserConfig {
  images?: {
    domains?: string[]
  }
  webpack?: (config: WebpackConfig) => WebpackConfig
}

let userConfig: UserConfig | undefined
try {
  userConfig = (await import('./v0-user-next.config')).default
} catch (e) {
  // ignore error
}

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

function mergeConfig(baseConfig: NextConfig, userConfig?: UserConfig) {
  if (!userConfig) {
    return baseConfig
  }

  for (const key in userConfig) {
    if (
      typeof baseConfig[key] === 'object' &&
      !Array.isArray(baseConfig[key])
    ) {
      baseConfig[key] = {
        ...baseConfig[key],
        ...userConfig[key],
      }
    } else {
      baseConfig[key] = userConfig[key]
    }
  }

  return baseConfig
}

export default mergeConfig(nextConfig, userConfig)
