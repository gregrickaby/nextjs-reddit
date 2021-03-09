import config from '@/functions/config'
import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      <link rel="preconnect" href="//www.reddit.com" crossOrigin="anonymous" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon/icon.png" />
      <link rel="icon" href="/favicon/icon.png" sizes="192x192" />

      <meta
        name="google-site-verification"
        content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
      />

      <script type="application/ld+json">
        {`"@context": "http://schema.org","@type": "WebSite","name": "${config?.siteTitle}","url": "${config?.siteUrl}"`}
      </script>
    </Head>
  )
}
