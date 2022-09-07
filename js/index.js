let totalCompra = 0;

let productoSeleccionado = parseInt(prompt('Ingrese el producto deseado: 1.Smart TV 2.Heladera 3.Lavarropas 4.Cocina 5.Laptop 6.Iphone 7.Parlante 8.Microondas'));

seguirCompra = true;

let decision;

let carrito = [];


class Producto {
    constructor (nombre, id, precio){
        this.nombre = nombre
        this.id = id
        this.precio = precio
    }
};


const producto1 = new Producto("Smart TV", 1, 75000);

carrito.push(producto1);

const producto2 = new Producto("Heladera", 2, 70000);

carrito.push(producto2);

const producto3 = new Producto("Lavarropas", 3, 65000);

carrito.push(producto3);

const producto4 = new Producto("Cocina", 4, 45000);

carrito.push(producto4);

const producto5 = new Producto("Laptop", 5, 125000);

carrito.push(producto5);

const producto6 = new Producto("Iphone", 6, 175000);

carrito.push(producto6);

const producto7 = new Producto("Parlante", 7, 55000);

carrito.push(producto7);

const producto8 = new Producto("Microondas", 8, 35000);

carrito.push(producto8);



while(seguirCompra===true){

    const productoSolicitado = carrito.find( prod => prod.id === productoSeleccionado);

    if (productoSolicitado) {
            totalCompra = totalCompra + productoSolicitado.precio
    } else { parseInt ( prompt ("Ingresa un producto existente: 1.Smart TV 2.Heladera 3.Lavarropas 4.Cocina 5.Laptop 6.Iphone 7.Parlante 8.Microondas") )

    continue
    }

    decision = parseInt (prompt ("Queres agregar mas productos? 1.Si - 2.No") )

    if ( decision ===1) {
        productoSeleccionado = parseInt ( prompt ("Ingresa el numero del producto que desea adquirir: 1.Smart TV 2.Heladera 3.Lavarropas 4.Cocina 5.Laptop 6.Iphone 7.Parlante 8.Microondas") )

    } else if ( decision === 2) {
            seguirCompra = false
    }
};

alert('El valor total sin descuento ni impuestos es: ' + totalCompra);


class CalculadoraPrecioFinal {
    constructor(total){
        this.total = total;
    }

    calcularPrecioConDescuento(){
        let descuento = 0;

        if(this.total<=85000){
            descuento = 10

        } else if(this.total>86000 && this.total<=120000){
            descuento = 15

        } else {
            descuento = 20
        };
    
        let valorDescuento = this.total * (descuento / 100);

        let costo = this.total - valorDescuento;
    
        return costo
    }

    calculadoraConImpuestos(){
        const PrecioConDescuento = this.calcularPrecioConDescuento()

        const impuestos = PrecioConDescuento * (21 / 100)

        const final = PrecioConDescuento + impuestos

        return final
    }
}

// Se muestra el Total a Pagar en la consola

const calculadora = new CalculadoraPrecioFinal(totalCompra);

console.log(calculadora.calculadoraConImpuestos());