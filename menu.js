// Variables Globales //
// Botones de los juegos //
let botonPPT = document.querySelector(".PPT");
let botonAdivinaNumero = document.querySelector(".AdivinaNumero");
let botonAhorcado = document.querySelector(".ahorcado");
let botonSnake = document.querySelector(".snake");

// Variables juego seleccionado //
let juegoTarjeta = document.querySelector(".juegoTarjeta");
let imagenTarjeta = document.querySelector(".imagenTarjeta");
let descripcionTarjeta = document.querySelector(".descripcionTarjeta");
let botonTarjeta = document.querySelector(".botonTarjeta");
let urlJuego = "";
let tituloTarjeta = document.querySelector(".tituloTarjeta");

// FUNCIÓN CENTRALIZADA PARA CAMBIAR DE JUEGO
function cambiarJuego(titulo, imagen, descripcion, claseHover, url) {
    botonTarjeta.className = "boton-tarjeta-base " + claseHover;
    urlJuego = url;

    // SI LA TARJETA YA ESTÁ ABIERTA (Transición suave entre juegos)
    if (juegoTarjeta.classList.contains("juegoTarjetaMostrar")) {
        
        juegoTarjeta.classList.add("transicionVuelta");

        setTimeout(function() {
            tituloTarjeta.textContent = titulo;
            imagenTarjeta.src = imagen;
            descripcionTarjeta.textContent = descripcion;
            botonTarjeta.textContent = "Jugar YA";

            juegoTarjeta.classList.remove("transicionVuelta");
        }, 500);

    } else {
        // SI ES LA PRIMERA VEZ QUE SE ABRE
        tituloTarjeta.textContent = titulo;
        imagenTarjeta.src = imagen;
        descripcionTarjeta.textContent = descripcion;
        botonTarjeta.textContent = "Jugar YA";
        
        juegoTarjeta.classList.add("juegoTarjetaMostrar");
    }
}

// EVENTOS DE LOS 4 BOTONES

botonAdivinaNumero.addEventListener("click", function() {
    cambiarJuego(
        "Adivina el número", 
        "imagenes/adivina-numero.png", 
        "¡Adivina el número secreto antes de que se agote el tiempo!", 
        "hover-adivina", 
        "Adivina el numero/adivina.html"
    );
});

botonPPT.addEventListener("click", function() {
    cambiarJuego(
        "Piedra, Papel o Tijera", 
        "imagenes/PPT-imagen.png", 
        "El clásico juego de estrategia. ¿Podrás ganar a la máquina?", 
        "hover-ppt", 
        "PPT/ppt.html"
    );
});

botonAhorcado.addEventListener("click", function() {
    cambiarJuego(
        "Ahorca-2", 
        "imagenes/ahorcado.png", 
        "¿Serás capaz de adivinar la palabra secreta antes de acabar... 💀?", 
        "hover-ahorcado", 
        "Ahorca2/ahorca2.html"
    );
});

botonSnake.addEventListener("click", function() {
    cambiarJuego(
        "Snake", 
        "imagenes/snake.png", 
        "Consigue que tu serpiente sea lo más grande posible y compite con tu récord.", 
        "hover-snake", 
        "Snake/snake.html"
    );
});
// Evento para el botón "Jugar YA" dentro de la tarjeta
botonTarjeta.addEventListener("click", function() {
    if (urlJuego) {
        setTimeout(function() {
            window.location.href = urlJuego;
        }, 1000);
    }
});