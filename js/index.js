let productos = [];

let carrito = [];

class Producto {
    constructor (nombre, id, precio, img){
        this.nombre = nombre
        this.id = id
        this.precio = precio
        this.img = img
    }

};


let producto1 = new Producto("Smart TV", 1, 75000, './img/producto1.jpg');

let producto2 = new Producto("Heladera", 2, 70000, './img/producto2.jpg');

let producto3 = new Producto("Lavarropas", 3, 65000, './img/producto3.jpg');

let producto4 = new Producto("Cocina", 4, 45000, './img/producto4.jpg');

let producto5 = new Producto("Laptop", 5, 125000, './img/producto5.jpg');

let producto6 = new Producto("Iphone", 6, 175000, './img/producto6.jpg');

let producto7 = new Producto("Parlante", 7, 55000, './img/producto7.jpg');

let producto8 = new Producto("Aire Acondicionado", 8, 150000, './img/producto8.jpg');

productos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8);