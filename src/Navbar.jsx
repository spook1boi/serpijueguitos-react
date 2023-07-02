import React from 'react';
import logo from './/img/Serpiente.png';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto mr-2" />
            <span className="text-white text-lg font-semibold">SerpiJueguitos</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">

              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</a>

              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inventario</a>

              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Carrito</a>

              <CartWidget />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;