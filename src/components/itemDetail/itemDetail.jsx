import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../Products';

const ItemDetail = ({ products }) => {
  const { id } = useParams();

  if (!products) {
    return <div>Cargando productos...</div>;
  }

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }
};

export default ItemDetail;