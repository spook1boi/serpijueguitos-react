import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../Products';
import Item from '../Item/Item';

const CategoryList = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      getProductsByCategory(category)
        .then(response => {
          setProducts(response);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      getProducts()
        .then(response => {
          setProducts(response);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [category]);

  return (
    <div className="CategoryList">
      {products.map(product => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};

export default CategoryList;