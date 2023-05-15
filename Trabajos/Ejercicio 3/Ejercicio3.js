function arreglarCodigo() {
  var lista = ['a', 'b', 'c', '1', 'x', '9', 'd', '4'];
  for (var i = 0; i < lista.length; i++) {
    var item = lista[i];
    if (isNaN(item)) {
      console.log(item);
    }
  }
  document.getElementById("mensaje").innerHTML = "Mira la consola :)";
}