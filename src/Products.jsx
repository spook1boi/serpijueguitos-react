const products = [{
    id: "0001",
    nombre: "Elden Ring",
    category: "Aventura",
    descripcion: "Déjate guiar por la gracia para esgrimir el poder del Elden Ring y convertirte en un Señor de Elden en las Tierras Intermedias.",
    caracteristica: "",
    precio: 43000,
    img: require('../src/components/img/elden-ring.jpg')
    },
    {

    id: "0002",
    nombre: "Street Fighter 6",
    category: "Lucha",
    descripcion: "¡Aquí llega el peso pesado de Capcom! Incluye tres modos de juego: World Tour, Fighting Ground y Battle Hub.",
    caracteristica: "",
    precio: 49900,
    img: require('../src/components/img/street-fighter.jpg')
    },
    {
    
    id: "0003",
    nombre: "STAR WARS Jedi: Survivor",
    category: "Aventura",
    descripcion: "La historia de Cal Kestis continúa en STAR WARS Jedi: Survivor, un juego de acción en tercera persona de proporciones galácticas.",
    caracteristica: "",
    precio: 20990,
    img: require('../src/components/img/sw-jedisurv.jpg')
    },
    {
    
    id: "0004",
    nombre: "Call of Duty: Modern Warfare II",
    category: "FPS",
    descripcion: "En Call of Duty: Modern Warfare® II, los jugadores se verán inmersos en un conflicto a escala global sin precedentes",
    caracteristica: "",
    precio: 54990,
    img: require('../src/components/img/mw2.jpg')
    },
    {
    
    id: "0005",
    nombre: "Remnant II",
    category: "Aventura",
    descripcion: "Enfrenta a los supervivientes de la humanidad contra nuevas criaturas mortíferas y jefes divinos en mundos aterradores.",
    caracteristica: "",
    precio: 28500,
    img: require('../src/components/img/remnant2.jpg')
    },
    {
    
    id: "0006",
    nombre: "The Legend Of Zelda: Tears Of The Kingdom",
    category: "Aventura",
    descripcion: "En esta secuela, decidirás tu propio camino a través de los extensos paisajes de Hyrule y las islas que flotan en los vastos cielos.",
    caracteristica: "",
    precio: 72900,
    img: require('../src/components/img/tloz-totk.jpg')
    },
    {

    id: "0007",
    nombre: "Mortal Kombat 11",
    category: "Lucha",
    descripcion: "Mortal Kombat ha regresado mejor que nunca en esta entrega de la icónica saga.",
    caracteristica: "",
    precio: 47900,
    img: require('../src/components/img/mortalKombat11.jpg')
    },
        {
    
    id: "0008",
    nombre: "Tom Clancy's Rainbow Six: Siege",
    category: "FPS",
    descripcion: "Shooter táctico realista por equipos donde una cuidadosa planificación y ejecución son claves para la victoria.",
    caracteristica: "",
    precio: 54990,
    img: require('../src/components/img/rainbowSixSiege.png')
    },
    
    
    ]
    
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      }, 500)
    })
  }  

  export const getProductsByCategory = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      }, 500)
    })
  }  

  export const getProductById = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      }, 500)
    })
  }  

  export default products;
