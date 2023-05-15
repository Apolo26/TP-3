function cambiarColor(id) {
  var cuadrado = document.getElementById(id);
  var color = window.getComputedStyle(cuadrado).backgroundColor;
  document.body.style.backgroundColor = color;
}
