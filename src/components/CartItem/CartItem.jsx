import React from "react";

const CartItem = ({ id, nombre, cantidad, precio, imagen }) => {
  return (
    <div className="flex items-center space-x-4 border-b py-4">
      <img src={imagen} alt={nombre} className="w-16 h-16 rounded-lg" />
      <div>
        <h4 className="text-lg font-semibold">{nombre}</h4>
        <p>id: {id}</p>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: ${precio}</p>
      </div>
    </div>
  );
};

export default CartItem;