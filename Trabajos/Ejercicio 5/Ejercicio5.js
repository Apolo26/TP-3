function jugar() {
  var numero = Math.floor(Math.random() * 1000000) + 1;
  var intentos = 0;
  var adivinado = false;
  while (!adivinado) {
    var respuesta = prompt("Adivina el número (entre 1 y 1000000):");
    intentos++;
    if (respuesta == null) {
      break;
    }
    var num = parseInt(respuesta);
    if (num == numero) {
      alert("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
      adivinado = true;
    } else if (num < numero) {
      alert("El número es mayor.");
    } else {
      alert("El número es menor.");
    }
  }
}
