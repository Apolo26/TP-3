let generado = false;

function generarNumeros() {
  if (!generado) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "MIRA LA CONSOLA :)";
    mensaje.id = "mensaje";
    const container = document.querySelector(".container");
    container.appendChild(mensaje);
    generado = true;
  }
  generarNumerosAleatorios();
}

function generarNumerosAleatorios() {
  // Generar 50 números aleatorios entre 1 y 6
  const numeros = [];
  for (let i = 0; i < 50; i++) {
    numeros.push(Math.floor(Math.random() * 6) + 1);
  }

  // Mostrando x consola
  console.log(numeros);
}
