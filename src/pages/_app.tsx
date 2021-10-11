import React from 'react'
import { AppProps } from 'next/app'

import { ToastContainer } from 'react-toastify'
import { QueryClientProvider } from 'react-query'

import 'react-toastify/dist/ReactToastify.css'
import 'react-multi-carousel/lib/styles.css'

import { GlobalStyle } from 'ui'
import { queryClient } from 'client'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <ToastContainer />
    </>
  )
}

export default App
