// Ejercicio While 6: Búsqueda en Array
// Crea un programa que use while para buscar un elemento específico en un array de 15 números aleatorios. 
// Muestra en qué posición se encontró.
let numeros = [];
for (let i = 0; i < 15; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Array:", numeros);

let objetivo = 50; 
let i = 0;
let encontrado = false;

while (i < numeros.length) {
    if (numeros[i] === objetivo) {
        console.log("Número " + objetivo + " encontrado en la posición " + i);
        encontrado = true;
        break;
    }
    i++;
}

if (!encontrado) {
    console.log("El número " + objetivo + " no se encontró en el array.");
}
