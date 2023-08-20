const products = [
    {
    id: "0001",
    nombre: "Elden Ring",
    category: "Aventura",
    descripcion: "Déjate guiar por la gracia para esgrimir el poder del Elden Ring y convertirte en un Señor de Elden en las Tierras Intermedias.",
    caracteristica: "Mundo abierto, acción y aventura",
    precio: 43000,
    lanzamiento: "25 de Febrero de 2022",
    img: require('../public/img/elden-ring.jpg'),
    img2: require('../public/img/elden-ring-2.jpg'),
    stock: 999999,
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
    img2: require('../src/components/img/street-fighter-2.jpg'),
    stock: 999999,
    },

    { 
    id: "0003",
    nombre: "STAR WARS Jedi: Survivor",
    category: "Aventura",
    descripcion: "La historia de Cal Kestis continúa en STAR WARS Jedi: Survivor, un juego de acción en tercera persona de proporciones galácticas.",
    caracteristica: "Mundo abierto, acción y aventura",
    precio: 20990,    
    lanzamiento:"28 de Abril del 2023",
    img: require('../src/components/img/sw-jedisurv.jpg'),
    img2: require('../src/components/img/sw-jedisurv-2.jpg'),
    stock: 999999,
    },

    {
    id: "0004",
    nombre: "Call of Duty: Modern Warfare II",
    category: "FPS",
    descripcion: "En Call of Duty: Modern Warfare® II, los jugadores se verán inmersos en un conflicto a escala global sin precedentes",
    caracteristica: "First person shooter, multijugador y disparos",
    precio: 54990,    
    lanzamiento:"28 de Octubre del 2022",
    img: require('../src/components/img/mw2.jpg'),
    img2: require('../src/components/img/mw2-2.jpg'),
    stock: 999999,
    },

    {
    id: "0005",
    nombre: "Remnant II",
    category: "Aventura",
    descripcion: "Enfrenta a los supervivientes de la humanidad contra nuevas criaturas mortíferas y jefes divinos en mundos aterradores.",
    caracteristica: " Tipo 'Dark Souls', acción y aventura",
    precio: 28500,
    lanzamiento:"25 de Julio de 2023",
    img: require('../src/components/img/remnant2.jpg'),
    img2: require('../src/components/img/remnant2-2.jpg'),
    stock: 999999,
    },

    {
    id: "0006",
    nombre: "The Legend Of Zelda: Tears Of The Kingdom",
    category: "Aventura",
    descripcion: "En esta secuela, decidirás tu propio camino a través de los extensos paisajes de Hyrule y las islas que flotan en los vastos cielos.",
    caracteristica: "Mundo abierto, acción y aventura",
    precio: 72900,
    lanzamiento:"12 de mayo de 2023",
    img: require('../src/components/img/tloz-totk.jpg'),
    img2: require('../src/components/img/tloz-totk-2.jpg'),
    stock: 999999,
    },
    
    {
    id: "0007",
    nombre: "Mortal Kombat 1",
    category: "Lucha",
    descripcion: "Descubre un nuevo universo de Mortal Kombat creado por Liu Kang, Dios del Fuego.",
    caracteristica: "Lucha, violento y sangriento",
    precio: 40900,
    lanzamiento:"19 de Septiembre del 2023",
    img: require('../src/components/img/mortalkombat1.jpg'),
    img2: require('../src/components/img/mortalkombat1-2.jpg'),
    stock: 999999,
    },

    {
    id: "0008",
    nombre: "Tom Clancy's Rainbow Six: Siege",
    category: "FPS",
    descripcion: "Shooter táctico realista por equipos donde una cuidadosa planificación y ejecución son claves para la victoria.",
    caracteristica: "First person shooter, multijugador y cooperativo en linea",
    precio: 54990,
    lanzamiento:"1 de Diciembre del 2015",
    img: require('../src/components/img/rainbowSixSiege.png'),
    img2: require('../src/components/img/rainbowSixSiege-2.jpg'),
    stock: 999999,
    },
    
    {
      id: "0009",
      nombre: "Blasphemous 2",
      category: "Aventura",
      descripcion: "El Penitente se despierta una vez más para librar una lucha sin fin contra el Milagro en Blasphemous 2.",
      caracteristica: "Metroidvania, plataformas 2D y aventura",
      precio: 23900,
      lanzamiento:"24 de Agosto del 2023",
      img: require('../src/components/img/blasphemous2.jpg'),
      img2: require('../src/components/img/blasphemous2-2.jpg'),
      stock: 999999,
    },

    {
      id: "0010",
      nombre: "Hollow Knight: Silksong",
      category: "Aventura",
      descripcion: "La secuela de la galardonada aventura de acción. Explora, lucha y sobrevive mientras asciendes a la cima de una tierra gobernada por Silk y Song.",
      caracteristica: "Metroidvania, plataformas 2D y aventura",
      precio: 23490,
      lanzamiento:"Por confirmarse",
      img: require('../src/components/img/silksong.jpg'),
      img2: require('../src/components/img/silksong-2.jpg'),
      stock: 999999,
    },

    {
      id: "0011",
      nombre: "Battlefield V",
      category: "FPS",
      descripcion: "Vive el mayor conflicto de la humanidad con un completo arsenal de armas, vehículos y dispositivos tecnológicos.",
      caracteristica: "First person shooter, multijugador y disparos",
      precio: 39900,
      lanzamiento:"9 de Noviembre de 2018",
      img: require('../src/components/img/battelfieldV.jpg'),
      img2: require('../src/components/img/battlefieldV-2.jpg'),
      stock: 999999,
    },

    {
      id: "00012",
      nombre: "Mortal Kombat 11",
      category: "Lucha",
      descripcion: "Mortal Kombat ha regresado mejor que nunca en esta entrega de la icónica saga.",
      caracteristica: "Lucha, violento y sangriento",
      precio: 37999,
      lanzamiento:"19 de Septiembre del 2023",
      img: require('../src/components/img/mortalkombat11.jpg'),
      img2: require('../src/components/img/mortalkombat11-2.jpg'),
      stock: 999999,
    },
    
    {
      id: "0013",
      nombre: "Hunt: Showdown",
      category: "FPS",
      descripcion: "Elimina monstruos de pesadilla, mientras compites por las recompensas que te llevarán a alcanzar la gloria, el equipo y el oro en esta experiencia multijugador online implacable e inolvidable.",
      caracteristica: "First person shooter, mundo abierto y multijugador",
      precio: 18900,
      lanzamiento:"27 de Agosto de 2019",
      img: require('../src/components/img/huntshowdown.jpg'),
      img2: require('../src/components/img/huntshowdown-2.jpg'),
      stock: 999999,
    },
    
    {
      id: "0014",
      nombre: "Cyberpunk 2077",
      category: "FPS",
      descripcion: "RPG de aventura y acción de mundo abierto ambientado en el futuro sombrío de Night City, una peligrosa megalópolis obsesionada con el poder, el glamur y las incesantes modificaciones corporales.",
      caracteristica: "First person shooter, mundo abierto y rol",
      precio: 39999,
      lanzamiento:"9 de Diciembre de 2020",
      img: require('../src/components/img/cyberpunk.jpg'),
      img2: require('../src/components/img/cyberpunk-2.jpg'),
      stock: 999999,
    },

    {
      id: "0015",
      nombre: "Metro Exodus",
      category: "FPS",
      descripcion: "Huye de las ruinas devastadas del metro de Moscú y embárcate en un viaje épico por todo el continente en las estepas de la Rusia postapocalíptica.",
      caracteristica: "First person shooter, postapocalictico y mundo abierto",
      precio: 17249,
      lanzamiento:"14 de Febrero de 2019",
      img: require('../src/components/img/metroexodus.jpg'),
      img2: require('../src/components/img/metroexodus-2.jpg'),
      stock: 999999,
    },

    {
      id: "0016",
      nombre: "Dragon Ball FighterZ",
      category: "Lucha",
      descripcion: "DRAGON BALL FighterZ nace de lo que hace a la serie DRAGON BALL tan famosa: luchas espectaculares e interminables con luchadores superpoderosos.",
      caracteristica: "Lucha, jugador contra jugador y anime",
      precio: 38499,
      lanzamiento: "26 de Enero del 2018",
      img: require('../src/components/img/dbfighterz.jpg'),
      img2: require('../src/components/img/dbfighterz-2.jpg'),
      stock: 999999,
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
