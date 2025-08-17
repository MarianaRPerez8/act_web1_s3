// Ejercicio For 4: Generador de Números Primos
// Mostrar todos los números primos entre 1 y 100 y contarlos

let contadorPrimos = 0;


for (let i = 2; i <= 100; i++) {
    let esPrimo = true;

   
    for (let j = 2; j < i; j++) {
        if (i % j === 0) { 
            esPrimo = false; 
            break;
        }
    }

    if (esPrimo) {
        console.log(i + " es primo");
        contadorPrimos++;
    }
}

console.log("Se encontraron " + contadorPrimos + " números primos entre 1 y 100.");
