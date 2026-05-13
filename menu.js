// Variables Globales //
// Botones de los juegos //
let botonPPT = document.querySelector(".PPT");
let botonAdivinaNumero = document.querySelector(".AdivinaNumero");

// Variables juego seleccionado //
let juegoTarjeta = document.querySelector(".juegoTarjeta");
let imagenTarjeta = document.querySelector(".imagenTarjeta");
let descripcionTarjeta = document.querySelector(".descripcionTarjeta");
let botonTarjeta = document.querySelector(".botonTarjeta");
let urlJuego = null;
let tituloTarjeta = document.querySelector(".tituloTarjeta");

// Evento click boton PPT //
botonPPT.addEventListener("click", function() {
    if (juegoTarjeta.classList.contains("juegoTarjetaMostrar") === true) {
        juegoTarjeta.classList.add("transicionSalidaTarjeta");
        juegoTarjeta.addEventListener("animationend", function() {
            if (event.animationName === 'transicionSalidaTarjeta') {
                console.log("La animacion especifica ha terminado");
                juegoTarjeta.classList.add("juegoTarjeta");
                juegoTarjeta.classList.remove("transicionSalidaTarjeta");
                juegoTarjeta.classList.remove("juegoTarjetaMostrar");
            };
        });
        setTimeout(function() {
            juegoTarjeta.classList.remove("juegoTarjetaMostrar");
            juegoTarjeta.classList.remove("transicionSalidaTarjeta");
            tituloTarjeta.textContent = "Piedra, Papel o Tijeras";
            imagenTarjeta.src = "imagenes/PPT-imagen.png";
            descripcionTarjeta.textContent = "El clásico Piedra, Papel o tijeras pero con una funcionalidad nueva, entra y ¡DESCÚBRELA!";
            botonTarjeta.textContent = "Jugar YA";
            juegoTarjeta.classList.add("juegoTarjetaMostrar");
        }, 1500);
        urlJuego = "P.P.T/index.html";
    } else {juegoTarjeta.classList.add("juegoTarjetaMostrar")
        tituloTarjeta.textContent = "Piedra, Papel o Tijeras";
        imagenTarjeta.src = "imagenes/PPT-imagen.png";
        descripcionTarjeta.textContent = "El clásico Piedra, Papel o tijeras pero con una funcionalidad nueva, entra y ¡DESCÚBRELA!";
        botonTarjeta.textContent = "Jugar YA";
        urlJuego = "P.P.T/index.html";
    };
});

// Evento click botonTarjeta JUGAR YA //
botonTarjeta.addEventListener("click", function() {
    window.location.href = urlJuego;
});

// Evento click boton Adivina el Numero //
botonAdivinaNumero.addEventListener("click", function() {
    if (juegoTarjeta.classList.contains("juegoTarjetaMostrar") === true) {
        juegoTarjeta.classList.add("transicionSalidaTarjeta");
        juegoTarjeta.addEventListener("animationend", function() {
            if (event.animationName === 'transicionSalidaTarjeta') {
                console.log("La animacion especifica ha terminado");
                juegoTarjeta.classList.add("juegoTarjeta");
                juegoTarjeta.classList.remove("transicionSalidaTarjeta");
                juegoTarjeta.classList.remove("juegoTarjetaMostrar");
            };
        });
        setTimeout(function() {
            juegoTarjeta.classList.remove("juegoTarjetaMostrar");
            juegoTarjeta.classList.remove("transicionSalidaTarjeta");
            tituloTarjeta.textContent = "Adivina el número";
            imagenTarjeta.src = "imagenes/adivina-numero.png";
            descripcionTarjeta.textContent = "Sé más ¡RÁPIDO! que el tiempo para adivinar el número escondido entre 1 y 100";
            botonTarjeta.textContent = "Jugar YA";
            juegoTarjeta.classList.add("juegoTarjetaMostrar");
        }, 1500);
        urlJuego = "Adivina el numero/index.html";
    } else {juegoTarjeta.classList.add("juegoTarjetaMostrar")
        tituloTarjeta.textContent = "Adivina el número";
        imagenTarjeta.src = "imagenes/adivina-numero.png";
        descripcionTarjeta.textContent = "Sé más ¡RÁPIDO! que el tiempo para adivinar el número escondido entre 1 y 100";
        botonTarjeta.textContent = "Jugar YA";
        urlJuego = "Adivina el numero/index.html";
    };
});
