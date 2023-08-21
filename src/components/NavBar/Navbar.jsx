import React, { useState } from 'react';
import logo from '../../logo/Serpiente.png';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router-dom';

const categories = ['Aventura', 'FPS', 'Lucha'];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCategoryFilter = () => {
    setShowDropdown((prevState) => !prevState);
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to={`/serpijueguitos-react`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
              <span className="text-white text-lg font-semibold">SerpiJueguitos</span>
            </div>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <section className="ml-10 flex items-baseline space-x-4">
                <NavLink to={`/serpijueguitos-react`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                  <div className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Inicio</div>
                </NavLink>

                <div className="relative">
                  <div className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${showDropdown ? 'border-b-2 border-white' : ''}`}onClick={handleCategoryFilter}>
                    Categorías
                  </div>
                  {showDropdown && (
                    <div className="absolute z-10 bg-gray-800 mt-2 py-2 w-36 rounded-md">
                      {categories.map(category => (
                        <NavLink key={category} to={`/category/${category}`} className="block px-4 py-2 text-sm text-white hover:bg-gray-700">{category}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>

                <NavLink to={`/cart`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                  <div className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Carrito</div>
                </NavLink>

                <NavLink to={`/cart`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                  <CartWidget />
                </NavLink>
              </section>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;