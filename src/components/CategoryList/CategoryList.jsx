import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import Item from '../Item/Item';

const CategoryList = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const juegosCollection = collection(db, 'juegos');
      let productsQuery;

      if (category) {
        productsQuery = query(juegosCollection, where('category', '==', category));
      } else {
        productsQuery = query(juegosCollection);
      }

      try {
        const querySnapshot = await getDocs(productsQuery);
        const productsData = querySnapshot.docs.map(doc => doc.data());
        setProducts(productsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="CategoryList grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {products.map(product => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};

export default CategoryList;
