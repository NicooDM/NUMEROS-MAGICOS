const obtenerInput = () => {
  let min = 0;
  let max = 10;
  let numElegido = document.querySelector("input").value;
  console.log(numElegido);

  let nunfinal = Math.floor(Math.random() * (max - min)) + min;
  if (numElegido == nunfinal) {
    alert("Ganaste!");
  } else {
    alert(`Perdiste Numero elegido ${numElegido}, Numero ganador ${nunfinal}`);
  }
};
const comenzarJuego = () => {
  alert("Se Inicio el Juego");
};
