function validarFormulario() {

  // Esto valida el campo del nombre
  var nombre = document.getElementById("nombre").value;
  if (nombre == "") {
    alert("Por favor, ingresa tu nombre.");
    return false;
  }

  // Esto valida el campo del apellido
  var apellido = document.getElementById("apellido").value;
  if (apellido == "") {
    alert("Por favor, ingresa tu apellido.");
    return false;
  }

  // Esto valida el campo del sexo
  var sexo = document.getElementById("sexo").value;
  if (sexo == "") {
    alert("Por favor, selecciona tu sexo.");
    return false;
  }

  // Esto valida el campo de la fecha de nacimiento
  var fechaNacimiento = document.getElementById("fecha-nacimiento").value;
  if (fechaNacimiento == "") {
    alert("Por favor, ingresa tu fecha de nacimiento.");
    return false;
  }

  // Esto valida el campo del correo
  var correoElectronico = document.getElementById("correo").value;
  if (correoElectronico == "") {
    alert("Por favor, ingresa tu correo.");
    return false;
  }

  // Esto guarda los datos del formulario en el almacenamiento local del navegador
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("apellido", apellido);
  localStorage.setItem("sexo", sexo);
  localStorage.setItem("fecha-nacimiento", fechaNacimiento);
  localStorage.setItem("correo", correoElectronico);

  return true;
}

// Recupera los datos del formulario guardados en el almacenamiento local del navegador
window.onload = function() {
  document.getElementById("nombre").value = localStorage.getItem("nombre");
  document.getElementById("apellido").value = localStorage.getItem("apellido");
  document.getElementById("sexo").value = localStorage.getItem("sexo");
  document.getElementById("fecha-nacimiento").value = localStorage.getItem("fecha-nacimiento");
  document.getElementById("correo").value = localStorage.getItem("correo");
}


console.log(localStorage.getItem("nombre"));
console.log(localStorage.getItem("apellido"));
console.log(localStorage.getItem("sexo"));
console.log(localStorage.getItem("fecha-nacimiento"));
console.log(localStorage.getItem("correo"));