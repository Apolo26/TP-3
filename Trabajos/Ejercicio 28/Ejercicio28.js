var cadena = "Hola profe, como le va?";
var campoTexto = document.getElementById("campoTexto");
var index = 0;

function escribirCadena() {
  campoTexto.value += cadena.charAt(index);
  index++;

  if (index < cadena.length) {
    setTimeout(escribirCadena, 700);
  }
}

escribirCadena();