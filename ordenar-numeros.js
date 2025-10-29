function ordenarNumeros() {
    let n1 = document.getElementById("ord1").value;
    let n2 = document.getElementById("ord2").value;
    let n3 = document.getElementById("ord3").value;
  
    if (n1 === "" || n2 === "" || n3 === "") {
      document.getElementById("resultadoOrden").innerText = "Por favor, completa los tres campos.";
      return;
    }
  
    let num1 = parseFloat(n1);
    let num2 = parseFloat(n2);
    let num3 = parseFloat(n3);
  
    const numeros = [num1, num2, num3];
    const ordenados = [...numeros].sort((a, b) => b - a); // De mayor a menor
  
    let mensaje = `Orden: ${ordenados.join(" > ")}`;
  
    // Detectar empates
    const unicos = [...new Set(numeros)];
    if (unicos.length === 1) {
      mensaje += " (Todos son iguales)";
    } else if (unicos.length === 2) {
      mensaje += " (Hay dos números iguales)";
    }
  
    document.getElementById("resultadoOrden").innerText = mensaje;
  }
  