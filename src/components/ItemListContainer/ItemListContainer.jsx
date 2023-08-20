import React from 'react';
import ItemList from '../ItemList/ItemList';
import { db } from '../../services/firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const juegosCollection = collection(db, 'juegos'); // Use 'juegos' collection
      try {
        const querySnapshot = await getDocs(juegosCollection);
        const productsData = querySnapshot.docs.map(doc => doc.data());
        setProducts(productsData);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return <ItemList products={products} loading={loading} />;
};

export default ItemListContainer;

