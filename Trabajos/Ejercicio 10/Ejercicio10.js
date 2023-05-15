function calcularDias() {
  var fechaIngresada = document.getElementById("fechaInput").value;
  var partesFecha = fechaIngresada.split("-");
  var fecha = new Date(
    partesFecha[2],
    partesFecha[1] - 1,
    partesFecha[0],
    0,
    0,
    0,
    0
  ); // no se a que se debe, pero si pongo la fecha actual dice que falta 1 dia
  var hoy = new Date();
  var unDiaEnMilisegundos = 24 * 60 * 60 * 1000;
  var diferenciaEnDias = Math.round((fecha - hoy) / unDiaEnMilisegundos);

  if (diferenciaEnDias < 0) {
    document.getElementById("resultado").innerHTML =
      Math.abs(diferenciaEnDias) + " días.";
    document.getElementById("imagen").style.display = "block";
  } else if (diferenciaEnDias == 0) {
    document.getElementById("resultado").innerHTML =
      "La fecha que ingresaste es hoy.";
    document.getElementById("imagen3").style.display = "block";
  } else {
    document.getElementById("resultado").innerHTML =
      "Esperando " + diferenciaEnDias + " días para la fecha ingresada.";
    document.getElementById("imagen2").style.display = "block";
  }
}
