// Ejercicio For 9: Simulador de Dados
// Crea un simulador que use un ciclo for para lanzar dos dados 1000 veces. 
// Calcula y muestra la frecuencia de cada suma posible (2-12) y determina cuál es la más común.
let frecuencia = {};

for (let i = 2; i <= 12; i++) {
    frecuencia[i] = 0;
}

for (let i = 0; i < 1000; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let suma = dado1 + dado2;
    frecuencia[suma]++;
}

console.log("Frecuencia de las sumas (1000 lanzamientos):");
for (let i = 2; i <= 12; i++) {
    console.log(i + ": " + frecuencia[i]);
}

let sumaMasComun = 2;
for (let i = 3; i <= 12; i++) {
    if (frecuencia[i] > frecuencia[sumaMasComun]) {
        sumaMasComun = i;
    }
}

console.log("La suma más común fue " + sumaMasComun + " con " + frecuencia[sumaMasComun] + " apariciones.");
