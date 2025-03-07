let display = document.getElementById("display");

function adicionar(valor) {
  let ultimoCaractere = display.value.slice(-3);

  if (/[+\-*/]/.test(ultimoCaractere) && /[+\-*/]/.test(valor)) {
    display.value = display.value.slice(0, -3) + valor;
  } else {
    display.value += valor;
  }
}

function limpar() {
  display.value = "";
}

function removerUltimo() {
  display.value = display.value.slice(0, -2);
}

function calcular() {
  try {
    display.value = avaliarExpressao(display.value);
  } catch (e) {
    display.value = "Erro";
  }
}

function avaliarExpressao(expressao) {
  let tokens = expressao.match(/(\d+(\.\d+)?|[\+\-\*\/])/g);
  if (!tokens) return "";

  let numeros = [];
  let operadores = [];

  const precedencia = { "+": 1, "-": 1, "*": 2, "/": 2 };

  function calcularTopo() {
    let b = numeros.pop();
    let a = numeros.pop();
    let op = operadores.pop();
    switch (op) {
      case "+":
        numeros.push(a + b);
        break;
      case "-":
        numeros.push(a - b);
        break;
      case "*":
        numeros.push(a * b);
        break;
      case "/":
        numeros.push(b !== 0 ? a / b : "");
        break;
    }
  }

  for (let token of tokens) {
    if (!isNaN(token)) {
      numeros.push(parseFloat(token));
    } else if (token in precedencia) {
      while (
        operadores.length &&
        precedencia[operadores[operadores.length - 1]] >= precedencia[token]
      ) {
        calcularTopo();
      }
      operadores.push(token);
    }
  }

  while (operadores.length) {
    calcularTopo();
  }

  return numeros[0];
}
