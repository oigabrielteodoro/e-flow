import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'

import { rootReducer, rootSaga } from './modules'
import persistReducers from './modules/persistReducers'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

export const store = createStore(
  persistReducers(rootReducer),
  composeWithDevTools(applyMiddleware(...middlewares)),
)

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
