import { useState, useEffect } from 'react'
import api from '../../services/api';

import { IProduct } from '../../store/modules/cart/types';
import CatalogItem from './catalogItem';

const Catalog = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get('products')

        setCatalog(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    getProducts()
  }, [])


  return (
    <div>
      <h1>Catalog</h1>

      {catalog.map(product => (
        <CatalogItem
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default Catalog;