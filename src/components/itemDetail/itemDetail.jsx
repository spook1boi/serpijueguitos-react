import React from 'react';

const ItemDetail = ({ nombre, descripcion, caracteristica, precio, lanzamiento, img, img2 }) => {
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
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md">
            Comprar ahora
          </button>
        </div>
      </div>
      <div className="mt-8">
        <img src={img2} alt={nombre} className="w-full rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default ItemDetail;