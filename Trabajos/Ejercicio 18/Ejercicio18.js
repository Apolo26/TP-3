function convertirMoneda() {
  var monedaInput = document.getElementById("monedaInput");
  var resultadoInput = document.getElementById("resultadoInput");
  var tipoCambio = 467; // Valor de cambio fijo, 1 USD = 467 ARS

  if (monedaInput.value === "") {
    resultadoInput.value = "";
    return;
  }

  var cantidad = parseFloat(monedaInput.value);

  if (isNaN(cantidad)) {
    resultadoInput.value = "";
    return;
  }

  var labelMonedaInput = document.querySelector('.inputContainer:first-child .label');
  var labelResultadoInput = document.querySelector('.inputContainer:last-child .label');

  if (labelMonedaInput.textContent === "ARS:") {
    resultadoInput.value = (cantidad / tipoCambio).toFixed(2) + " USD";
  } else {
    resultadoInput.value = (cantidad * tipoCambio).toFixed(2) + " ARS";
  }
}

function intercambiarMonedas() {
  var labelMonedaInput = document.querySelector('.inputContainer:first-child .label');
  var labelResultadoInput = document.querySelector('.inputContainer:last-child .label');
  var temp = labelMonedaInput.textContent;
  labelMonedaInput.textContent = labelResultadoInput.textContent;
  labelResultadoInput.textContent = temp;
}