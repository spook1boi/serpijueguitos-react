import React from 'react';
import logo from '../img/Serpiente.png';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

        <Link to={`/`} className= {({ isActive })=> isActive ?'ActiveOption' : 'Option'}>
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
            <span className="text-white text-lg font-semibold">SerpiJueguitos</span>
          </div>
        </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <section className="ml-10 flex items-baseline space-x-4">

                <NavLink to={`/`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                  <div className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Inicio</div>
                </NavLink>

                <NavLink to={`/category/:categoryId`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                  <div className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Categorias</div>
                </NavLink>
                
                <NavLink to={`/carrrito`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                  <div className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Carrito</div>
                </NavLink>

                <NavLink to={`/carrrito`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
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
