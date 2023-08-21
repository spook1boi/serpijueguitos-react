import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState('');

  const { cart, clearCart, total } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: cart,
      total: total(),
    };

    const pedidosRef = collection(db, 'pedidos');

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      clearCart();
    });
  };

  return (
    <div className="container mx-auto mt-8">
      {pedidoId ? (
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">¡Muchas gracias por tu compra!</h1>
          <p className="text-lg">Tu número de pedido es: {pedidoId}</p>
        </div>
      ) : (
        <div className="w-full max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold mb-4">Finalizar compra</h1>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingresa tu nombre"{...register('nombre')} className="input"/>
            <input type="email" placeholder="Ingresa tu e-mail"{...register('email')} className="input"/>
            <input type="tel" placeholder="Ingresa tu teléfono"{...register('telefono')} className="input"/>

            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg" type="submit">
              Comprar
            </button>
            
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;