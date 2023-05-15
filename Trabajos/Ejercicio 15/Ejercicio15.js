var contadorCanciones = 1;

function mostrarFormulario() {
  var formulario = document.getElementById("formularioCD");
  var botonAlbum = document.querySelector(".botonAlbum");
  formulario.style.display = "flex";
  botonAlbum.style.display = "none";
}

function agregarCancion() {
  var container = document.getElementById("canciones-container");

  // Crea elementos para la nueva canción
  var nombreInput = document.createElement("input");
  nombreInput.type = "text";
  nombreInput.name = "nombreCancion";
  nombreInput.placeholder = "Nombre de la canción";

  var compositorInput = document.createElement("input");
  compositorInput.type = "text";
  compositorInput.name = "compositorCancion";
  compositorInput.placeholder = "Compositor de la canción";

  var duracionInput = document.createElement("input");
  duracionInput.type = "text";
  duracionInput.name = "duracionCancion";
  duracionInput.placeholder = "Duración de la canción";

  // Agregar elementos a la línea de la canción
  var nuevaLinea = document.createElement("div");
  nuevaLinea.appendChild(nombreInput);
  nuevaLinea.appendChild(compositorInput);
  nuevaLinea.appendChild(duracionInput);

  // Agregar la línea de la canción al contenedor
  container.appendChild(nuevaLinea);

  // Actualiza el texto de la etiqueta "Canción X"
  contadorCanciones++;
  var labelCancion = document.createElement("label");
  labelCancion.textContent = "Canción " + contadorCanciones + ":";

  // Agregar elementos de entrada y etiqueta a la línea de la canción
  var nuevaLinea = document.createElement("div");
  nuevaLinea.appendChild(labelCancion);
  nuevaLinea.appendChild(nombreInput);
  nuevaLinea.appendChild(compositorInput);
  nuevaLinea.appendChild(duracionInput);

  // Agregar la línea de la canción al contenedor
  container.appendChild(nuevaLinea);
}

function guardarDatos(event) {
  event.preventDefault(); // Evitar el envío del formulario

  var nombreCD = document.getElementById("nombreCD").value;
  var artistaCD = document.getElementById("artistaCD").value;
  var generoCD = document.getElementById("generoCD").value;
  var cancionesInputs = document.querySelectorAll(
    "#canciones-container input[name='nombreCancion']"
  );

  if (
    nombreCD === "" ||
    artistaCD === "" ||
    generoCD === "" ||
    cancionesInputs.length === 0
  ) {
    alert("Por favor, completa todos los campos antes de guardar.");
    return;
  }

  var datosCD = {
    nombre: document.getElementById("nombreCD").value,
    artista: document.getElementById("artistaCD").value,
    genero: document.getElementById("generoCD").value,
    canciones: [],
  };

  var cancionesInputs = document.querySelectorAll(
    "#canciones-container input[name='nombreCancion']"
  );
  for (var i = 0; i < cancionesInputs.length; i++) {
    var nombreCancion = cancionesInputs[i].value;
    var compositorCancion = cancionesInputs[i].nextElementSibling.value;
    var duracionCancion =
      cancionesInputs[i].nextElementSibling.nextElementSibling.value;
    datosCD.canciones.push({
      nombre: nombreCancion,
      compositor: compositorCancion,
      duracion: duracionCancion,
    });
  }

  // Guardar los datos en el almacenamiento local
  localStorage.setItem("datosCD", JSON.stringify(datosCD));

  // Mostrar los datos en la consola
  console.log("Datos del CD:", datosCD);

  // Mostrar el mensaje debajo del formulario
  var mensaje = document.getElementById("mensaje");
  mensaje.style.display = "block";
}

var formulario = document.getElementById("formularioCD");
formulario.addEventListener("submit", guardarDatos);