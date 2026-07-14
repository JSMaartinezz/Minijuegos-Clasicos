// Variables globales //
let estructuraJuego = document.querySelector(".estructura-juego");
let marcador = document.querySelector(".marcador");
let contenedorPotenciador = document.querySelector(".contenedor-potenciador");
let botonPotenciador = document.querySelector("#boton-potenciador");
let contadorPotenciador = document.querySelector("#contador-potenciador");
let puntuacionActual = document.querySelector("#puntuacion-actual");
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
    if (manzanaRoja.x === snake[0].x && manzanaRoja.y === snake[0].y) {
        snake.unshift(nuevaPosicionCabeza);
        posicionManzana();
    } else if (manzanaDoradaActiva && manzanaDorada.x === snake[0].x && manzanaDorada.y === snake[0].y) {
        snake.unshift(nuevaPosicionCabeza);
        snake.unshift(nuevaPosicionCabeza);        
        manzanaDoradaActiva = false;
        clearTimeout(temporizadorManzanaDorada);
        temporizadorManzanaDorada = setTimeout(() => {
            posicionManzanaDorada();
        }, 5000);
    } else if(manzanaPodridaActiva && manzanaPodrida.x === snake[0].x && manzanaPodrida.y === snake[0].y) {
        snake.unshift(nuevaPosicionCabeza);
        snake.pop();
        snake.pop();
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
// Intervalo de tiempo para simular que se mueve la serpiente //
setInterval(() => {
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
            direccion = {x: 0, y: -1};
            break;
        case "ArrowDown":
            direccion = {x: 0, y: 1};
            break;
        case "ArrowLeft":
            direccion = {x: -1, y: 0};
            break;
        case "ArrowRight":
            direccion = {x: 1, y: 0};
            break;        
    }
})