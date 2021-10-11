import React from 'react'
import { AppProps } from 'next/app'

import 'react-multi-carousel/lib/styles.css'

import { GlobalStyle } from 'ui'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
