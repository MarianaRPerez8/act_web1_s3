// Ejercicio While 10: Procesador de Calificaciones
// Usa while para ingresar calificaciones de estudiantes (termina con -1). 
// Calcula el promedio, la nota más alta y más baja.

let calificacion;
let suma = 0;
let contador = 0;
let mayor = null;
let menor = null;

while (true) {
    calificacion = parseFloat(prompt("Ingresa una calificación (-1 para terminar): "));
    if (calificacion === -1) {
        break;
    }

    suma += calificacion;
    contador++;

    if (mayor === null || calificacion > mayor) {
           menor = calificacion;
    }
}

if (contador > 0) {
    let promedio = suma / contador;
    console.log("Promedio:", promedio);
    console.log("Nota más alta:", mayor);
    console.log("Nota más baja:", menor);
} else {
    console.log("No se ingresaron calificaciones.");
}
