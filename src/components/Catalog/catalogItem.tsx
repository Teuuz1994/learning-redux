import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../../store';

import { addProducToCartRequest } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/cart/types';

interface CatalogItemProps {
  product: IProduct
}

const CatalogItem: FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id)
  })

  const handleAddProductToCart = () => {
    dispatch(addProducToCartRequest(product))
  }

  return (
    <article>
      <strong>{product.title}</strong>{' - '}
      <span>{product.price}</span>{'  '}

      <button
        type="button"
        onClick={handleAddProductToCart}
      >
        Comprar
      </button>

      {hasFailedStockCheck &&
        <span style={{ color: 'red' }}>Falta de estoque!</span>
      }
    </article>
  )
}

export default CatalogItem;