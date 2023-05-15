function cambiarClaseEstilo() {
  var lista = document.getElementById("lista");
  if (lista.classList.contains("estilo1")) {
    lista.classList.remove("estilo1");
    lista.classList.add("estilo2");
  } else {
    lista.classList.remove("estilo2");
    lista.classList.add("estilo1");
  }
}