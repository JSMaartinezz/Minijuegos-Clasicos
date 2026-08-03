// Variables globales 
let piedra = document.querySelector(".piedra");
let papel = document.querySelector(".papel");
let tijeras = document.querySelector(".tijeras");
let eleccionHumana = document.querySelector(".eleccionHumana");
let eleccionJugador = document.querySelector(".eleccionJugador");
let resultado = document.querySelector(".resultado");
let eleccionMaquina = document.querySelector(".eleccionMaquina");
let resultadoMaquina = document.querySelector(".resultadoMaquina");
let marcador = document.querySelector(".marcador");
let victorias = 0;
let derrotas = 0;
let empates = 0;
let vs = document.querySelector(".vs");
let eleccionMachine = document.querySelector(".eleccionMachine");
let reiniciarPartida = document.querySelector(".reiniciarPartida");
let ronda = false;
let estadoPartida = true;
let humano = document.querySelector(".humano");
let botonPotenciador;
// Variables globales para posibles potenciadores //
let potenciadorJugadorDisponible = false;
let potenciadorJugadorUsado = false;
let potenciadorMaquinaDisponible = false;
let potenciadorMaquinaUsado = false;
let potenciadorActivado = false;
let victoriasConsecutivasJugador = 0;
let victoriasConsecutivasMaquina = 0;
let opcionesMaquina = ["Piedra", "Papel", "Tijeras"];
let mensajePotenciador = document.querySelector(".mensajePotenciador");
let botonQuitar = document.querySelector(".botonQuitar");
let mensajeExplicativo = document.querySelector(".mensajeExplicativo");


// Evento botonPiedra
piedra.addEventListener("click", function() {
    ronda = true;
    resultado.textContent = "";
    eleccionJugador.textContent = "";
    eleccionHumana.textContent = "";
    eleccionMachine.textContent = "";
    eleccionMaquina.textContent = "";
    eleccionJugador.textContent = "Piedra";
    eleccionHumana.textContent = ("💎");
});

// Evento botonPapel
papel.addEventListener("click", function() {
    ronda = true;
    resultado.textContent = "";
    eleccionJugador.textContent = "";
    eleccionHumana.textContent = "";
    eleccionMachine.textContent = "";
    eleccionMaquina.textContent = "";
    eleccionJugador.textContent = "Papel";
    eleccionHumana.textContent = ("📋");
});

// Evento botonTijeras
tijeras.addEventListener("click", function() {
    ronda = true;
    resultado.textContent = "";
    eleccionJugador.textContent = "";
    eleccionHumana.textContent = "";
    eleccionMachine.textContent = "";
    eleccionMaquina.textContent = "";
    eleccionJugador.textContent = "Tijeras";
    eleccionHumana.textContent = ("✂️");
});

marcador.textContent = "TÚ 👤: " +victorias+ " | RIVAL 🤖: " +derrotas+ " | EMPATES 🤝: " +empates;

