// Ejercicio While 2: Suma de Números Pares
// Implementa un ciclo while que sume todos los números pares entre 1 y 100. 
// Muestra el resultado final y cuántos números se sumaron.
let i = 1;
let suma = 0;
let contador = 0;

while (i <= 100) {
    if (i % 2 === 0) {
        suma += i;
        contador++;
    }
    i++;
}

console.log("Suma total de pares:", suma);
console.log("Cantidad de números pares sumados:", contador);
