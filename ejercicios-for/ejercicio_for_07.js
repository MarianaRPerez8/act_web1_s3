// Ejercicio For 7: Matriz de Suma
// Usa ciclos for anidados para crear una matriz 5x5 donde cada elemento sea la suma de sus índices (fila + columna). 
// Muestra la matriz formateada.
let matriz = [];

for (let fila = 0; fila < 5; fila++) {
    let filaMatriz = [];
    for (let col = 0; col < 5; col++) {
        filaMatriz.push(fila + col);
    }
    matriz.push(filaMatriz);
}

console.log("Matriz 5x5 (suma de índices):");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" "));
}