// Evento VS (COMPARAR) //
vs.addEventListener("click", function() {
    // Array para opciones de la máquina //
    if (ronda === false) {
        return;
    };
    if (estadoPartida === false) {
        return;
    };

    // ELECCION CON POTENCIADOR ACTIVADO //
    if (potenciadorJugadorUsado === false) {
        opcionesMaquina = ["Piedra", "Papel", "Tijeras"];
    } else {potenciadorJugadorUsado = false};
    
    console.log(opcionesMaquina);
    let jugada = Math.floor(Math.random()* opcionesMaquina.length);
    let random = opcionesMaquina[jugada];
    
    // ELECCIONES DE LA MAQUINA AL AZAR //
    if (random === "Piedra") {
    eleccionMaquina.textContent = ("💎");
    eleccionMachine.textContent = ("Piedra")
    ronda = false;
    } else if (random === "Papel") {
    eleccionMaquina.textContent = ("📋");
    eleccionMachine.textContent = ("Papel")
    ronda = false;
    } else {
    eleccionMaquina.textContent = ("✂️");
    eleccionMachine.textContent = ("Tijeras")
    };

    // COMPARACIONES //
    if (eleccionJugador.textContent === "Piedra" && random === "Piedra") {
        resultado.textContent = "EMPATE";
        victoriasConsecutivasJugador = 0;
        victoriasConsecutivasMaquina = 0;
        empates++;
        marcador.textContent = "TÚ 👤: " +victorias+ " | RIVAL 🤖: " +derrotas+ " | EMPATES 🤝: " +empates;
        ronda = false;

    };
    if (eleccionJugador.textContent === "Piedra" && random === "Papel") {
        victoriasConsecutivasJugador = 0;
        victoriasConsecutivasMaquina++;
        resultado.textContent = "PERDISTE";
        derrotas++;
        marcador.textContent = "TÚ 👤: " +victorias+ " | RIVAL 🤖: " +derrotas+ " | EMPATES 🤝: " +empates;
        ronda = false;

    };
    if (eleccionJugador.textContent === "Piedra" && random === "Tijeras") {
        victoriasConsecutivasJugador++;
        victoriasConsecutivasMaquina = 0;
        resultado.textContent = "GANASTE";
        victorias++;
        marcador.textContent = "TÚ 👤: " +victorias+ " | RIVAL 🤖: " +derrotas+ " | EMPATES 🤝: " +empates;
        ronda = false;

    };
    if (eleccionJugador.textContent === "Papel" && random === "Papel") {
        victoriasConsecutivasJugador = 0;
        victoriasConsecutivasMaquina = 0;
        resultado.textContent = "EMPATE";
        empates++;
        marcador.textContent = "TÚ 👤: " +victorias+ " | RIVAL 🤖: " +derrotas+ " | EMPATES 🤝: " +empates;
        ronda = false;

    };
    if (eleccionJugador.textContent === "Papel" && random === "Piedra") {
        victoriasConsecutivasJugador++;
        victoriasConsecutivasMaquina = 0;
        resultado.textContent = "GANASTE";
        victorias++;
        marcador.textContent = "TÚ 👤: " +victorias+ " | RIVAL 🤖: " +derrotas+ " | EMPATES 🤝: " +empates;
        ronda = false;
    };
    if (eleccionJugador.textContent === "Papel" && random === "Tijeras") {
        victoriasConsecutivasJugador = 0;
        victoriasConsecutivasMaquina++;
        resultado.textContent = "PERDISTE";
        derrotas++;
        marcador.textContent = "TÚ 👤: " +victorias+ " | RIVAL 🤖: " +derrotas+ " | EMPATES 🤝: " +empates;
        ronda = false;

    };
    if (eleccionJugador.textContent === "Tijeras" && random === "Tijeras") {
        victoriasConsecutivasJugador = 0;
        victoriasConsecutivasMaquina = 0;
        resultado.textContent = "EMPATE";
        empates++;
        marcador.textContent = "TÚ 👤: " +victorias+ " | RIVAL 🤖: " +derrotas+ " | EMPATES 🤝: " +empates;
        ronda = false;

    };
    if (eleccionJugador.textContent === "Tijeras" && random === "Papel") {
        victoriasConsecutivasJugador++;
        victoriasConsecutivasMaquina = 0;
        resultado.textContent = "GANASTE";
        victorias++;
        marcador.textContent = "TÚ 👤: " +victorias+ " | RIVAL 🤖: " +derrotas+ " | EMPATES 🤝: " +empates;
        ronda = false;

    };
    if (eleccionJugador.textContent === "Tijeras" && random === "Piedra") {
        victoriasConsecutivasJugador = 0;
        victoriasConsecutivasMaquina++;
        resultado.textContent = "PERDISTE";
        derrotas++;
        marcador.textContent = "TÚ 👤: " +victorias+ " | RIVAL 🤖: " +derrotas+ " | EMPATES 🤝: " +empates;
        ronda = false;
    };

    if (victoriasConsecutivasJugador === 2 && potenciadorJugadorUsado === false && potenciadorJugadorDisponible === false) {
        botonPotenciador = document.createElement("button");
        botonPotenciador.classList.add("potenciador");
        mensajeExplicativo.classList.add("apareceIzq");
        // EVENTO CLICK BOTONPOTENCIADOR //
        botonPotenciador.addEventListener("click", function () {
        opcionesMaquina.splice(Math.floor(Math.random() * 3), 1);
        let opcionesArrayPotenciador = document.querySelector(".opcionesArrayPotenciador");
        mensajeExplicativo.classList.add("desapareceIzq");
        setTimeout(function() {
        mensajeExplicativo.classList.remove("apareceIzq");
        mensajeExplicativo.classList.remove("desapareceIzq");
    }, 2000);
        opcionesArrayPotenciador.textContent = opcionesMaquina;
        mensajePotenciador.classList.add("visible");
        //alert("Estas son las dos opciones que tu rival puede jugar en esta ronda: "  +  opcionesMaquina);
        potenciadorJugadorUsado = true;
        botonPotenciador.remove();
        console.log("potenciador pulsado, usado:", opcionesMaquina);
        });
        humano.appendChild(botonPotenciador);
        botonPotenciador.textContent = "🔥";
        potenciadorJugadorDisponible = true;
    };

    // MENSAJES DE VICTORIA/DERROTA //
    if (victorias === 10) {
        estadoPartida = false;
        papel.disabled = true;
        piedra.disabled = true;
        tijeras.disabled = true;
        resultado.textContent = "¡ENHORABUENA, HAS GANADO!";
    } else if (derrotas === 10) {
        estadoPartida = false;
        papel.disabled = true;
        piedra.disabled = true;
        tijeras.disabled = true;
        resultado.textContent = "¡LO SIENTO, HAS PERDIDO!";
    } else if (derrotas === 9 && victorias === 9) {
        resultado.textContent = "¡EL QUE GANE ESTA RONDA SE LLEVA LA PARTIDA!";
    } else if (empates === 10 && resultado.textContent === "EMPATE") {
        resultado.textContent = "🔥¡LA PARTIDA ESTÁ QUE ARDE!🔥"
    } else if (victorias === 9 && resultado.textContent === "GANASTE" ) {
        resultado.textContent = "¡SOLO TE QUEDA UNA VICTORIA MÁS PARA GANAR!";
    } else if (derrotas === 9 && resultado.textContent === "PERDISTE" ) {
        resultado.textContent = "¡A TU RIVAL SOLO LE QUEDA UNA VICTORIA MAS, CUIDADO!";
    } else {};
});

