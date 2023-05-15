function generarTabla() {
  // solicita los datos de la persona mediante prompts
  var nombre = prompt("Ingresa tu nombre:");
  var apellido = prompt("Ingresa tu apellido:");
  var edad = prompt("Ingresa tu edad:");
  
  // crea el array con los datos de la persona
  var persona = [nombre, apellido, edad];
  
  // obtiene la tabla y el cuerpo de la tabla
  var tabla = document.getElementById("tabla");
  var cuerpoTabla = tabla.tBodies[0];
  
  // crear una fila para los datos y la agrega a la tabla
  var fila = cuerpoTabla.insertRow();
  for (var i = 0; i < persona.length; i++) {
    var celda = fila.insertCell();
    celda.innerText = persona[i];
  }
  
  // actualiza el número de fila en cada celda de la primera columna
  for (var i = 0; i < cuerpoTabla.rows.length; i++) {
    var filaActual = cuerpoTabla.rows[i];
    var celdaNumero = filaActual.cells[0];
    celdaNumero.innerText = i+1;
  }
  
  // muestra la tabla
  tabla.classList.remove("tabla-oculta");
}