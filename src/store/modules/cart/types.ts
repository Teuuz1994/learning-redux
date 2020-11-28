// O "num" é um tipo de tipagem que guarda um valor
// neste caso aqui estou guardando o nome das actions do carrinho
export enum ActionTypes {
  addProductToCardRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductToCardSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCardFailure = 'ADD_PRODUCT_TO_CART_FAILURE'
}

export interface IProduct {
  id: number
  title: string
  price: number
}

export interface ICardItem {
  product: IProduct
  quantity: number
}

export interface ICartState {
  items: ICardItem[]
  failedStockCheck: number[]
}