// Evento click boton salida mensaje //
botonQuitar.addEventListener("click", function() {
    mensajePotenciador.classList.add("salida");
    setTimeout(function() {
        mensajePotenciador.classList.remove("visible");
        mensajePotenciador.classList.remove("salida");
    }, 2000);
})


// BotonReiniciar
reiniciarPartida.addEventListener("click", function() {
    console.log("Partida Reiniciada.");
    resultado.textContent = "";
    eleccionJugador.textContent = "";
    eleccionHumana.textContent = "";
    eleccionMachine.textContent = "";
    eleccionMaquina.textContent = "";
    victorias = 0;
    derrotas = 0;
    empates = 0;
    marcador.textContent = "TÚ 👤: " +victorias+ " | RIVAL 🤖: " +derrotas+ " | EMPATES 🤝: " +empates;
    estadoPartida = true;
    papel.disabled = false;
    piedra.disabled = false;
    tijeras.disabled = false;
    potenciadorJugadorUsado = false;
    potenciadorMaquinaDisponible = false;
    potenciadorMaquinaUsado = false;
    victoriasConsecutivasJugador = 0;
    victoriasConsecutivasMaquina = 0;
    if (potenciadorJugadorDisponible === true) {
        botonPotenciador.remove();
    } else {};
    potenciadorJugadorDisponible = false;
    opcionesMaquina = ["Piedra", "Papel", "Tijeras"];
    mensajePotenciador.classList.remove("visible");
});

