import Head from 'next/head'
import { siteConfig } from '@/config/site'

interface CanonicalTagProps {
  path: string
}

export function CanonicalTag({ path }: CanonicalTagProps) {
  const baseUrl = siteConfig.url
  const canonicalUrl = `${baseUrl}${path}`

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  )
}

