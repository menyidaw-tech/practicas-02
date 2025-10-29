// Ejercicio 1: ¿Es mayor?
function compararMayor() {
  let a = parseFloat(document.getElementById("mayor1").value);
  let b = parseFloat(document.getElementById("mayor2").value);
  const mensaje = a > b ? a+ " es mayor que "+b : b+" es mayor que "+a;
  document.getElementById("resultadoMayor").innerText = mensaje;
}

// Ejercicio 2: ¿Son iguales?
function compararIgual() {
  let a = parseFloat(document.getElementById("igual1").value);
  let b = parseFloat(document.getElementById("igual2").value);
  const mensaje = a === b ? "Los números son iguales" : "Los números son diferentes";
  document.getElementById("resultadoIgual").innerText = mensaje;
}

// Ejercicio 3: ¿Es menor o igual?
function compararMenorIgual() {
  let a = parseFloat(document.getElementById("menor1").value);
  let b = parseFloat(document.getElementById("menor2").value);
  const mensaje = a <= b ? `${a} es menor o igual que ${b}` : `${a} no es menor o igual que ${b}`;
  document.getElementById("resultadoMenorIgual").innerText = mensaje;
}
