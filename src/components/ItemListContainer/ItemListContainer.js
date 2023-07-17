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
    
    // <main className="container mx-auto py-4">

    //         <h2 className="text-xl font-semibold mb-2">Catalogo</h2>
    //         <Cards title='Card 1' src='../img/elden-ring.jpg' />
    //         <Cards title='Card 2' src='../img/mw2.jpg' />
    //         <Cards title='Card 3' src='../img/tloz-totk.jpg' />

    // </main>
  );
};


export default ItemListContainer;