let n1 = prompt("Ingrese numero 1 "),
  n2 = prompt("Ingrese numero 2 "),
  resul = parseInt(n1) + parseInt(n2);

if (resul < 0) {
  console.log("El resultado es negativo " + resul);
} else if (resul > 0) {
  console.log("El resultado es positivo " + resul);
} else {
  console.log("El resultado es igual a 0 " + resul);
}
