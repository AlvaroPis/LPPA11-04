const Colores = ["Rojo","Verde","Amarillo","Azul"];
let Secuencia = [];
let Jugador = [];
let Comenzar = false;
let Nivel = 0;
let Puntuacion = 0;
let Tiempo = 0;
let secuenciaEnProgreso = false;


const botonComenzar = document.getElementById("Comenzar");
botonComenzar.addEventListener("click", ComenzarJuego);

const botonReset = document.getElementById("Reset");
botonReset.addEventListener("click",Resetear)

const botonRojo = document.querySelector(".Rojo");
botonRojo.addEventListener("click", manejoDeBotones);

const botonVerde = document.querySelector(".Verde");
botonVerde.addEventListener("click", manejoDeBotones);

const botonAmarillo = document.querySelector(".Amarillo");
botonAmarillo.addEventListener("click", manejoDeBotones);

const botonAzul = document.querySelector(".Azul");
botonAzul.addEventListener("click", manejoDeBotones);

const turnoTexto = document.getElementById("turno-texto");

function ColorRandom(){
    const randomColor = Math.floor(Math.random() * Colores.length);
    return Colores[randomColor];
}

function ComenzarJuego(){
    if (!Comenzar) {
            Comenzar = true;
            Secuencia = [];
            Jugador = [];
            Nivel = 0;
            Puntuacion = 0;
            nextLevel();
            botonComenzar.disabled = true;
            botonReset.disabled = false;
      }
}

function nextLevel() {
    Nivel++;
    updateLevelText();
    const nextColor = ColorRandom();
    Secuencia.push(nextColor);
    animarSecuencia();
    Jugador = [];
}

function updateLevelText(){
    const levelText = document.getElementById("nivel");
    levelText.textContent = `NIVEL ${Nivel} - PUNTUACION ${Puntuacion}`;
    levelText.style.color = "white";
}

function animateButton(color) {
    const button = document.querySelector(`.Boton.${color}`);
    button.classList.add("active-border");
    setTimeout(function() {
      button.classList.remove("active-border");
    }, 1000);
}

function animarSecuencia() {
    turnoTexto.textContent = "Aguarde, aún no es su turno...";
    secuenciaEnProgreso  = true;
    let i = 0;
    const interval = setInterval(function() {
        animateButton(Secuencia[i]);
        i++;
         if (i >= Secuencia.length) {
          clearInterval(interval);
          setTimeout(function() {
            secuenciaEnProgreso = false;
            turnoTexto.textContent = "Ahora es su turno";
          }, 1000);
        }
    }, 3000);
}

function manejoDeBotones(event) {
    if (!secuenciaEnProgreso){
    const color = event.target.classList[1];
    Jugador.push(color);
    animateButton(color);
    chequearSecuencia();
    }
}

function chequearSecuencia() {
    for (let i = 0; i < Jugador.length; i++) {
      if (Jugador[i] !== Secuencia[i]) {
        FinDelJuego();
        return;
      }
    }
  
    if (Jugador.length === Secuencia.length) {
        Puntuacion++;
             setTimeout(function() {
                 nextLevel();
             }, 3000);
    }
}

function FinDelJuego() {
    Comenzar = false;
    alert(`Perdiste, has llegado al nivel ${Nivel} - Puntuacion: ${Puntuacion}`);
    Secuencia = [];
    Jugador = [];
    Puntuacion = 0;
    botonComenzar.disabled = false;
    botonReset.disabled = true;
}

function Resetear(){
    Comenzar = false;
    Nivel = 0;
    Puntuacion = 0;
    Secuencia = [];
    Jugador = [];
    ComenzarJuego();
}

