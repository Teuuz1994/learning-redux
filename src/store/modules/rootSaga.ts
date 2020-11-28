import { all } from 'redux-saga/effects'

import cart from './cart/sagas'

export default function* rootSaga() { // função generator (parecido com o async await)
  return yield all([cart])
}