// Ejercicio For 6: Calculadora de Potencias
// Implementa una función que use un ciclo for para calcular la potencia de un número sin usar Math.pow(). 
// Debe mostrar el proceso paso a paso.
function potencia(base, exponente) {
    let resultado = 1;

    for (let i = 1; i <= exponente; i++) {
        resultado *= base;
        console.log("Paso " + i + ": " + resultado);
    }

    return resultado;
}

let base = 2;
let exponente = 5;
let resultadoFinal = potencia(base, exponente);

console.log("Resultado final de " + base + "^" + exponente + " = " + resultadoFinal);
