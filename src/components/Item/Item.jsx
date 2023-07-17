import './Item.css'
import { img } from'../../img'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {

    return (
      <article className='CardItem'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded shadow-md p-4">

            <h3>{nombre}</h3>

            <picture>
            <img src={img[0]} alt={nombre} className="mb-4 rounded-lg" />
            </picture>

            <section>
              <p className='Info'>
                Precio: ${precio}
              </p>
              
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              </p>

              <p>
                <Link to={`/item/${id}`} className='option'>Ver mas</Link>
              </p>

            </section>
            
            <button>Agregar al carrito</button>

        </div>
        </div>

      </article>
    )
  }
  

  export default Item