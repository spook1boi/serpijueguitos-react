import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  const handleClear = () => {
    clearCart();
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-4">Carrito de Compras</h1>

      {cart.length > 0 ? (
        <div className="grid gap-4">
          {cart.map((prod) => (
            <div key={prod.id} className="border p-4 rounded-md shadow-md flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{prod.nombre}</h3>
                <p>Precio unitario: ${prod.precio}</p>
                <p>Precio total: ${prod.precio * prod.quantity}</p>
                <p>Cantidad: {prod.quantity}</p>
              </div>
            </div>
          ))}
          <h2 className="text-xl font-semibold mt-4">
            Precio Total: ${total()}
          </h2>
          <button onClick={handleClear} className="px-4 py-2 bg-red-500 text-white rounded-lg">
            Vaciar Carrito
          </button>
          <Link to="/checkout" className="block text-center py-2 px-4 bg-blue-500 text-white rounded-lg mt-4 hover:bg-blue-600">
            Finalizar Compra
          </Link>
        </div>
      ) : (
        <h2 className="text-lg mt-4">El carrito está vacío</h2>
      )}
    </div>
  );
};

export default Cart;