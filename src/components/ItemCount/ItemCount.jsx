import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div className="flex items-center mt-4">
      <button className="bg-blue-500 text-white px-3 py-1 rounded-md" onClick={handleDecrement}>
        -
      </button>

      <span className="mx-2">{count}</span>
      <button className="bg-blue-500 text-white px-3 py-1 rounded-md" onClick={handleIncrement}>
        +
      </button>

      <button className="ml-4 bg-green-500 text-white px-4 py-2 rounded-md" onClick={handleAddToCart}>
        Agregar al carrito
      </button>

    </div>
  );
};

export default ItemCount;