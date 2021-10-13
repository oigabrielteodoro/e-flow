import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { QueryClientProvider } from 'react-query'
import { PersistGate } from 'redux-persist/integration/react'

import { GlobalStyle, theme } from '../src/ui'
import { store, persistor, queryClient } from '../src/client'

export const parameters = {
  backgrounds: {
    default: 'gray',
    values: [
      {
        name: 'gray',
        value: theme.colors.gray[50],
      },
      {
        name: 'blue',
        value: theme.colors.blue[500],
      },
    ],
  },
}

export const decorators = [
  (Story) => (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Story />
          </PersistGate>
        </Provider>
      </QueryClientProvider>

      <ToastContainer />
      <GlobalStyle />
    </>
  ),
]
