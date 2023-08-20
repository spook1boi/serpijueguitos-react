import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/NavBar/Navbar';
import Footer from '../src/components/Footer/Footer';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer';
import CategoryList from '../src/components/CategoryList/CategoryList';
import Cart from '../src/components/Cart/Cart';
import { CartProvider } from '../src/components/Context/CartContext';
import { db } from './services/firebase/firebaseConfig';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      
        <Navbar />
        <div className="mt-8">
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            {/* Ruta alternativa para categoria */}
            <Route path='/category/:category' element={<CategoryList />} />
            <Route path='/Cart' element={<Cart />} /> 
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </div>

        <div className="mt-8">
          <Footer />
        </div>

      </CartProvider>
    </BrowserRouter>
  );
}

export default App;