import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/NavBar/Navbar';
import Footer from '../src/components/Footer/Footer';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer';
import CategoryList from '../src/components/CategoryList/CategoryList';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        {/* Ruta alternativa para categoria */}
        <Route path='/category/:category' element={<CategoryList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;