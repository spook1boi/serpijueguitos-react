import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to='/cart' className= 'CartWidget'>
      <div className='flex'>
      <FontAwesomeIcon icon={faShoppingCart} className="text-white text-xl cursor-pointer" />
      <p className='text-white'>{totalQuantity}</p>
      </div>
      </Link>
  )
}




export default CartWidget;