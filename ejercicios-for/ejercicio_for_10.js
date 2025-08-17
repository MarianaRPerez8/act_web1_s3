// Ejercicio For 10: Validador de Palíndromos
// Implementa un programa que use un ciclo for para verificar si una palabra o frase es un palíndromo. 
// Debe ignorar espacios, mayúsculas y signos de puntuación.
let texto = "Juanita lava la tina";
let limpio = "";

for (let i = 0; i < texto.length; i++) {
    let c = texto[i].toLowerCase();
    if (c >= "a" && c <= "z" || c >= "0" && c <= "9") {
        limpio += c;
    }
}

let esPalindromo = true;
for (let i = 0; i < limpio.length / 2; i++) {
    if (limpio[i] !== limpio[limpio.length - 1 - i]) {
        esPalindromo = false;
        break;
    }
}

console.log("Texto original:", texto);
console.log("Texto limpio:", limpio);
console.log(esPalindromo ? "Es un palíndromo" : "No es un palíndromo");
