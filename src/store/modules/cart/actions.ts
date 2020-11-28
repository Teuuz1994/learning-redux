import { ActionTypes, IProduct } from "./types";

export function addProducToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductToCardRequest,
    payload: { // payload geralmente é o retorno de uma action
      product
    }
  }
}

export function addProducToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCardSuccess,
    payload: {
      product
    }
  }
}

export function addProducToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProductToCardFailure,
    payload: {
      productId
    }
  }
}