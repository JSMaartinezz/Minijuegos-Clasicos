// Recogemos en variables todas las clases necesarias

let numeroAdivinar = document.querySelector(".numeroAdivinar");
let input = document.querySelector(".insertarNumero");
let botonEnviar = document.querySelector(".enviar");
let botonReinicio = document.querySelector(".reinicio");
let mensajes = document.getElementById("mensajes");
let intentos = 0;
let botonEmpezar = document.querySelector(".Empezar");
let juegoTerminado = false;
let sonidoVictoria = new Audio("sonidos/victoria.wav");
let sonidoDerrota = new Audio("sonidos/error.wav");
let parrafoTiempo = document.querySelector(".parrafoTiempo");
let tiempoRestante = 30;
let intervalo;



// Logica del juego:
// 1.Botón para empezar el juego
let juegoEmpezado = false;
let numeroSecreto;
let numeroIntentos = document.querySelector(".numeroIntentos");
botonEmpezar.addEventListener("click", function() {
    if (juegoEmpezado === false) {
        // 2.Generar el número secreto
        numeroSecreto = Math.floor(Math.random() * 100) + 1;
        tiempoRestante = 30;
        parrafoTiempo.textContent = ("Tiempo: 30s");
        intervalo = setInterval(function() {
        tiempoRestante = tiempoRestante - 1;
        parrafoTiempo.textContent = "Tiempo: " + tiempoRestante + "s";
        if (tiempoRestante === 0) {
            mensajes.textContent = "❌❌¡Se acabó el tiempo, has PERDIDO! Pulsa reiniciar o empezar para volver a jugar❌❌";
            sonidoDerrota.play();
            mensajes.classList.remove("alto", "bajo", "VICTORIA");
            mensajes.classList.add("derrota");
            clearInterval(intervalo);
            juegoEmpezado = false;
            juegoTerminado = true;
        }
        }, 1000);
        juegoEmpezado = true;
        intentos = 0;
        numeroAdivinar.textContent = ("Número generado, escribe un numero debajo y pulsa enviar para intentar adivinarlo.");
        mensajes.textContent = "";
        juegoTerminado = false;
    };
});

botonEnviar.addEventListener("click", function() {
    let inputNumero = Number(input.value);   
    if (juegoTerminado === true) return;
    if (juegoEmpezado === false && juegoTerminado === false) {
        mensajes.textContent = ("Pulsa: EMPEZAR")
    } else { 
        intentos = intentos + 1;
        numeroIntentos.textContent = intentos;
    if (inputNumero < numeroSecreto) {
        mensajes.classList.remove("bajo", "VICTORIA", "alto");
        mensajes.textContent = ("🔥 MAS ALTO 🔥");
        void mensajes.offsetHeight;
        mensajes.classList.add("alto");
    } else if (inputNumero > numeroSecreto) {
        mensajes.classList.remove("alto", "VICTORIA", "bajo");
        mensajes.textContent = ("🧊 MAS BAJO 🧊");
        void mensajes.offsetHeight;
        mensajes.classList.add("bajo");
        
    } else {mensajes.textContent = (" 🎊 🎉¡HAS ACERTADO! Pulsa el botón reiniciar para volver a jugar  🎊 🎉");
        mensajes.classList.remove("alto", "bajo");
        mensajes.classList.add("VICTORIA")
        void mensajes.offsetHeight;
        sonidoVictoria.play();
        clearInterval(intervalo);
        juegoTerminado = true;
    }};
});

botonReinicio.addEventListener("click", function() {
    juegoEmpezado = false;
    juegoTerminado = false;
    numeroIntentos.textContent = 0;
    input.value = "";
    mensajes.textContent = "Pulsa: EMPEZAR";
    numeroAdivinar.textContent = "";
    intentos = 0;
    mensajes.classList.remove("VICTORIA");
    mensajes.classList.remove("alto");
    mensajes.classList.remove("bajo");
    mensajes.classList.remove("derrota");
    clearInterval(intervalo);
    tiempoRestante = 30;
    parrafoTiempo.textContent = "Tiempo: 30s";
    tiempoRestante.textContent = "30s";
    mensajes.style.opacity = "1";
})
