function validarFormulario(event) {
  event.preventDefault();

  var usuarioInput = document.getElementById("usuario");
  var passwordInput = document.getElementById("password");
  var mensajeError = document.getElementById("mensajeError");

  var usuario = usuarioInput.value;
  var password = passwordInput.value;

  // Validación del usuario
  var usuarioValido = /^[A-Z][a-zA-Z0-9]*[0-9]{3}/.test(usuario);

  // Validación de la contraseña
  var passwordValido = /^[0-9].*[A-Z][0-9]$/.test(password) && password.length >= 8;

  if (usuarioValido && passwordValido) {
    mensajeError.textContent = ""; // Borrar mensaje de error si existe
    alert("Formulario enviado correctamente");
  } else {
    mensajeError.textContent = "Usuario o contraseña inválidos";
  }
}
