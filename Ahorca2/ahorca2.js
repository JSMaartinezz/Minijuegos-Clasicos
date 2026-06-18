// Variables globales //
let estructuraCentral = document.querySelector(".estructura-central");
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
let inputLetras = document.querySelector(".input-letra");
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

// Arrays //
let cuatroLetras = [
  "casa",
  "mesa",
  "gato",
  "lobo",
  "peto",
  "agua",
  "vino",
  "mapa",
  "rojo",
  "azul"
];
let cincoLetras = [
  "coche",
  "calle",
  "amigo",
  "chulo",
  "libro",
  "perro",
  "noche",
  "campo",
  "verde",
  "queso"
];
let seisLetras = [
  "zapato",
  "camisa",
  "abuelo",
  "escoba",
  "fuente",
  "puerta",
  "gambas",
  "bosque",
  "ciudad",
  "teatro"
];

// Evento comenzar el juego //
botonGenerarPalabra.addEventListener("click", function() {
    // Modal //
    let overlayBody = document.createElement("div");
    overlayBody.classList.add("overlayBody");
    document.body.appendChild(overlayBody);

    let menuElegirLetras = document.createElement("div");
    menuElegirLetras.classList.add("menuLetras");
    activarJuego.appendChild(menuElegirLetras);

    let mensajeElegirLetras = document.createElement("p");
    mensajeElegirLetras.textContent = "¿Cómo quieres jugar?";
    mensajeElegirLetras.classList.add("mensajeElegirLetras");
    menuElegirLetras.appendChild(mensajeElegirLetras);

    let agruparBotonesMenu = document.createElement("div");
    agruparBotonesMenu.classList.add("botonesMenuLetras");
    menuElegirLetras.appendChild(agruparBotonesMenu);
    // Boton 4 letras //
    let botonCuatroLetras = document.createElement("button");
    botonCuatroLetras.textContent = "Palabras de 4 letras.";
    botonCuatroLetras.classList.add("cuatroLetras");
    agruparBotonesMenu.appendChild(botonCuatroLetras);
    botonCuatroLetras.addEventListener("click", function() {
      menuElegirLetras.classList.remove("menuLetras");
      menuElegirLetras.classList.add("cerrarModal");
      setTimeout(function() {
        menuElegirLetras.remove();
        overlayBody.remove();
      }, 2000);
    })
    // Boton 5 letras //
    let botonCincoLetras = document.createElement("button");
    botonCincoLetras.textContent = "Palabras de 5 letras.";
    botonCincoLetras.classList.add("cincoLetras");
    agruparBotonesMenu.appendChild(botonCincoLetras);
    botonCincoLetras.addEventListener("click", function() {
      menuElegirLetras.classList.remove("menuLetras");
      menuElegirLetras.classList.add("cerrarModal");
      setTimeout(function() {
        menuElegirLetras.remove();
        overlayBody.remove();
      }, 2000);
    })

    // Boton 6 letras //
    let botonSeisLetras = document.createElement("button");
    botonSeisLetras.textContent = "Palabras de 6 letras.";
    botonSeisLetras.classList.add("seisLetras");
    agruparBotonesMenu.appendChild(botonSeisLetras);
    botonSeisLetras.addEventListener("click", function() {
      menuElegirLetras.classList.remove("menuLetras");
      menuElegirLetras.classList.add("cerrarModal");
      setTimeout(function() {
        menuElegirLetras.remove();
        overlayBody.remove();
      }, 2000);
    })

    // Boton al azar letras //
    let botonMezclarArrays = document.createElement("button");
    botonMezclarArrays.textContent = "Al azar entre las tres listas";
    botonMezclarArrays.classList.add("mezclarArrays");
    agruparBotonesMenu.appendChild(botonMezclarArrays);
    botonMezclarArrays.addEventListener("click", function() {
      menuElegirLetras.classList.remove("menuLetras");
      menuElegirLetras.classList.add("cerrarModal");
      setTimeout(function() {
        menuElegirLetras.remove();
        overlayBody.remove();
      }, 2000);
    })
});