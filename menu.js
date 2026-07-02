// Variables Globales //
// Botones de los juegos //
let botonPPT = document.querySelector(".PPT");
let botonAdivinaNumero = document.querySelector(".AdivinaNumero");
let botonAhorcado = document.querySelector(".ahorcado");

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
        botonTarjeta.classList.remove("hover-adivina");
        botonTarjeta.classList.remove("hover-ahorcado");
        botonTarjeta.classList.add("hover-ppt");
        juegoTarjeta.classList.add("transicionVuelta");
        juegoTarjeta.addEventListener("animationend", function() {
            if (event.animationName === 'transicionVuelta') {
                console.log("La animacion especifica ha terminado");
                botonTarjeta.classList.remove("hover-adivina");
                botonTarjeta.classList.remove("hover-ahorcado");                
                botonTarjeta.classList.add("hover-ppt");
                juegoTarjeta.classList.add("juegoTarjeta");
                juegoTarjeta.classList.remove("transicionVuelta");
                juegoTarjeta.classList.remove("juegoTarjetaMostrar");
            };
        });
        setTimeout(function() {
            juegoTarjeta.classList.remove("juegoTarjetaMostrar");
            juegoTarjeta.classList.remove("transicionVuelta");
            tituloTarjeta.textContent = "Piedra, Papel o Tijeras";
            imagenTarjeta.src = "imagenes/PPT-imagen.png";
            descripcionTarjeta.textContent = "El clásico Piedra, Papel o tijeras pero con una funcionalidad nueva, entra y ¡DESCÚBRELA!";
            botonTarjeta.textContent = "Jugar YA";
            juegoTarjeta.classList.add("juegoTarjetaMostrar");
        }, 1500);
        urlJuego = "P.P.T/index.html";
    } else {juegoTarjeta.classList.add("juegoTarjetaMostrar")
        botonTarjeta.classList.remove("hover-adivina");
        botonTarjeta.classList.remove("hover-ahorcado");
        botonTarjeta.classList.add("hover-ppt");
        tituloTarjeta.textContent = "Piedra, Papel o Tijeras";
        imagenTarjeta.src = "imagenes/PPT-imagen.png";
        descripcionTarjeta.textContent = "El clásico Piedra, Papel o tijeras pero con una funcionalidad nueva, entra y ¡DESCÚBRELA!";
        botonTarjeta.textContent = "Jugar YA";
        urlJuego = "P.P.T/index.html";
    };
});

// Evento click botonTarjeta JUGAR YA //
botonTarjeta.addEventListener("click", function() {
    document.body.style.overflow = "hidden";
    juegoTarjeta.classList.add("transicionIntroducirTarjeta");
    setTimeout(function() {
        window.location.href = urlJuego;
    },2000);
});

// Evento click boton Adivina el Numero //
botonAdivinaNumero.addEventListener("click", function() {
    if (juegoTarjeta.classList.contains("juegoTarjetaMostrar") === true) {
        botonTarjeta.classList.remove("hover-ppt");
        botonTarjeta.classList.remove("hover-ahorcado");
        botonTarjeta.classList.add("hover-adivina");
        juegoTarjeta.classList.add("transicionVuelta");
        juegoTarjeta.addEventListener("animationend", function() {
            if (event.animationName === 'transicionVuelta') {
                console.log("La animacion especifica ha terminado");
                botonTarjeta.classList.remove("hover-ppt");
                botonTarjeta.classList.remove("hover-ahorcado");
                botonTarjeta.classList.add("hover-adivina");
                juegoTarjeta.classList.add("juegoTarjeta");
                juegoTarjeta.classList.remove("transicionVuelta");
                juegoTarjeta.classList.remove("juegoTarjetaMostrar");
            };
        });
        setTimeout(function() {
            juegoTarjeta.classList.remove("juegoTarjetaMostrar");
            juegoTarjeta.classList.remove("transicionVuelta");
            tituloTarjeta.textContent = "Adivina el número";
            imagenTarjeta.src = "imagenes/adivina-numero.png";
            descripcionTarjeta.textContent = "Sé más ¡RÁPIDO! que el tiempo para adivinar el número escondido entre 1 y 100";
            botonTarjeta.textContent = "Jugar YA";
            juegoTarjeta.classList.add("juegoTarjetaMostrar");
        }, 1500);
        urlJuego = "Adivina el numero/index.html";
    } else {juegoTarjeta.classList.add("juegoTarjetaMostrar")
        botonTarjeta.classList.remove("hover-ppt");
        botonTarjeta.classList.remove("hover-ahorcado");
        botonTarjeta.classList.add("hover-adivina");
        tituloTarjeta.textContent = "Adivina el número";
        imagenTarjeta.src = "imagenes/adivina-numero.png";
        descripcionTarjeta.textContent = "Sé más ¡RÁPIDO! que el tiempo para adivinar el número escondido entre 1 y 100";
        botonTarjeta.textContent = "Jugar YA";
        urlJuego = "Adivina el numero/index.html";
    };
});
// Evento click boton ahorcado //
botonAhorcado.addEventListener("click", function() {
    if (juegoTarjeta.classList.contains("juegoTarjetaMostrar") === true) {
        botonTarjeta.classList.remove("hover-ppt");
        botonTarjeta.classList.remove("hover-adivina");
        botonTarjeta.classList.add("hover-ahorcado");
        juegoTarjeta.classList.add("transicionVuelta");
        juegoTarjeta.addEventListener("animationend", function() {
            if (event.animationName === 'transicionVuelta') {
                console.log("La animacion especifica ha terminado");
                botonTarjeta.classList.remove("hover-ppt");
                botonTarjeta.classList.remove("hover-adivina");
                botonTarjeta.classList.add("hover-ahorcado");
                juegoTarjeta.classList.add("juegoTarjeta");
                juegoTarjeta.classList.remove("transicionVuelta");
                juegoTarjeta.classList.remove("juegoTarjetaMostrar");
            };
        });
        setTimeout(function() {
            juegoTarjeta.classList.remove("juegoTarjetaMostrar");
            juegoTarjeta.classList.remove("transicionVuelta");
            tituloTarjeta.textContent = "Ahorca-2";
            imagenTarjeta.src = "imagenes/ahorcado.png";
            descripcionTarjeta.textContent = "¿Serás capaz de adivinar la palabra secreta antes de acabar...💀 ¡Buena Suerte!";
            botonTarjeta.textContent = "Jugar YA";
            juegoTarjeta.classList.add("juegoTarjetaMostrar");
        }, 1500);
        urlJuego = "Ahorca2/ahorca2.html";
    } else {juegoTarjeta.classList.add("juegoTarjetaMostrar")
        botonTarjeta.classList.remove("hover-ppt");
        botonTarjeta.classList.remove("hover-adivina");
        botonTarjeta.classList.add("hover-ahorcado");
        tituloTarjeta.textContent = "Ahorca-2";
        imagenTarjeta.src = "imagenes/ahorcado.png";
        descripcionTarjeta.textContent = "¿Serás capaz de adivinar la palabra secreta antes de acabar...💀 ¡Buena Suerte!";
        botonTarjeta.textContent = "Jugar YA";
        urlJuego = "Ahorca2/ahorca2.html";
    };
});
