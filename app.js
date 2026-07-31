const botonmostrarCarrito = document.getElementById("mostrarCarrito");
const overlay = document.getElementById("overlay");
const cerrarCarrito = document.getElementById("cerrarCarrito");
const catalogo = document.getElementById("catalogoProductos");
const productosCarrito = document.getElementById("productos-carrito");
const contadorCarrito = document.getElementById("contadorCarrito");

cerrarCarrito.addEventListener("click", guardarCarrito);
botonmostrarCarrito.addEventListener("click", saleCarrito);

function saleCarrito() {
    overlay.classList.remove("d-none");
}

function guardarCarrito() {
    overlay.classList.add("d-none");
}

const productos = [
    {
        id: 1,
        nombre: "Tacos al Pastor",
        precio: 22000,
        imagen: "img/tacos.jpg",
        descripcion: "Carne de cerdo marinada con piña.",
        categoria: "platos fuertes."
    },
    {
        id: 2,
        nombre: "Burrito",
        precio: 26000,
        imagen: "img/burrito.jpg",
        descripcion: "Res, arroz, frijoles y queso.",
        categoria: "platos fuertes."
    },
    {
        id: 3,
        nombre: "Quesadilla",
        precio: 18000,
        imagen: "img/quesadilla.jpg",
        descripcion: "Tortilla de maíz con queso.",
        categoria: "platos fuertes."
    }
];

const carrito = [];

function mostrarProductos() {
    productos.forEach(producto => {
        catalogo.innerHTML += `
            <div class="${producto.categoria} col-md-4">
                <div class="cards-platos card h-100">
                    <img src="${producto.imagen}" class="card-img-top">
                    <div class="card-body text-center">
                        <h5>${producto.nombre}</h5>
                        <p>${producto.descripcion}</p>
                        <h6>$${producto.precio}</h6>
                        <button class="btn-agregar">
                            Agregar
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>`;
    });
}

mostrarProductos();

const botonesAgregar = document.querySelectorAll(".btn-agregar");

for (let i = 0; i < botonesAgregar.length; i++) {
    botonesAgregar[i].addEventListener("click", agregarProducto);
}

function agregarProducto() {
    const tarjeta = this.closest(".col-md-4");
    const nombre = tarjeta.querySelector("h5").textContent;

    let producto;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre === nombre) {
            producto = productos[i];
            break;
        }
    }

    carrito.push(producto);
    mostrarCarrito();
}

function mostrarCarrito() {
    productosCarrito.innerHTML = "";

    for (let i = 0; i < carrito.length; i++) {
        productosCarrito.innerHTML += `
            <div class="card mb-2">
                <div class="card-body">
                    <h5>${carrito[i].nombre}</h5>
                    <p>$${carrito[i].precio}</p>
                    <button class="btn btn-danger btn-eliminar" data-index="${i}">
                        Eliminar
                    </button>
                </div>
            </div>
        `;
    }

    if (contadorCarrito) {
        contadorCarrito.textContent = carrito.length;
    }

    const botonesEliminar = document.querySelectorAll(".btn-eliminar");

    for (let i = 0; i < botonesEliminar.length; i++) {
        botonesEliminar[i].addEventListener("click", eliminarProducto);
    }
}

function eliminarProducto() {
    const index = this.getAttribute("data-index");
    carrito.splice(index, 1);
    mostrarCarrito();
}