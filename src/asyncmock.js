const misProductos = [
    { id: 1, nombre: "Guardapolvo Blanco", precio: 500, img: "./assets/escuela-guardapolvo-m.jpg" },
    { id: 2, nombre: "Guardapolvo Azul", precio: 200, img: "./assets/escuela-guardapolvo-h.jpg" },
    { id: 3, nombre: "Jumper", precio: 180, img: "./assets/escuela-jumper.jpg" },
    { id: 4, nombre: "Buzo", precio: 900, img: "./assets/escuela-buzo.jpg" },
    { id: 5, nombre: "Pantalon", precio: 900, img: "./assets/escuela-pantalon.jpg" },
    { id: 6, nombre: "Pollera", precio: 900, img: "./assets/escuela-pollera.jpg" },
    { id: 7, nombre: "Campera", precio: 900, img: "./assets/escuela-campera.jpg" },
    { id: 8, nombre: "Remera", precio: 900, img: "./assets/escuela-remera.jpg" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    })
}