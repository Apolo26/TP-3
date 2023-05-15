var imagenes = [
  "imagen1.jpeg",
  "imagen2.jpg",
  "imagen3.jpg",
  "imagen4.png"
];

var indiceActual = 0;
var imagenProyector = document.getElementById("imagenProyector");

// Función para mostrar la imagen actual
function mostrarImagen() {
  imagenProyector.src = imagenes[indiceActual];
}

// Función para ir a la imagen anterior
function anterior() {
  indiceActual--;
  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  }
  mostrarImagen();
}

// Función para ir a la siguiente imagen
function siguiente() {
  indiceActual++;
  if (indiceActual >= imagenes.length) {
    indiceActual = 0;
  }
  mostrarImagen();
}

// Mostrar la primera imagen al cargar la página
mostrarImagen();