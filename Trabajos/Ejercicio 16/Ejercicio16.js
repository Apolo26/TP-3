var contadorTelefonos = 1;

function mostrarFormulario() {
  var formulario = document.getElementById("formularioContacto");
  var botonCrear = document.querySelector(".boton");
  formulario.style.display = "flex";
  botonCrear.style.display = "none";
}
function agregarTelefono() {
  var container = document.getElementById("telefonos-container");

  if (contadorTelefonos >= 3) {
    alert("No se pueden agregar más teléfonos.");
    return;
  }

  // Crea elemento para el nuevo teléfono
  var telefonoInput = document.createElement("input");
  telefonoInput.type = "text";
  telefonoInput.name = "telefono";
  telefonoInput.placeholder = "Teléfono";

  // Crea el contenedor para el teléfono y el label
  var telefonoContainer = document.createElement("div");
  telefonoContainer.classList.add("telefono-container");

  // Crea el label para el teléfono
  var labelTelefono = document.createElement("label");
  labelTelefono.textContent = "Teléfono " + (contadorTelefonos + 1) + ":";

  // Agrega el label y el input al contenedor
  telefonoContainer.appendChild(labelTelefono);
  telefonoContainer.appendChild(telefonoInput);

  // Agrega el contenedor al contenedor principal
  container.appendChild(telefonoContainer);

  // Incrementa el contador de teléfonos
  contadorTelefonos++;
}

function guardarContacto(event) {
  event.preventDefault(); // Evita el envío del formulario
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var mail = document.getElementById("mail").value;
  var telefonosInputs = document.querySelectorAll(
    "#telefonos-container input[name='telefono']"
  );
  var telefonos = [];

  if (
    nombre === "" ||
    apellido === "" ||
    mail === "" ||
    telefonosInputs.length === 0
  ) {
    alert(
      "Por favor, completa todos los campos obligatorios antes de guardar."
    );
    return;
  }

  if (!validarMail(mail)) {
    alert("El formato del mail no es válido.");
    return;
  }

  // Obtén los números de teléfono
  for (var i = 0; i < telefonosInputs.length; i++) {
    telefonos.push(telefonosInputs[i].value);
  }

  // Mostrar la alerta de contacto guardado
  alert("Contacto guardado correctamente");

  // Mostrar los datos en la consola
  console.log("Contacto guardado:", {
    nombre: nombre,
    apellido: apellido,
    mail: mail,
    telefonos: telefonos,
  });

  var mensaje = document.getElementById("mensaje");
mensaje.style.display = "block";
}

function validarMail(mail) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(mail);
}

function resetearFormulario() {
  document.getElementById("formularioContacto").reset();
  contadorTelefonos = 1;
  var telefonosContainer = document.getElementById("telefonos-container");
  telefonosContainer.innerHTML = "";
  var labelTelefono1 = document.createElement("label");
  labelTelefono1.textContent = "Teléfono 1:";
  telefonosContainer.appendChild(labelTelefono1);
}

var formulario = document.getElementById("formularioContacto");
formulario.addEventListener("submit", guardarContacto);