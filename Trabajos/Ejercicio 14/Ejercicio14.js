function validarFormulario(event) {

  var nombre = document.forms["registro"]["nombre"].value;
  var edad = document.forms["registro"]["edad"].value;
  var correo = document.forms["registro"]["correo"].value;

  // Esto valida la longitud del nombre
  if (nombre.length <= 4) {
    alert("El nombre debe tener más de 4 caracteres");
    return false;
  }

  // Esto valida que el nombre solo contenga caracteres del alfabeto español
  if (!/^[a-zA-Z]+$/.test(nombre)) {
    alert("El nombre sólo debe contener caracteres del alfabeto español");
    return false;
  }

  // Esto valida que la edad solo contenga números y este entre 18 y 30
  if (isNaN(edad) || edad < 18 || edad > 30) {
    alert("La edad debe ser un número entre 18 y 30");
    return false;
  }

  // Esto valida longitud del correo y que tenga arroba
  if (correo.length <= 5 || correo.indexOf("@") === -1) {
    alert(
      "La dirección de correo debe tener más de 5 caracteres y contener una arroba"
    );
    return false;
  }
  event.preventDefault(); // con esto se detiene la actualizacion que hace el submit del formulario
  console.log("El formulario se envio, ta todo bien");
}
