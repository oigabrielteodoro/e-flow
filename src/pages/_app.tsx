import React from 'react'
import { AppProps } from 'next/app'

import '@brainhubeu/react-carousel/lib/style.css'

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
