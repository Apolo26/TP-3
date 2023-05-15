function validarNumero() {
  var num = document.getElementById("num").value;
  if (num < 1 || num > 100) {
    alert("El número debe estar entre 1 y 100");
    return false;
  } else {
    alert("ta bien");
  }
  return true;
}