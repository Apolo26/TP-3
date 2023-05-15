function splitString() {
  var string = prompt("Ingrese una cadena de texto");
  var words = string.split(" ");
  var mensaje = document.getElementById("mensaje");
  mensaje.innerHTML = "Número de palabras: " + words.length + "<br>" +
                      "Primera palabra: " + words[0] + "<br>" +
                      "Última palabra: " + words[words.length - 1] + "<br>" +
                      "Palabras colocadas en orden inverso: " + words.reverse().join(" ") + "<br>" +
                      "Palabras ordenadas de la 'a' hasta la 'z': " + words.sort().join(" ") + "<br>" +
                      "Palabras ordenadas de la 'z' hasta la 'a': " + words.sort().reverse().join(" ") + "<br>";
}
