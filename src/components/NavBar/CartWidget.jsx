import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <Link to='/cart' className= 'CartWidget'>
      <div className='flex'>
      <FontAwesomeIcon icon={faShoppingCart} className="text-white text-xl cursor-pointer" />
      <span className='text-white'>{cartQuantity}</span>
      </div>
      </Link>
  )
}


export default CartWidget;