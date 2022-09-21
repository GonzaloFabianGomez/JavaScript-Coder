// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaProductos = document.querySelector('#lista-productos');
let articulosCarrito = [];

cargarEventListeners()
function cargarEventListeners() {
    // Cuando agrego un producto presionando "Agregar al Carrito"
    listaProductos.addEventListener('click', agregarProducto);

    // Elimina productos del carrito
    carrito.addEventListener('click', eliminarProducto);

    // Muestra los productos de Local Storage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || [];

        carritoHTML();
    })


    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; // resetea el arreglo

        limpiarHTML(); // Elimina todo el HTML
    })
}


// Funciones
function agregarProducto(e){ // cuando agrego un producto se ejecuta la funcion agregarProducto
    e.preventDefault();


    if ( e.target.classList.contains('agregar-carrito') ) { // se asegura que el usuario haya precionado en agregar carrito
        const productoSeleccionado = e.target.parentElement.parentElement; // y accedo a todo el div que tenga el contenido del producto
        leerDatosCurso(productoSeleccionado);
    }

}

// Elimina un producto del carrito
function eliminarProducto(e) {
    if(e.target.classList.contains('borrar-producto')) {
        const productoId = e.target.getAttribute('data-id');

        // Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( producto => producto.id !== productoId )

        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la información del producto
function leerDatosCurso(producto) { // lee los datos del producto
    console.log(producto);

    // Crear un objeto con el contenido del producto actual con la informacion que requiero
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h4').textContent,
        precio: producto.querySelector('.precio span').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( producto => producto.id === infoProducto.id );
    if (existe) {
        // Actualiza la cantidad
        const productos = articulosCarrito.map( producto => { // .map crea un nuevo arreglo
            if ( producto.id === infoProducto.id ) {
                producto.cantidad++;
                return producto; // retorna el objeto actualizado con la cantidad
            } else {
                return producto; // retorna los objetos que no son los duplicados
            }
        } )
        articulosCarrito = [...productos];
    } else {
        // Si no, agrega elementos al arreglo carrito
        articulosCarrito = [...articulosCarrito, infoProducto];
    }




    console.log(articulosCarrito);

    carritoHTML();
}


// Muestra el carrito de compras en el HTML
function carritoHTML() {

    // Limpiar el HTML para no tener duplicados
    limpiarHTML();


    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach( producto => {
        const { imagen, titulo, precio, cantidad, id } = producto;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-producto" data-id="${id}" > X </a>
            </td>
        `;

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

    // Agregar el carrito de compras al Storage
    sincronizarStorage();

}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// Elimina los productos del tbody
function limpiarHTML() {

    while (contenedorCarrito.firstChild) { // mientras haya un hijo la condicion se cumple
        contenedorCarrito.removeChild(contenedorCarrito.firstChild) // va a eliminar un hijo empezando por el primero. Luego todo vuelve a empezar, hasta que ya no queden hijos
    }

}