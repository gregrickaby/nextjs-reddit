import PropTypes from 'prop-types'
import 'styles/index.css'
import 'styles/global.css'
import {DefaultSeo} from 'next-seo'
import config from '@/functions/config'

export default function App({Component, pageProps}) {
  return (
    <>
      <DefaultSeo
        title={config?.siteTitle}
        description={config?.siteDescription}
        canonical={config?.siteUrl}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: config?.siteUrl,
          site_name: config?.siteTitle,
          description: config?.siteDescription,
          images: [
            {
              url: `${config?.siteUrl}social-share.jpg`,
              width: 1200,
              height: 630,
              alt: config?.siteDescription
            }
          ]
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired
}
