import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../src/components/NavBar/Navbar'
import Footer from '../src/components/Footer/Footer'
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer';

// import Saludo from '../src/components/Saludo/Saludo';

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Saludo greeting={'Bienvenido a SerpiJueguitos'}/> */}
      <Routes>
      <Route path='/' element ={<ItemListContainer />}/>
      <Route path='/item/:id' element ={<ItemDetailContainer />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};


export default App;