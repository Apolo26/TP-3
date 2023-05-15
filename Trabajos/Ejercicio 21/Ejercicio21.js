let result = document.getElementById('result');
let expression = '';

function numeroAnexado(number) {
  expression += number;
  result.value = expression;
}

function operadorAnexado(operator) {
  expression += operator;
  result.value = expression;
}

function calcular() {
  try {
    let resultValue = eval(expression);
    result.value = resultValue;
    expression = '';
  } catch (error) {
    result.value = 'Error';
  }
}

function clearResultado() {
  result.value = '';
  expression = '';
}
