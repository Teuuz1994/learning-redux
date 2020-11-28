import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { ICartState } from './modules/cart/types'
import RootReducers from './modules/RootReducers'
import rootSaga from './modules/rootSaga'

export interface IState {
  cart: ICartState
}

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware] // encapsulamento de middlewares

const store = createStore(
  RootReducers,
  applyMiddleware(...middleware) // middleware do saga para interceptação das actions
)

sagaMiddleware.run(rootSaga)

export default store