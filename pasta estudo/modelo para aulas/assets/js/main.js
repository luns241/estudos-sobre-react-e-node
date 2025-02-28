const form = document.querySelector("#forms");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector("#peso").value;
  const inputAltura = event.target.querySelector("#altura").value;
  const peso = Number(inputPeso);
  const altura = Number(inputAltura);

  if (!peso) {
    resultado("Peso Invalido", false);
    return;
  }
  if (!altura) {
    resultado("Altura Invalida", false);
    return;
  }

  const imc = getImc(peso, altura);

  const bodyMass = bodyMassIndex(imc);

  const mensagem = `Seu IMC é ${imc}. Você está com ${bodyMass}.`;

  resultado(mensagem, true);
});

function resultado(mensagem, valid) {
  const resullt = document.querySelector("#result");
  //   resullt.innerHTML = `<label>${mensagem}</label>`;

  resullt.innerHTML = "";

  const label = createLabel();

  if (valid) {
    label.classList.add("paragrafo-resultado");
  } else {
    label.classList.add("paragrafo-resultado-erro");
  }

  label.innerHTML = mensagem;

  resullt.appendChild(label);
}

function createLabel() {
  const label = document.createElement("label");
  return label;
}

function getImc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function bodyMassIndex(imc) {
  const categories = [
    { max: 18.5, label: "Abaixo do Peso" },
    { max: 25, label: "Peso Normal" },
    { max: 30, label: "Sobrepeso" },
    { max: 35, label: "Obesidade I" },
    { max: 40, label: "Obesidade II" },
    { max: Infinity, label: "Obesidade III" },
  ];

  return categories.find(({ max }) => imc < max).label.toUpperCase();
}
