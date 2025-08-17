// Ejercicio For 8: Contador de Caracteres
// Desarrolla un programa que use un ciclo for para contar la frecuencia de cada carácter en una cadena de texto. 
// Muestra los resultados ordenados alfabéticamente.
let texto = "programacion";
let contador = {};

for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];
    if (contador[caracter]) {
        contador[caracter]++;
    } else {
        contador[caracter] = 1;
    }
}

let caracteresOrdenados = Object.keys(contador).sort();

console.log("Frecuencia de caracteres:");
for (let i = 0; i < caracteresOrdenados.length; i++) {
    let c = caracteresOrdenados[i];
    console.log(c + ": " + contador[c]);
}

