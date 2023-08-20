import React from 'react';
import logo from '../../logo/Serpiente.png';

const Footer = () => {
    return (
      <footer className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid place-items-center">
          <img src={logo} alt="SerpiJueguitos" className="h-8 w-auto mb-2" />
          <p className="text-gray-300 text-sm">© 2023 SerpiJueguitos. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;