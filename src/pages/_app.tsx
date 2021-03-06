import 'normalize.css'
import 'tippy.js/dist/tippy.css'
import '~/utils/DropDown/DropDown.scss'
import './font-face.scss'
import './globals.scss'
import '../i18n'

import React, { useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Modal } from '~/components/atoms'
import { PopupMaster, PopupResearch, PopupCasino } from '~/components/molecules'
import { popupParam } from '~/utils/config'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const [show, setShow] = useState<false | ReactNode>(false)
  const handleClose = () => setShow(false)

  useEffect(() => {
    switch (router.query[popupParam]) {
      case 'master':
        setShow(<PopupMaster />)
        break
      case 'research':
        setShow(<PopupResearch />)
        break
      case 'casino':
        setShow(<PopupCasino />)
        break
      default:
        setShow(false)
        break
    }
  }, [router.query])

  return (
    <>
      {show && <Modal onClose={handleClose}>{show}</Modal>}

      <Head>
        <title>House of Strauss</title>
        <meta
          name="description"
          content="House of Strauss offers a unique musical and culinary experience in Vienna, the Capital of Music"
        />
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
