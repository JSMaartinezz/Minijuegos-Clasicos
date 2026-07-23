// Variables globales //
let estructuraJuego = document.querySelector(".estructura-juego");
let marcador = document.querySelector(".marcador");
let contenedorPotenciador = document.querySelector(".contenedor-potenciador");
let botonPotenciador = document.querySelector("#boton-potenciador");
let contadorPotenciador = document.querySelector("#contador-potenciador");
let potenciadorActivado = false;
let serpientePuedeAtravesar = false;
let duracionPotenciador = 10;
let recargaPotenciador = 30;
let puntuacionActual = document.querySelector("#puntuacion-actual");
let puntosActuales = 0;
let puntuacionMaxima = document.querySelector("#puntuacion-maxima");
let leyenda = document.querySelector(".leyenda");
const tablero = document.querySelector(".tablero");
const pincel = tablero.getContext("2d");
const tamanoCasilla = 40;
// Variables booleanas //
let manzanaDoradaActiva = false;
let manzanaPodridaActiva = false;
let temporizadorManzanaDorada;
let snake = [
    {x: 12, y: 10},
    {x: 11, y: 10},
    {x: 10, y: 10}
];
let direccion = {x: 1, y: 0};
let manzanaPodrida = {x: 12, y: 12};
let temporizadorManzanaPodrida;
posicionManzanaPodrida();
let manzanaRoja = {x: 5, y: 5};
posicionManzana();
let manzanaDorada = {x: 9, y: 9};
posicionManzanaDorada();
// Funcion pintar manzanas //
function dibujarManzana () {
    pincel.fillStyle = "#C62828";
    pincel.fillRect(manzanaRoja.x * tamanoCasilla, manzanaRoja.y * tamanoCasilla,
        tamanoCasilla, tamanoCasilla
    );
}
function dibujarManzanaDorada () {
    if (manzanaDoradaActiva === true) {
    pincel.fillStyle = "#E4B028";
    pincel.fillRect(manzanaDorada.x * tamanoCasilla, manzanaDorada.y * tamanoCasilla,
        tamanoCasilla, tamanoCasilla
    );
    } else {};
}
function dibujarManzanaPodrida() {
    if (manzanaPodridaActiva === true) {
        pincel.fillStyle = "#656D3F";
        pincel.fillRect(manzanaPodrida.x * tamanoCasilla, manzanaPodrida.y * tamanoCasilla,
            tamanoCasilla, tamanoCasilla
        );
    } else {};
}
// Funcion posicion aleatoria manzana //
function posicionManzana () {
    let manzanaEstaEncimaSerpiente;
    do {
    manzanaRoja = {
        x: Math.floor(Math.random()* (tablero.width/tamanoCasilla)),
        y: Math.floor(Math.random()* (tablero.height/tamanoCasilla))
    };
    manzanaEstaEncimaSerpiente = snake.some(bloque => bloque.x === manzanaRoja.x && bloque.y === manzanaRoja.y);
    } while (manzanaEstaEncimaSerpiente);
}
function posicionManzanaDorada () {
    clearTimeout(temporizadorManzanaDorada);
    let manzanaDoradaEstaEncimaSerpiente;
    do {
    manzanaDorada = {
        x: Math.floor(Math.random()* (tablero.width/tamanoCasilla)),
        y: Math.floor(Math.random()* (tablero.height/tamanoCasilla))
    };
    manzanaDoradaEstaEncimaSerpiente = snake.some(bloque => bloque.x === manzanaDorada.x && bloque.y === manzanaDorada.y);
    } while (manzanaDoradaEstaEncimaSerpiente);
    manzanaDoradaActiva = true;
    temporizadorManzanaDorada = setTimeout(() => {
        manzanaDoradaActiva = false;
        temporizadorManzanaDorada = setTimeout(() => {
            posicionManzanaDorada();
        }, 5000);
    }, 4000);
}
function posicionManzanaPodrida () {
    clearTimeout(temporizadorManzanaPodrida);
    let manzanaPodridaEstaEncimaSerpiente;
    do {
        manzanaPodrida = {
            x: Math.floor(Math.random()* (tablero.width/tamanoCasilla)),
            y: Math.floor(Math.random()* (tablero.height/tamanoCasilla))
        };
        manzanaPodridaEstaEncimaSerpiente = snake.some(bloque => bloque.x === manzanaPodrida.x && bloque.y === manzanaPodrida.y);
    } while (manzanaPodridaEstaEncimaSerpiente);
    manzanaPodridaActiva = true;
    temporizadorManzanaPodrida = setTimeout(() => {
        manzanaPodridaActiva = false;
        temporizadorManzanaPodrida = setTimeout(() => {
            posicionManzanaPodrida();
        }, 5000);
    }, 4000);
}
// Funciones para movimientos serpiente //
function dibujarSerpiente () {
    pincel.fillStyle = "#124D1C";
    snake.forEach(parteSerpiente => {
        pincel.fillRect(parteSerpiente.x * tamanoCasilla, parteSerpiente.y * tamanoCasilla,
            tamanoCasilla, tamanoCasilla
        );
    });
}
dibujarSerpiente();
function moverSerpiente() {
    const nuevaPosicionCabeza = {
        x: snake[0].x + direccion.x,
        y: snake[0].y + direccion.y
    };
    let chocaConSuCuerpo = snake.some(bloque => bloque.x === nuevaPosicionCabeza.x && bloque.y === nuevaPosicionCabeza.y);
    if (nuevaPosicionCabeza.x < 0 || nuevaPosicionCabeza.x >= 25 || nuevaPosicionCabeza.y < 0 || 
        nuevaPosicionCabeza.y >= 20 || (chocaConSuCuerpo && !serpientePuedeAtravesar)) {
            modalGameOver();
            return;
    }
    if (manzanaRoja.x === snake[0].x && manzanaRoja.y === snake[0].y) {
        snake.unshift(nuevaPosicionCabeza);
        puntosActuales++;
        puntuacionActual.textContent = puntosActuales;
        posicionManzana();
    } else if (manzanaDoradaActiva && manzanaDorada.x === snake[0].x && manzanaDorada.y === snake[0].y) {
        snake.unshift(nuevaPosicionCabeza);
        snake.unshift(nuevaPosicionCabeza);
        puntuacionActual.textContent = puntosActuales += 2;      
        manzanaDoradaActiva = false;
        clearTimeout(temporizadorManzanaDorada);
        temporizadorManzanaDorada = setTimeout(() => {
            posicionManzanaDorada();
        }, 5000);
    } else if(manzanaPodridaActiva && manzanaPodrida.x === snake[0].x && manzanaPodrida.y === snake[0].y) {
        snake.unshift(nuevaPosicionCabeza);
        snake.pop();
        snake.pop();
        if (snake.length === 0) {
            modalGameOver();
        }
        puntuacionActual.textContent = puntosActuales -= 1;
        manzanaPodridaActiva = false;
        clearTimeout(temporizadorManzanaPodrida);
        temporizadorManzanaPodrida = setTimeout(() => {
            posicionManzanaPodrida();
        }, 5000);
    } else {
        snake.unshift(nuevaPosicionCabeza);
        snake.pop();
    }
}
// Funcion llamar al modal de derrota //
function modalGameOver() {
    clearInterval(intervaloMovimiento);
    let overlayBodyFondoOscuro = document.createElement("div");
    overlayBodyFondoOscuro.classList.add("overlayBody");
    document.body.appendChild(overlayBodyFondoOscuro);
    let ContenedorMensajeDerrota = document.createElement("div");
    let mensajeDerrota = document.createElement("p");
    mensajeDerrota.textContent = " 🐍☠️¡Has perdido! La serpiente ha comido más de lo que debería... ☠️🐍" ;
    ContenedorMensajeDerrota.appendChild(mensajeDerrota);
    ContenedorMensajeDerrota.classList.add("modalGameOver");
    document.body.appendChild(ContenedorMensajeDerrota);
    let botonEmpezarJuego = document.createElement("button");
    botonEmpezarJuego.classList.add("botonModalEmpezarJugar");
    botonEmpezarJuego.textContent = "Volver a jugar";
    ContenedorMensajeDerrota.appendChild(botonEmpezarJuego);
    botonEmpezarJuego.addEventListener("click", function(){
        ContenedorMensajeDerrota.classList.remove("modalGameOver");
        ContenedorMensajeDerrota.classList.add("cerrarModal");
        overlayBodyFondoOscuro.classList.remove("overlayBody");
        setTimeout(() => {
        window.location.reload();
        }, 2000);
    })
    return;
}
// Funcion para activar potenciador //
function activarPotenciador() {
    let tiempoRestantePotenciador = duracionPotenciador;
    let tiempoRecargaPotenciador = recargaPotenciador;
    if (potenciadorActivado !== true) {
    serpientePuedeAtravesar = true;
    potenciadorActivado = true;
    console.log("potenciador activado");
    let intervaloTiempoRestantePotenciador = setInterval(() => {
        tiempoRestantePotenciador--
        contadorPotenciador.textContent = tiempoRestantePotenciador + " " + "segundos";
        if (tiempoRestantePotenciador === 0) {
            serpientePuedeAtravesar = false;
            contadorPotenciador.textContent = tiempoRecargaPotenciador + " " + "segundos";
            clearInterval(intervaloTiempoRestantePotenciador);
            let intervaloRecargaPotenciador = setInterval(() => {
            tiempoRecargaPotenciador--;
            contadorPotenciador.textContent = tiempoRecargaPotenciador + " " + "segundos";
            if (tiempoRecargaPotenciador === 0) {
                contadorPotenciador.textContent = "🔥¡Listo!🔥";
                clearInterval(intervaloRecargaPotenciador);
                potenciadorActivado = false;
            }
    }, 1000);
        }
    }, 1000);
    }
}
// Intervalo de tiempo para simular que se mueve la serpiente //
let intervaloMovimiento = setInterval(() => {
    pincel.clearRect(0, 0, tablero.width, tablero.height);
    moverSerpiente();
    dibujarSerpiente();
    dibujarManzana();
    dibujarManzanaDorada();
    dibujarManzanaPodrida();
}, 150);

// Evento movimiento teclas //
window.addEventListener("keydown", (evento) => {
    switch (evento.key) {
        case "ArrowUp":
            if (direccion.y !== 1) {
                direccion = {x: 0, y: -1};
            }
            break;
        case "ArrowDown":
            if (direccion.y !== -1) {
                direccion = {x: 0, y: 1};
            }
            break;
        case "ArrowLeft":
            if (direccion.x !== 1) {
                direccion = {x: -1, y: 0};
            }
            break;
        case "ArrowRight":
        if (direccion.x !== -1) {
            direccion = {x: 1, y: 0};
        }    
            break;
        case " ":
            activarPotenciador();
            break;        
    }
})