// Variables Globales //
// Botones de los juegos //
let botonPPT = document.querySelector(".PPT");
let botonAdivinaNumero = document.querySelector(".AdivinaNumero");

// Variables juego seleccionado //
let juegoTarjeta = document.querySelector(".juegoTarjeta");
let imagenTarjeta = document.querySelector(".imagenTarjeta");
let descripcionTarjeta = document.querySelector(".descripcionTarjeta");
let botonTarjeta = document.querySelector(".botonTarjeta");

// Evento click boton PPT //
botonPPT.addEventListener("click", function() {
    juegoTarjeta.classList.add("juegoTarjetaMostrar");
    imagenTarjeta.src = "imagenes/PPT-imagen.png";
    descripcionTarjeta.textContent = "El clásico Piedra, Papel o tijeras pero con una funcionalidad nueva, entra y ¡DESCÚBRELA!";
    botonTarjeta.textContent = "Jugar YA";
});

// Evento click boton Adivina el Numero //
botonAdivinaNumero.addEventListener("click", function() {
    juegoTarjeta.classList.add("juegoTarjetaMostrar");
    imagenTarjeta.src = "imagenes/adivina-numero.png";
    descripcionTarjeta.textContent = "Un adivina el número con tiempo límite, se ¡RÁPIDO! o no te dará tiempo a averiguarlo.";
    botonTarjeta.textContent = "Jugar YA";
})