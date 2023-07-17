const products = [{
    id: "0001",
    nombre: "Elden Ring",
    category: "Aventura",
    descripcion: "Catalogado como mejor juego del año 2022, ofrece parajes de fantasia y sombrias mazmorras.",
    precio: 43000,
    //descuento: 5000,
    img: "../img/elden-ring.jpg"
    },
    {

    id: "0002",
    nombre: "Street Fighter 6",
    category: "Lucha",
    descripcion: "#",
    precio: 49900,
    //descuento: 10000,
    img: "../img/street-fighter.jpg"
    },
    {
    
    id: "0003",
    nombre: "STAR WARS Jedi: Survivor",
    category: "Aventura",
    descripcion: "#",
    precio: 20990,
    //descuento: 5000,
    img: "../img/sw-jedisurv.jpg"
    },
    {
    
    id: "0004",
    nombre: "Call of Duty: Modern Warfare II",
    category: "FPS",
    descripcion: "Adquiere uno de los juegos mas esperados del año.",
    precio: 54990,
    //descuento: 3000,
    img: "../img/mw2.jpg"
    },
    {
    
    id: "0005",
    nombre: "Remnant II",
    category: "Aventura",
    descripcion: "#",
    precio: 28500,
    //descuento: 3000,
    img: "../img/remnant2.jpg"
    },
    {
    
    id: "0006",
    nombre: "The Legend Of Zelda: Tears Of The Kingdom",
    category: "Aventura",
    descripcion: "#",
    precio: 72900,
    //descuento: 3000,
    img: "../img/tloz-totk.jpg"
    },
    {

    id: "0007",
    nombre: "Mortal Kombat 11",
    category: "Lucha",
    descripcion: "#",
    precio: 47900,
    //descuento: #,
    img: "../img/mortalKombat11.jpg"
    },
        {
    
    id: "0008",
    nombre: "Tom Clancy's Rainbow Six: Siege",
    category: "FPS",
    descripcion: "#",
    precio: 54990,
    //descuento: #,
    img: "../img/rainbowSixSiege.png"
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

  export default products;
