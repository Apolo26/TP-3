function validarFecha() {
  const dia = parseInt(document.getElementById("dia").value);
  const mes = parseInt(document.getElementById("mes").value);
  const anio = parseInt(document.getElementById("anio").value);

  const fecha = new Date(anio, mes - 1, dia);

  if (isNaN(fecha.getTime())) {
    document.getElementById("resultado").innerHTML =
      "La fecha ingresada es inválida.";
  } else {
    document.getElementById("resultado").innerHTML =
      "La fecha ingresada es " + fecha.toDateString();
  }
  console.log(fecha);
}
