const misProductos = [
    { id: "1", nombre: "Guardapolvo Blanco", precio: 500, img: "../assets/escuela-guardapolvo-m.jpg", idCat:"1" },
    { id: "2", nombre: "Guardapolvo Azul", precio: 200, img: "../assets/escuela-guardapolvo-h.jpg", idCat:"1" },
    { id: "3", nombre: "Jumper", precio: 180, img: "../assets/escuela-jumper.jpg", idCat:"2" },
    { id: "4", nombre: "Buzo", precio: 900, img: "../assets/escuela-buzo.jpg", idCat:"3" },
    { id: "5", nombre: "Pantalon", precio: 900, img: "../assets/escuela-pantalon.jpg", idCat:"3" },
    { id: "6", nombre: "Remera", precio: 900, img: "../assets/escuela-remera.jpg", idCat:"3" },
    { id: "7", nombre: "Campera", precio: 900, img: "../assets/escuela-campera.jpg", idCat:"3" },
    { id: "8", nombre: "Pollera", precio: 900, img: "../assets/escuela-pollera.jpg", idCat:"2" },
]


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


//Creamos una nueva función similar a la anterior pero que nos retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })
}


//Creamos una función que retora un array de una determinada categoría de producto: 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
}