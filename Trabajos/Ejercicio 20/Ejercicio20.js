function evaluarRespuestas() {
  var pregunta1 = document.getElementById("pregunta1").value;
  var pregunta2 = document.getElementById("pregunta2").value;
  var pregunta3 = document.getElementById("pregunta3").value;
  var contadorRespuestasCorrectas = 0;

  if (pregunta1 === "px") {
    contadorRespuestasCorrectas++;
  }

  if (pregunta2 === "ol") {
    contadorRespuestasCorrectas++;
  }

  if (pregunta3 === "border") {
    contadorRespuestasCorrectas++;
  }

  var resultado = document.getElementById("resultado");
  resultado.innerHTML = `Respuestas correctas: ${contadorRespuestasCorrectas}`;
}

function mostrarRespuestas() {
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <h2>Respuestas Correctas:</h2>
    <p>Pregunta 1: a) px (pixeles)</p>
    <p>Pregunta 2: b) ol (ordered list)</p>
    <p>Pregunta 3: b) border</p>
  `;
}
