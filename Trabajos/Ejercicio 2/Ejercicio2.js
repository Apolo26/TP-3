const botonDibujar = document.getElementById("boton-dibujar");
const texto = document.getElementById("texto");

botonDibujar.addEventListener("click", function() {
  const base = prompt("Ingresa la base del triángulo:");
  const altura = prompt("Ingresa la altura del triángulo:");

  let triangulo = "";
  for(let i=0; i<altura; i++) {
    for(let j=0; j<altura-i-1; j++) {
      triangulo += " ";
    }
    for(let k=0; k<=i; k++) {
      triangulo += "* ";
    }
    triangulo += "\n";
  }

  console.log(triangulo);
  texto.textContent = "Mira la consola :)";
});
