import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ nombre, descripcion, caracteristica, precio, lanzamiento, img, img2, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleAddToCart = (quantity) => {
    setQuantityAdded(quantity);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2">
          <img src={img} alt={nombre} className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:ml-8 mt-4 md:mt-0">
          <h2 className="text-3xl font-semibold mb-4">{nombre}</h2>
          <p className="text-gray-700 text-lg mb-6">{descripcion}</p>
          <p className="text-gray-600 text-lg mb-4">Características: {caracteristica}</p>
          <p className="text-gray-600 text-lg mb-4">Lanzamiento: {lanzamiento}</p>
          <p className="text-2xl font-bold mb-2">Precio: ${precio}</p>

          <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} />
          {quantityAdded > 0 && (
            <Link to="/cart" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full inline-block mt-4">
              Ir al carrito
            </Link>
          )}

          <Link to="/" className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-full inline-block mt-2">
            Volver a catálogo
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <img src={img2} alt={nombre} className="w-full rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default ItemDetail;