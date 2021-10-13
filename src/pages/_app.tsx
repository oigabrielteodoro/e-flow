import React from 'react'
import { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { QueryClientProvider } from 'react-query'
import { PersistGate } from 'redux-persist/integration/react'

import 'react-toastify/dist/ReactToastify.css'
import 'react-multi-carousel/lib/styles.css'

import { GlobalStyle } from 'ui'
import { persistor, queryClient, store } from 'client'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
      <ToastContainer />
    </>
  )
}

export default App
