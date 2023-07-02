import Navbar from './Navbar'
import Footer from './Footer'
import ItemListContainer from './ItemListContainer'
import Saludo from './Saludo'




function App () {
  return (
    <>
      <Navbar />
      <Saludo greeting={'Bienvenido a SerpiJueguitos'}/>
      <ItemListContainer />
      <Footer />
    </>
  )
}


export default App
