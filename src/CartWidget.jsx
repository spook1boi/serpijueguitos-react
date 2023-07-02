import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
  return (
    <div className='flex'>
        <FontAwesomeIcon icon={faShoppingCart} className="text-white text-xl cursor-pointer" />
        <p>0</p>
    </div>
  )
}

export default CartWidget