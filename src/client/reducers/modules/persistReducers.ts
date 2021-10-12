import { Reducer } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { ApplicationState } from '..'

export default (reducers: Reducer) => {
  const persistedReducer = persistReducer<ApplicationState>(
    {
      key: 'root',
      storage,
      whitelist: ['companies'],
    },
    reducers,
  )

  return persistedReducer
}
