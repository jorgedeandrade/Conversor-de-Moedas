var valorDolar = 5.2222;
var valorEuro = 5.1757;

function Real() {
  var entrada = parseFloat(document.getElementById("valorDeEntrada").value);
  var resultado = document.getElementById("valorConvertido");
  var resultadoEmDolar = (entrada / valorDolar).toFixed(2);
  var resultadoEmEuro = (entrada / valorEuro).toFixed(2);

  if (isNaN(entrada) || entrada < 0) {
    resultado.innerHTML = "Digite um valor válido";
  } else {
    resultado.innerHTML =
      "Convertendo R$ " +
      entrada.toFixed(2) +
      "<br>Resulta em  US$ " +
      resultadoEmDolar +
      "   ou  € " +
      resultadoEmEuro;
  }
}

function Dolar() {
  var entrada = parseFloat(document.getElementById("valorDeEntrada").value);
  var resultado = document.getElementById("valorConvertido");
  var resultadoEmReal = (entrada * valorDolar).toFixed(2);
  var resultadoEmEuro = (resultadoEmReal / valorEuro).toFixed(2);

  if (isNaN(entrada) || entrada < 0) {
    resultado.innerHTML = "Digite um valor válido";
  } else {
    resultado.innerHTML =
      "Convertendo US$ " +
      entrada.toFixed(2) +
      "<br>Resulta em R$ " +
      resultadoEmReal +
      "   ou  € " +
      resultadoEmEuro;
  }
}

function Euro() {
  var entrada = parseFloat(document.getElementById("valorDeEntrada").value);
  var resultado = document.getElementById("valorConvertido");
  var resultadoEmReal = (entrada * valorEuro).toFixed(2);
  var resultadoEmDolar = (resultadoEmReal / valorDolar).toFixed(2);

  if (isNaN(entrada) || entrada < 0) {
    resultado.innerHTML = "Digite um valor válido";
  } else {
    resultado.innerHTML =
      "Convertendo € " +
      entrada.toFixed(2) +
      "<br>Resulta em R$ " +
      resultadoEmReal +
      "   ou  US$ " +
      resultadoEmDolar;
  }
}