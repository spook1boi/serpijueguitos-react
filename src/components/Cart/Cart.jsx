import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if(totalQuantity === 0){
    return(
      <div className="max-w-2xl mx-auto py-8">
        <div>
          <h3>No hay productos en el carrito</h3>
          <Link to="/" className="text-blue-500 hover:underline">
            Volver a la tienda
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      { cart.map(p => <CartItem key={p.id} {...p}/> ) }

      <div className="flex justify-between items-center mt-4">
        <h3 className="text-lg font-semibold">Total: ${total}</h3>
        <button onClick={() => clearCart()} className="px-4 py-2 bg-red-500 text-white rounded-lg">Limpiar carrito</button>
      </div>

      <div className="mt-4">
        <Link to="/checkout" className="block text-center py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Checkout</Link>
      </div>

    </div>
  );
};

export default Cart;