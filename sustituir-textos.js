function reemplazarPalabra() {
  const frase = document.getElementById("frase").value;
  const buscar = document.getElementById("buscar").value;
  const reemplazo = document.getElementById("reemplazo").value;

  if (!frase || !buscar || !reemplazo) {
    document.getElementById("resultadoReemplazo").innerText = "Tienes que completar todos los campos.";
    return;
  }

  if (!frase.includes(buscar)) {
    document.getElementById("resultadoReemplazo").innerText = `La palabra "${buscar}" no se encuentra en la frase.`;
    return;
  }

  const nuevaFrase = frase.replace(buscar, reemplazo);
  document.getElementById("resultadoReemplazo").innerText = `Resultado: ${nuevaFrase}`;
}
