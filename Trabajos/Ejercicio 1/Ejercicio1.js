function mostrarDiasVividos() {
  var nombre = prompt("Ingresa tu nombre");
  var edad = prompt("Ingresa tu edad");

  //calcula la edad

  var diasVividos = Math.floor(edad * 365.25);

  // crea el párrafo con la clase CSS

  var p = document.createElement("p");
  var texto = document.createTextNode(nombre + ", has vivido aproximadamente "+ diasVividos + " dias.");
  p.appendChild(texto);
  p.classList.add("resultado");


  var content = document.querySelector(".content");
  content.appendChild(p);
  
  console.log(texto);
}

