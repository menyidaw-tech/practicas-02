function compararTextos() {
  let texto1 = document.getElementById("texto1").value.trim();
  let texto2 = document.getElementById("texto2").value.trim();

  let mensaje = texto1 === texto2
    ? "Los textos son exactamente iguales."
    : "Los textos son diferentes.";

  document.getElementById("resultadoTexto").innerText = mensaje;
}
