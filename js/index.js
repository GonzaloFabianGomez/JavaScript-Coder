let totalCompra = 0
let productoSeleccionado = parseInt(prompt("Ingresa el numero del producto que desea adquirir: 1.Led TV - 2.Heladera - 3.Lavarropas - 4.Aire Acondicionado"))
let seguirCompra = true
let decision

while(seguirCompra===true){
    if(productoSeleccionado===1){
        totalCompra = totalCompra + 55000
    } else if(productoSeleccionado===2){
        totalCompra = totalCompra + 70000
    } else if(productoSeleccionado===3){
        totalCompra = totalCompra + 65000
    } else if(productoSeleccionado===4){
        totalCompra = totalCompra + 85000
    } else{
        productoSeleccionado = parseInt(prompt("Ingresa un producto existente: 1.Led TV - 2.Heladera - 3.Lavarropas - 4.Aire Acondicionado"))
        continue
    }

    decision = parseInt(prompt("Queres agregar mas productos? 1.Si - 2.No"))
        if(decision===1){
            productoSeleccionado = parseInt(prompt("Ingresa el numero del producto que desea adquirir: 1.Led TV - 2.Heladera - 3.Lavarropas - 4.Aire Acondicionado"))
        } else if(decision===2){
            seguirCompra = false
        }
}

alert("Subtotal: "+totalCompra)

function PrecioConDescuento(costo){
    let descuento = 0

    if(costo<=85000){
        descuento = 10
    } else if(costo>86000 && costo<=120000){
        descuento = 15
    } else {
        descuento = 20
    }

    let valorDescuento = costo * (descuento/100)
    costo = costo - valorDescuento

    return costo
}

let subtotalConDescuento = PrecioConDescuento(totalCompra)

alert("Total con descuento (sin impuestos): "+subtotalConDescuento)

function PrecioConImpuesto(costo){
    const impuestos = costo * (21/100)
    return costo + impuestos
}

let totalFinal = PrecioConImpuesto(subtotalConDescuento)

alert("Total a pagar: "+totalFinal);