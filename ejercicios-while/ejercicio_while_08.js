// Ejercicio While 8: Secuencia de Fibonacci
// Implementa un generador de la secuencia de Fibonacci usando while que muestre los primeros 20 números de la serie.
let n1 = 0;
let n2 = 1;
let contador = 0;
let limite = 20;

console.log("Secuencia de Fibonacci:");

while (contador < limite) {
    console.log(n1);
    let siguiente = n1 + n2;
    n1 = n2;
    n2 = siguiente;
    contador++;
}
