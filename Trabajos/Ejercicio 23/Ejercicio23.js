function agregarOpcion() {
  var select = document.getElementById("miSelect");
  var nuevaOpcion = document.getElementById("nuevaOpcion").value;

  var option = document.createElement("option");
  option.value = nuevaOpcion;
  option.text = nuevaOpcion;

  select.add(option);
}

function borrarOpcion() {
  var select = document.getElementById("miSelect");
  var selectedIndex = select.selectedIndex;

  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
}

function modificarOpcion() {
  var select = document.getElementById("miSelect");
  var selectedIndex = select.selectedIndex;
  var opcionModificada = document.getElementById("opcionModificada").value;

  if (selectedIndex !== -1) {
    select.options[selectedIndex].text = opcionModificada;
    select.options[selectedIndex].value = opcionModificada;
  }
}
