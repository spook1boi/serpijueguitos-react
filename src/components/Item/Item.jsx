import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, descripcion, precio, img }) => {

  return (
    <article className="CardItem bg-white p-6 rounded-lg shadow-md">
      <header>
        <h3 className="text-xl font-semibold">{nombre}</h3>
      </header>
      <Link to={`/item/${id}`} className="text-blue-500 hover:underline">
        <picture className="mt-4">
        <img src={img} alt={nombre} className="mt-4 rounded-lg" />
        </picture>
      </Link>

      <section className="mt-4">
        <p className="text-gray-700 mt-2">Precio: ${precio}</p>

        <p className="text-gray-600 mt-2">{descripcion}</p>

        <p className="mt-4">
          <Link to={`/item/${id}`} className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-lg shadow-md">
            Ver más
          </Link>
        </p>
      </section>
    </article>
  );
}

export default Item;
