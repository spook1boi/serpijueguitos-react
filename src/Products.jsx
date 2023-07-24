const products = [
    {
    id: "0001",
    nombre: "Elden Ring",
    category: "Aventura",
    descripcion: "Déjate guiar por la gracia para esgrimir el poder del Elden Ring y convertirte en un Señor de Elden en las Tierras Intermedias.",
    caracteristica: "Mundo abierto, acción y aventura",
    precio: 43000,
    lanzamiento: "25 de febrero de 2022",
    img: require('../src/components/img/elden-ring.jpg'),
    img2: require('../src/components/img/elden-ring-2.jpg'),
    },
    {

    id: "0002",
    nombre: "Street Fighter 6",
    category: "Lucha",
    descripcion: "¡Aquí llega el peso pesado de Capcom! Incluye tres modos de juego: World Tour, Fighting Ground y Battle Hub.",
    caracteristica: "Lucha, acción y jugador contra jugador",
    precio: 49900,
    lanzamiento: "2 de Junio del 2023",
    img: require('../src/components/img/street-fighter.jpg'),
    img2: require('../src/components/img/street-fighter-2.jpg')
    },
    {
    
    id: "0003",
    nombre: "STAR WARS Jedi: Survivor",
    category: "Aventura",
    descripcion: "La historia de Cal Kestis continúa en STAR WARS Jedi: Survivor, un juego de acción en tercera persona de proporciones galácticas.",
    caracteristica: "Mundo abierto, acción y aventura",
    precio: 20990,    
    lanzamiento:"28 de abril del 2023",
    img: require('../src/components/img/sw-jedisurv.jpg'),
    img2: require('../src/components/img/sw-jedisurv-2.jpg')
    },
    {
    
    id: "0004",
    nombre: "Call of Duty: Modern Warfare II",
    category: "FPS",
    descripcion: "En Call of Duty: Modern Warfare® II, los jugadores se verán inmersos en un conflicto a escala global sin precedentes",
    caracteristica: "First person shooter, multijugador y disparos",
    precio: 54990,    
    lanzamiento:"28 de octubre del 2022",
    img: require('../src/components/img/mw2.jpg'),
    img2: require('../src/components/img/mw2-2.jpg')
    },
    {
    
    id: "0005",
    nombre: "Remnant II",
    category: "Aventura",
    descripcion: "Enfrenta a los supervivientes de la humanidad contra nuevas criaturas mortíferas y jefes divinos en mundos aterradores.",
    caracteristica: " Tipo 'Dark Souls', acción y aventura",
    precio: 28500,
    lanzamiento:"25 de julio de 2023",
    img: require('../src/components/img/remnant2.jpg'),
    img2: require('../src/components/img/remnant2-2.jpg')
    },
    {
    
    id: "0006",
    nombre: "The Legend Of Zelda: Tears Of The Kingdom",
    category: "Aventura",
    descripcion: "En esta secuela, decidirás tu propio camino a través de los extensos paisajes de Hyrule y las islas que flotan en los vastos cielos.",
    caracteristica: "Mundo abierto, acción y aventura",
    precio: 72900,
    lanzamiento:"",
    img: require('../src/components/img/tloz-totk.jpg'),
    img2: require('../src/components/img/tloz-totk-2.jpg')
    },
    {

    id: "0007",
    nombre: "Mortal Kombat 1",
    category: "Lucha",
    descripcion: "Mortal Kombat ha regresado mejor que nunca en esta entrega de la icónica saga.",
    caracteristica: "Lucha, violento y sangriento",
    precio: 40900,
    lanzamiento:"19 de septiembre del 2023",
    img: require('../src/components/img/MortalKombat1.jpg'),
    img2: require('../src/components/img/MortalKombat1-2.jpg')
    },
        {
    
    id: "0008",
    nombre: "Tom Clancy's Rainbow Six: Siege",
    category: "FPS",
    descripcion: "Shooter táctico realista por equipos donde una cuidadosa planificación y ejecución son claves para la victoria.",
    caracteristica: "First person shooter, multijugador y cooperativo en linea",
    precio: 54990,
    lanzamiento:"1 de dicimbre del 2015",
    img: require('../src/components/img/rainbowSixSiege.png'),
    img2: require('../src/components/img/rainbowSixSiege-2.jpg')
    },
    
    
    ]
    
    export const getProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 500);
      });
    };
    
    export const getProductsByCategory = (category) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const filteredProducts = products.filter((product) => product.category === category);
          resolve(filteredProducts);
        }, 500);
      });
    };
    
    export const getProductById = (id) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const product = products.find((product) => product.id === id);
          resolve(product);
        }, 500);
      });
    };

  export default products;
