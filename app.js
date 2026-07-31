const productos = [
    {
        id: 1,
        nombre: "Tacos al Pastor",
        precio: 22000,
        imagen: "img/tacos.jpg",
        descripcion: "Carne de cerdo marinada con piña.",
        categoria: "platos"
    },
    {
        id: 2,
        nombre: "Burrito",
        precio: 26000,
        imagen: "img/burrito.jpg",
        descripcion: "Res, arroz, frijoles y queso.",
        categoria: "platos"
    },
    {
        id: 3,
        nombre: "Quesadilla",
        precio: 18000,
        imagen: "img/quesadilla.jpg",
        descripcion: "Tortilla de maíz con queso.",
        categoria: "platos"
    },
   {
    id: 4,
    nombre: "Nachos con Guacamole",
    precio: 16000,
    imagen: "img/nachos-guacamole.png",
    descripcion: "Nachos crujientes acompañados de guacamole.",
    categoria: "entradas"
},
{
    id: 5,
    nombre: "Elote Mexicano",
    precio: 12000,
    imagen: "img/elote-mexicano.png",
    descripcion: "Mazorca con queso, limón y un toque picante.",
    categoria: "entradas"
},
{
    id: 6,
    nombre: "Jalapeños Rellenos",
    precio: 15000,
    imagen: "img/jalapenos-rellenos.png",
    descripcion: "Jalapeños rellenos de queso y empanizados.",
    categoria: "entradas"
},
{
    id: 7,
    nombre: "Agua de Horchata",
    precio: 8000,
    imagen: "img/horchata.png",
    descripcion: "Bebida de arroz con canela, fresca y cremosa.",
    categoria: "bebidas"
},
{
    id: 8,
    nombre: "Agua de Jamaica",
    precio: 7000,
    imagen: "img/agua-jamaica.png",
    descripcion: "Bebida refrescante de flor de Jamaica.",
    categoria: "bebidas"
},
{
    id: 9,
    nombre: "Mangonada",
    precio: 12000,
    imagen: "img/mangonada.png",
    descripcion: "Mango natural con chamoy, limón y tajín.",
    categoria: "bebidas"
}
];

const catalogo = document.getElementById("catalogoProductos");

function mostrarProductos() {
    productos.forEach(producto => {
        catalogo.innerHTML += `
            <div class="producto-item col-md-4" data-categoria="${producto.categoria}">
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

const mostrarCarrito = document.getElementById("mostrarCarrito");
const overlay = document.getElementById("overlay");
const cerrarCarrito = document.getElementById("cerrarCarrito");

cerrarCarrito.addEventListener("click", guardarCarrito);
mostrarCarrito.addEventListener("click", saleCarrito);

function saleCarrito() {
    overlay.classList.remove("d-none")
}

function guardarCarrito() {
    overlay.classList.add("d-none")
}



const botonesFiltroCategorias = document.querySelectorAll(
    ".btn-categoria, .btn-menu-completo"
);

function filtrarProductosPorCategoria(categoriaSeleccionada) {
    const tarjetasProductos = catalogo.querySelectorAll(".producto-item");

    tarjetasProductos.forEach(tarjeta => {
        const categoriaProducto = tarjeta.dataset.categoria;

        if (
            categoriaSeleccionada === "todos" ||
            categoriaProducto === categoriaSeleccionada
        ) {
            tarjeta.classList.remove("d-none");
        } else {
            tarjeta.classList.add("d-none");
        }
    });
}

botonesFiltroCategorias.forEach(boton => {
    boton.addEventListener("click", function () {
        const categoriaSeleccionada = boton.dataset.categoria;

        filtrarProductosPorCategoria(categoriaSeleccionada);
    });
});