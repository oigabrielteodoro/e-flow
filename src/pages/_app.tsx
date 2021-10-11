import React from 'react'
import { AppProps } from 'next/app'

import { ToastContainer } from 'react-toastify'
import { QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import 'react-toastify/dist/ReactToastify.css'
import 'react-multi-carousel/lib/styles.css'

import { GlobalStyle } from 'ui'
import { queryClient, store } from 'client'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
      <ToastContainer />
    </>
  )
}

export default App
