import elden from './/img/elden-ring.jpg';
import mw2 from './/img/mw2.jpg';
import tloz from './/img/tloz-totk.jpg';

function Cards (props) {
    return (
      <article>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded shadow-md p-4">

            <h3>{props.title}</h3>
            <img src={elden} alt="imagen" className="mb-4 rounded-lg" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <button>Agregar al carrito</button>

        </div>
        </div>

      </article>
    )
  }
  

  export default Cards