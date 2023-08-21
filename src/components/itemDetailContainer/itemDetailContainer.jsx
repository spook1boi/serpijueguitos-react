import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig'; 
import ItemDetail from '../ItemDetail/ItemDetail';
import { CartContext } from '../Context/CartContext';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const juegosCollection = doc(db, 'juegos', id); 
      try {
        const productDoc = await getDoc(juegosCollection);
        if (productDoc.exists()) {
          setProduct(productDoc.data());
        } else {
          console.error('No existe el producto');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = (quantity) => {
    if (product) {
      addItem(product, quantity);
    }
  };

  return (
    <div className='ItemDetailContainer'>
      {product && <ItemDetail {...product} onAddToCart={handleAddToCart} />}
    </div>
  );
};

export default ItemDetailContainer;