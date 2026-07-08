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
let snake = [
    {x: 12, y: 10},
    {x: 11, y: 10},
    {x: 10, y: 10}
];
let direccion = {x: 1, y: 0};
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
    snake.unshift(nuevaPosicionCabeza);
    snake.pop();
}
// Intervalo de tiempo para simular que se mueve la serpiente //
setInterval(() => {
    pincel.clearRect(0, 0, tablero.width, tablero.height);
    moverSerpiente();
    dibujarSerpiente();
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