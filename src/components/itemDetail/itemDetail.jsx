import React from 'react';

const ItemDetail = (props) => {
  const { id, nombre, caracteristica, precio } = props;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">{nombre}</h2>
      <p className="text-gray-600 mb-2">ID: {id}</p>
      <p className="text-gray-700 mb-2">Precio: ${precio}</p>
      <p className="text-gray-700">Caracteristica: {caracteristica}</p>
    </div>
  );
};

export default ItemDetail;
