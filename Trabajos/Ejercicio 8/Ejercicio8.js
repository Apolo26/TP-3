function calcular() {
  //Obtener los números ingresados por el usuario y guardarlos en un array
  var numeros = document.getElementById("numeros").value.split(",");
  //Convertir los números a tipo numérico
  numeros = numeros.map(Number);
  //Ordenar los números de menor a mayor
  numeros.sort(function(a, b){return a - b});
  //Calcular el promedio
  var sum = 0;
  for (var i = 0; i < numeros.length; i++) {
    sum += numeros[i];
  }
  var promedio = sum / numeros.length;
  //Calcular la mediana
  var mediana;
  if (numeros.length % 2 == 0) {
    mediana = (numeros[numeros.length/2 - 1] + numeros[numeros.length/2]) / 2;
  } else {
    mediana = numeros[(numeros.length-1)/2];
  }
  //Calcular el mínimo y el máximo
  var minimo = numeros[0];
  var maximo = numeros[numeros.length-1];
  //Calcular la desviación estándar
  var sumaCuadrados = 0;
  for (var i = 0; i < numeros.length; i++) {
    sumaCuadrados += Math.pow(numeros[i] - promedio, 2);
  }
  var desviacion = Math.sqrt(sumaCuadrados / numeros.length);

  //Mostrar los resultados en la página
  document.getElementById("resultado").innerHTML = "Promedio: " + promedio.toFixed(2) + "<br>" +
                          "Mediana: " + mediana.toFixed(2) + "<br>" +
                          "Mínimo: " + minimo + "<br>" +
                          "Máximo: " + maximo + "<br>" +
                          "Desviación Estándar: " + desviacion.toFixed(2);
}