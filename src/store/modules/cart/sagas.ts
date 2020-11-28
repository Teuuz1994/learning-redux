import { all, takeLatest, select, call, put } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import api from '../../../services/api'

import { IState } from '../..'
import { addProducToCartFailure, addProducToCartRequest, addProducToCartSuccess } from './actions'
import { ActionTypes } from './types'

// tipaando a action com base no retorno da action
type CheckProductStockRequest = ReturnType<typeof addProducToCartRequest>

interface IStockResponse {
  id: number
  quantity: number
}

// funções do redux não podem usar async await, no lugar usam generators
// com um "*" após a declação "function"
function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload

  const currentQuantity: number = yield select((state: IState) => {
    // o uso do ?? é o mesmo que usar || é um operador "or"
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
  })

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(
    api.get, `stock/${product.id}`
  )

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProducToCartSuccess(product))
  } else {
    yield put(addProducToCartFailure(product.id))
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCardRequest, checkProductStock)
])