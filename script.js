function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}

function borrar() {
  document.getElementById("pantalla").value = " ";
}

function calcular() {
  const calcularPantalla = document.getElementById("pantalla").value;
  const resultado = eval(calcularPantalla);
  document.getElementById("pantalla").value = resultado;
}
