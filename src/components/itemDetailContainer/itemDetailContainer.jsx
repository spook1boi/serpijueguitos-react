import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig'; 
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

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

  return (
    <div className='ItemDetailContainer'>
      {product && <ItemDetail {...product} />}
    </div>
  );
};

export default ItemDetailContainer;