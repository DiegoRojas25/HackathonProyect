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

