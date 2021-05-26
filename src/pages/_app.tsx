import 'normalize.css'
import 'tippy.js/dist/tippy.css'
import '~/utils/DropDown/DropDown.scss'

import './font-face.scss'
import './globals.scss'

import '../i18n'

import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
