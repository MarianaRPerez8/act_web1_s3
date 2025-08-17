// Ejercicio While 9: Juego de Adivinanza Mejorado
// Crea un juego donde el usuario debe adivinar un número entre 1 y 100. 
// Usa while para dar pistas (mayor/menor) y limita a 7 intentos.

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let maxIntentos = 7;
let adivinado = false;

while (intentos < maxIntentos && !adivinado) {
    let intento = parseInt(prompt("Adivina el número (1-100): "));
    intentos++;

    if (intento === numeroSecreto) {
        adivinado = true;
        console.log("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
    } else if (intento < numeroSecreto) {
        console.log("El número secreto es mayor.");
    } else {
        console.log("El número secreto es menor.");
    }
}

if (!adivinado) {
    console.log("Se agotaron los intentos. El número era: " + numeroSecreto);
}
