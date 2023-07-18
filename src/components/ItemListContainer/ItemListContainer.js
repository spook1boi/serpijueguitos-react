import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../Products';
import ItemList from '../ItemList/ItemList';

import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([])

  const { categoryById } = useParams ()

  useEffect(() => {
    const asyncFunc = categoryById ? getProductsByCategory : getProducts

    asyncFunc(categoryById)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
  },[categoryById]);

  return (
    <div>
      <ItemList products={products} />
    </div>
    
  );
};


export default ItemListContainer;