import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../src/components/NavBar/Navbar'
import Footer from '../src/components/Footer/Footer'
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer'
// import Saludo from '../src/components/Saludo/Saludo'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Saludo greeting={'Bienvenido a SerpiJueguitos'}/> */}
      <Routes>
      <Route path='/' element ={<ItemListContainer />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App
