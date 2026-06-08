// Variables globales //
// Figura y cuerpo //
let figura = document.querySelector(".figura");
let cuerpo = document.querySelector(".cuerpo");
let cabeza = document.querySelector(".cabeza");
let brazoIzq = document.querySelector(".brazo-izq");
let brazoDer = document.querySelector(".brazo-der");
let tronco = document.querySelector(".tronco");
let piernaIzq = document.querySelector(".pierna-izq");
let piernaDer = document.querySelector(".pierna-der");
// Input letras //
let conjuntoInput = document.querySelector(".conjunto-input");
let inputLetras = document.querySelector(".input-letras");
let adivinarLetra = document.querySelector(".adivinar-letra");
let botonLetras = document.querySelector(".letras");
// Input Adivinar Palabra //
let inputPalabra = document.querySelector(".input-palabra");
let adivinarPalabra = document.querySelector(".adivinar-palabra");
let botonPalabra = document.querySelector(".palabra");
// Vidas //
let cantidadVidas = document.querySelector(".cantidad-vidas");
let vidas = document.querySelector(".vidas");
let botonSacrificioVidas = document.querySelector(".sacrificio");
// Hueco letras //
let estructuraFooter = document.querySelector(".estructura-footer");
let huecoLetras = document.querySelector(".hueco-letras");
let letrasUsadas = document.querySelector(".letras-usadas");
// Generar palabra //
let activarJuego = document.querySelector(".activar-juego");
let botonGenerarPalabra = document.querySelector(".generar-palabra");
// Variables de estado //
let palabraGenerada = false;
let muñecoCompleto = false;
let palabraEnUso = null;
let letrasExcluidas = [];